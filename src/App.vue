<template>
  <div class="container">
    <TheHeaderImage />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import TheHeaderImage from '@/components/TheHeaderImage.vue'
import { useStore } from '@/store'

const store = useStore()
store.fetchAnimals()
</script>
