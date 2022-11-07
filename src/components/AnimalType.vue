<template>
  <span v-if="isBug" class="tag is-bug">Bug</span>
  <span v-else-if="isFish" class="tag is-fish">Fish</span>
  <span v-else class="tag is-sea">Sea creature</span>
</template>

<script setup lang="ts">
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
