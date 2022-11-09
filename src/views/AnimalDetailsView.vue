<template>
  <div class="card animal-item mx-2 my-2" v-if="animal">
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
          <p class="title is-4">{{ animal.name['name-EUen'] }}</p>
        </div>
        <div class="media-right">
          <div class="has-text-right">
            <AnimalType :animal-type="type" />
          </div>
        </div>
      </div>

      <div class="content">
        {{ animal['museum-phrase'] }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'
import type { AnimalType as AnimalTypeEnum } from '@/model'
import AnimalType from '@/components/AnimalType.vue'
import { useStore } from '@/store'

const store = useStore()

const props = defineProps({
  type: {
    type: String as PropType<AnimalTypeEnum>,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
})

const animal = computed(() => {
  const key = Object.keys(store[props.type]).find(
    (key) => store[props.type][key].id.toString() === props.id
  )

  if (!key) {
    return null
  }

  return store[props.type][key]
})
</script>

<style scoped>
.animal-item .media {
  align-items: center;
}
</style>
