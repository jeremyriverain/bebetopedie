<template>
  <div class="card animal-item mx-2 my-2" v-if="animal">
    <div class="card-content">
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
import type { PropType } from 'vue'
import { ref } from 'vue'
import type { AnimalInterface, AnimalType as AnimalTypeEnum } from '@/model'
import AnimalType from '@/components/AnimalType.vue'

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

const animal = ref<AnimalInterface | null>(null)

;(async () => {
  animal.value = await (
    await fetch(`https://acnhapi.com/v1/${props.type}/${props.id}`)
  ).json()
})()
</script>
