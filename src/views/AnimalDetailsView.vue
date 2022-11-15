<template>
  <div class="py-2 animal-container" v-if="animal">
    <div class="card animal-item mx-2 my-2">
      <div class="card-content">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li><RouterLink to="/">Homepage</RouterLink></li>
            <li class="is-active">
              <a href="#" aria-current="page">{{ animal.name['name-EUen'] }}</a>
            </li>
          </ul>
        </nav>
        <div class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img :src="animal.icon_uri" :alt="animal.name['name-EUen']" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title">
              {{ animal.name['name-EUen'] }}
              <AnimalType class="ml-3" :animal-type="type" />
            </p>
          </div>
        </div>

        <div class="content">
          {{ animal['museum-phrase'] }}
        </div>

        <AnimalAvailability :animal="animal" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { useRouter } from 'vue-router'
import type { AnimalInterface, AnimalType as AnimalTypeEnum } from '@/model'

import AnimalType from '@/components/AnimalType.vue'
import AnimalAvailability from '@/components/AnimalAvailability.vue'

const props = defineProps({
  animal: {
    type: Object as PropType<AnimalInterface>,
    required: false,
  },
  type: {
    type: String as PropType<AnimalTypeEnum>,
    required: true,
  },
})

if (!props.animal) {
  const router = useRouter()
  router.push('/')
}
</script>

<style scoped>
.animal-container {
  margin-right: auto;
  margin-left: auto;
  max-width: 768px;
}
.animal-item .media {
  align-items: center;
}
</style>
