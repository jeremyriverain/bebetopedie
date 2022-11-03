<template>
  <div class="container">
    <TheHeaderImage />
    <SearchForm
      class="mx-2 my-2"
      v-model:animalTypes="animalTypes"
      v-model:ascending-order="ascendingOrder"
    />
    <div class="animal-container" v-if="hasResult">
      <CardAnimal
        v-for="(animal, key) in sortedAnimals"
        :key="key"
        :animal="animal"
        class="mx-2 my-2"
      />
    </div>
    <article class="message is-dark mx-2" v-else>
      <div class="message-body">
        Aucun résultat ne correspond à votre recherche
      </div>
    </article>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import TheHeaderImage from '@/components/TheHeaderImage.vue'
import SearchForm from '@/components/SearchForm.vue'
import CardAnimal from '@/components/CardAnimal.vue'

import bugs from '@/data/bugs.json'
import fishes from '@/data/fish.json'
import seaCreatures from '@/data/sea.json'

const ascendingOrder = ref(true)
const animalTypes = ref(['sea', 'fish', 'bug'])

const animals = computed(() => ({
  ...(animalTypes.value.includes('bug') ? bugs : {}),
  ...(animalTypes.value.includes('fish') ? fishes : {}),
  ...(animalTypes.value.includes('sea') ? seaCreatures : {}),
}))

const sortedAnimals = computed(() => {
  const sortedKeys = Object.keys(animals.value).sort()

  if (!ascendingOrder.value) {
    sortedKeys.reverse()
  }
  return sortedKeys.reduce(function (acc, key) {
    acc[key] = animals.value[key]
    return acc
  }, {})
})

const hasResult = computed(() => Object.keys(sortedAnimals.value).length > 0)
</script>

<style scoped>
@media screen and (min-width: 768px) {
  .animal-container {
    display: grid;
    grid-template-columns: auto auto;
  }
}
</style>
