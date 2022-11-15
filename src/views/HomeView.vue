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
  <article class="message is-dark mx-3 my-2" v-else-if="!isFetching">
    <div class="message-body">No animals found</div>
  </article>
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
@media screen and (min-width: 768px) {
  .animal-container {
    display: grid;
    grid-template-columns: auto auto;
  }
}

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
