<template>
  <span v-if="isBug" class="tag is-bug">Insecte</span>
  <span v-else-if="isFish" class="tag is-fish">Poisson</span>
  <span v-else class="tag is-sea">Créature marine</span>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  animal: {
    type: Object,
    required: true,
  },
})

const isBug = computed(() => props.animal['icon_uri'].includes('bugs'))
const isFish = computed(() => props.animal['icon_uri'].includes('fish'))
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
