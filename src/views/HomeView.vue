<template>
  <div class="container">
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
    <article class="message is-danger mx-2" v-else-if="error">
      <div class="message-body">
        {{ error }}
      </div>
    </article>
    <article class="message is-dark mx-2" v-else-if="!isLoading">
      <div class="message-body">
        Aucun résultat ne correspond à votre recherche
      </div>
    </article>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import SearchForm from '@/components/SearchForm.vue'
import CardAnimal from '@/components/CardAnimal.vue'

const bugs = ref({})
const fishes = ref({})
const seaCreatures = ref({})

const isLoading = ref(true)
const error = ref(null)

;(async () => {
  try {
    const promises = [
      fetch('https://acnhapi.com/v1/bugs').then((r) => r.json()),
      fetch('https://acnhapi.com/v1/fish').then((r) => r.json()),
      fetch('https://acnhapi.com/v1/sea').then((r) => r.json()),
    ]

    const [bugsResponse, fishResponse, seaCreaturesResponse] =
      await Promise.all(promises)
    bugs.value = bugsResponse
    fishes.value = fishResponse
    seaCreatures.value = seaCreaturesResponse
  } catch (error) {
    error.value = 'Une erreur est survenue pendant la récupération des données.'
  } finally {
    isLoading.value = false
  }
})()

const ascendingOrder = ref(true)
const animalTypes = ref(['sea', 'fish', 'bug'])

const animals = computed(() => ({
  ...(animalTypes.value.includes('bug') ? bugs.value : {}),
  ...(animalTypes.value.includes('fish') ? fishes.value : {}),
  ...(animalTypes.value.includes('sea') ? seaCreatures.value : {}),
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
