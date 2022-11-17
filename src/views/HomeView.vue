<template>
  <div class="py-2 form-container">
    <SearchForm class="mx-2 form" />
  </div>
  <div class="animal-container" v-if="hasResult">
    <VirtualList
      style="height: 100vh; overflow-y: auto"
      data-key="icon_uri"
      :data-sources="sortedAnimals"
      :data-component="CardAnimal"
    />
  </div>
  <div class="container" v-else-if="!isFetching">
    <article class="message is-dark mx-3 my-2 not-found">
      <div class="message-body">No animals found</div>
    </article>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import VirtualList from 'vue3-virtual-scroll-list'
import SearchForm from '@/components/SearchForm.vue'
import CardAnimal from '@/components/CardAnimal.vue'
import { useStore } from '@/store'

const store = useStore()

const isFetching = computed(() => store.isFetching)

const sortedAnimals = computed(() => store.sortedAnimals)

const hasResult = computed(() => store.hasResult)
</script>

<style scoped>
.animal-container ::-webkit-scrollbar {
  display: none;
}

.form {
  max-width: 768px;
  width: 100%;
}

.form-container {
  display: flex;
  justify-content: center;
}
</style>
