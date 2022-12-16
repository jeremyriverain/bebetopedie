<template>
  <div class="animal-item-container my-2" data-cy="card-animal">
    <RouterLink
      :to="{
        name: 'animal_details',
        params: { id: source.id, type: animalType },
      }"
      class="card animal-item mx-3"
    >
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <!-- <img src="@/assets/64.png" :alt="source['name']['name-EUen']" /> -->
              <img :src="source.icon_uri" :alt="source['name']['name-EUen']" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4" data-cy="card-animal-name">
              {{ source.name['name-EUen'] }}
            </p>
          </div>
          <div class="media-right">
            <div class="has-text-right">
              <AnimalType :animal-type="animalType" />
            </div>
          </div>
        </div>

        <div class="content" data-cy="card-animal-description">
          {{ source['museum-phrase'] }}
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import AnimalType from '@/components/AnimalType.vue'
import type { AnimalInterface } from '@/model'
import { resolveAnimalType } from '@/utils'
import type { PropType } from 'vue'
import { computed } from 'vue'

const props = defineProps({
  source: {
    type: Object as PropType<AnimalInterface>,
    required: true,
  },
})

const animalType = computed(() => resolveAnimalType(props.source))
</script>

<style scoped>
.animal-item-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
.animal-item {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 768px;
}
.animal-item .media {
  align-items: center;
}
</style>
