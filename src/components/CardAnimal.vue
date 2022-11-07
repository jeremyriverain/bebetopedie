<template>
  <div class="card animal-item">
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
            <AnimalType :animal="animal" />
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
import AnimalType from '@/components/AnimalType.vue'
import type { AnimalInterface } from '@/model'
import type { PropType } from 'vue'

defineProps({
  animal: {
    type: Object as PropType<AnimalInterface>,
    required: true,
  },
})
</script>

<style>
.animal-item .media {
  align-items: center;
}
</style>
