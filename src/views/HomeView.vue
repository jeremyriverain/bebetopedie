<template>
  <div class="container">
    <SearchForm class="mx-2 my-2" />
    <div class="animal-container" v-if="hasResult">
      <CardAnimal
        v-for="animal in sortedAnimals"
        :key="animal.icon_uri"
        :animal="animal"
        class="mx-2 my-2"
      />
    </div>
    <article class="message is-dark mx-2" v-else-if="!isFetching">
      <div class="message-body">
        Aucun résultat ne correspond à votre recherche
      </div>
    </article>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import SearchForm from '@/components/SearchForm.vue'
import CardAnimal from '@/components/CardAnimal.vue'
import { useStore } from '@/store'

const store = useStore()

const isFetching = computed(() => store.isFetching)

const sortedAnimals = computed(() =>
  store.ascendingOrder ? store.sortedAnimals : store.reversedSortedAnimals
)

const hasResult = computed(() => store.hasResult)
</script>

<style scoped>
@media screen and (min-width: 768px) {
  .animal-container {
    display: grid;
    grid-template-columns: auto auto;
  }
}
</style>
