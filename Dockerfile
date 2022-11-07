FROM node:18-bullseye as builder
ARG UID
ARG GID
RUN echo "uid: $UID, gid: $GID"
RUN if [ ${GID} -eq 1000 ]; then groupmod --new-name appuser node; else \
    if [ $(getent group ${GID} | cut -d: -f1) ]; then \
    printf "%s\n" ${GID} | xargs -I{} awk -F: '$3 == {}' /etc/group | cut -d: -f1 | xargs -n1 groupdel; \
    fi &&\
    groupadd -g ${GID} appuser; \
    fi && \
    if [ ${UID} -ne 1000 ]; then useradd -l -u ${UID} -g appuser appuser; else \
    usermod -l appuser node; fi; \
    mkdir -p /home/appuser
WORKDIR /home/appuser/my_app
COPY . .
RUN chown -R appuser:appuser /home/appuser
USER appuser
RUN npm install
RUN npm run build

FROM builder as dev 
EXPOSE 5173
ENTRYPOINT [ "tail",  "-f",  "/dev/null" ]

FROM nginx:stable-alpine as prod
EXPOSE 3000
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /home/appuser/my_app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]