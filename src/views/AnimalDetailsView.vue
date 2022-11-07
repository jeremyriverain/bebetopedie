<template>
  <div class="card mx-2 my-2">
    <div class="card-content">
      <div>{{ id }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  id: {
    type: String,
    required: true,
  },
})
</script>
