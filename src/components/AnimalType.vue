<template>
  <span v-if="animalType === 'bugs'" class="tag is-bug">Bug</span>
  <span v-else-if="animalType === 'fish'" class="tag is-fish">Fish</span>
  <span v-else class="tag is-sea">Sea creature</span>
</template>

<script setup lang="ts">
import type { AnimalType } from '@/model'
import type { PropType } from 'vue'

defineProps({
  animalType: {
    type: String as PropType<AnimalType>,
    required: true,
  },
})
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
