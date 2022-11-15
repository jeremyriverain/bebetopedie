<template>
  <div class="container py-2">
    <SearchForm class="mx-2" />
    <div class="animal-container" v-if="hasResult">
      <VirtualList
        style="height: 100vh; overflow-y: auto"
        data-key="icon_uri"
        :data-sources="sortedAnimals"
        :data-component="CardAnimal"
        :pool-buffer="30"
      />
    </div>
    <article class="message is-dark mx-3 my-2" v-else-if="!isFetching">
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
@media screen and (min-width: 768px) {
  .animal-container {
    display: grid;
    grid-template-columns: auto auto;
  }
}

.animal-container ::-webkit-scrollbar {
  display: none;
}
</style>
