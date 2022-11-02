<template>
  <div class="container">
    <div class="has-text-centered">
      <img
        class="acnh-logo"
        width="300"
        src="https://image.jimcdn.com/app/cms/image/transf/dimension=1070x10000:format=png/path/s2d75ac45bde449f0/image/ie1a596faec4848b8/version/1560528561/image.png"
      />
    </div>
    <div class="card mx-2 my-2">
      <div class="card-content">
        <form class="animal-form">
          <div class="field is-horizontal">
            <div class="field-label">
              <label class="label">Filtrer les animaux:</label>
            </div>
            <div class="field-body">
              <div class="field is-narrow">
                <div class="control">
                  <label class="checkbox ml-3">
                    <input type="checkbox" checked />
                    Créatures marines
                  </label>
                  <label class="checkbox ml-3">
                    <input type="checkbox" checked />
                    Insectes
                  </label>
                  <label class="checkbox ml-3">
                    <input type="checkbox" checked />
                    Poissons
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="has-text-right ml-3">
            <button class="button">
              <span class="icon">
                <!-- <i class="fa-solid fa-arrow-down-a-z"></i> -->
                <i class="fa-solid fa-arrow-up-a-z"></i>
              </span>
              <span>Trier Z-A</span>
            </button>
          </div>
        </form>
      </div>
    </div>

    <div class="animal-container">
      <div class="card animal-item mx-2 my-2">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <img
                  src="https://acnhapi.com/v1/icons/sea/1"
                  alt="alga wakame"
                />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">Alga wakame</p>
            </div>
            <div class="media-right">
              <div class="has-text-right">
                <span class="tag is-sea">Créature marine</span>
              </div>
            </div>
          </div>

          <div class="content">
            Let it be known that seaweed is a misnomer of the highest order!
            That is, it is not a noxious weed so much as it is a marine algae
            most beneficial to life on land and sea. Seaweed, you see, provides
            essential habitat and food for all manner of marine creatures. And
            it creates a great deal of the oxygen we land lovers love to breath
            too, hoo! And yet, I can't help but shudder when the slimy stuff
            touches my toes during a swim. Hoot! The horror!
          </div>
        </div>
      </div>
      <div class="card animal-item mx-2 my-2">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <img
                  src="https://acnhapi.com/v1/icons/fish/1"
                  alt="amarguillo"
                />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">Amarguillo</p>
            </div>
            <div class="media-right">
              <div class="has-text-right">
                <span class="tag is-fish">Poisson</span>
              </div>
            </div>
          </div>

          <div class="content">
            Bitterlings hide their eggs inside large bivalves—like clams—where
            the young can stay safe until grown. The bitterling isn't being
            sneaky. No, their young help keep the bivalve healthy by eating
            invading parasites! It's a wonderful bit of evolutionary deal
            making, don't you think? Each one keeping the other safe... Though
            eating parasites does not sound like a happy childhood... Is that
            why the fish is so bitter?
          </div>
        </div>
      </div>

      <div class="card animal-item mx-2 my-2">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <img
                  src="https://acnhapi.com/v1/icons/bugs/1"
                  alt="common butterfly"
                />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">Common butterfly</p>
            </div>
            <div class="media-right">
              <div class="has-text-right">
                <span class="tag is-bug">Insecte</span>
              </div>
            </div>
          </div>

          <div class="content">
            The common butterfly would have you believe it is but a beautiful
            friend flitting prettily about the flowers. Bah, I say! They may
            seem innocent things with their pretty white wings, but they hide a
            dark side! The common butterfly caterpillar is called a cabbage
            worm, you see, and it's a most voracious pest. The ravenous beasts
            chew through cabbage, broccoli, kale and the like with a devastating
            gusto. And my feathers! Their green coloring is truly GROSS! A
            hoo-rrific hue, I say.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (min-width: 768px) {
  .animal-container {
    display: grid;
    grid-template-columns: auto auto;
  }
}

.animal-item .media {
  align-items: center;
}

.animal-form {
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
}

.tag.is-fish {
  background-color: #f14668;
  color: #fff;
}
.tag.is-sea {
  background-color: #48c78e;
  color: #fff;
}

.tag.is-bug {
  background-color: #ffe08a;
  color: rgba(0, 0, 0, 0.7);
}
</style>
