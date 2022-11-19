<template>
  <span v-if="animalType === 'bugs'" class="tag is-bug" :data-cy="cySelector"
    >Bug</span
  >
  <span
    v-else-if="animalType === 'fish'"
    class="tag is-fish"
    :data-cy="cySelector"
    >Fish</span
  >
  <span
    v-else-if="animalType === 'sea'"
    class="tag is-sea"
    :data-cy="cySelector"
    >Sea creature</span
  >
</template>

<script setup lang="ts">
import type { AnimalType } from '@/model'
import type { PropType } from 'vue'
import { ref } from 'vue'

defineProps({
  animalType: {
    type: String as PropType<AnimalType>,
    required: true,
  },
})

const cySelector = ref('animal-type')
</script>

<style>
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
