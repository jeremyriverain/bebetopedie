<template>
  <RouterLink
    :to="{
      name: 'animal_details',
      params: { id: animal.id, type: animalType },
    }"
    class="card animal-item"
  >
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img :src="animal['icon_uri']" :alt="animal['name']['name-EUen']" />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ animal.name['name-EUen'] }}</p>
        </div>
        <div class="media-right">
          <div class="has-text-right">
            <AnimalType :animal-type="animalType" />
          </div>
        </div>
      </div>

      <div class="content">
        {{ animal['museum-phrase'] }}
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import AnimalType from '@/components/AnimalType.vue'
import type { AnimalInterface } from '@/model'
import { resolveAnimalType } from '@/utils'
import type { PropType } from 'vue'
import { computed } from 'vue'

const props = defineProps({
  animal: {
    type: Object as PropType<AnimalInterface>,
    required: true,
  },
})

const animalType = computed(() => resolveAnimalType(props.animal))
</script>

<style scoped>
.animal-item {
  display: block;
}
.animal-item .media {
  align-items: center;
}
</style>
