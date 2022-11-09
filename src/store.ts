import { defineStore } from 'pinia'
import type { AnimalInterface, AnimalType, SearchAnimalsParams } from '@/model'

export const useStore = defineStore('main', {
  state() {
    return {
      bugs: {},
      fish: {},
      sea: {},
      isFetching: true,
      ascendingOrder: true,
      animalTypesSelected: ['bugs', 'fish', 'sea'],
    } as Record<AnimalType, Record<string, AnimalInterface>> & {
      isFetching: boolean
    } & SearchAnimalsParams
  },
  getters: {
    selectedAnimals(): Record<string, AnimalInterface> {
      return {
        ...(this.animalTypesSelected.includes('bugs') ? this.bugs : {}),
        ...(this.animalTypesSelected.includes('fish') ? this.fish : {}),
        ...(this.animalTypesSelected.includes('sea') ? this.sea : {}),
      }
    },
    sortedAnimals(): Record<string, AnimalInterface> {
      const sortedKeys = Object.keys(this.selectedAnimals).sort()
      const selectedAnimals = this.selectedAnimals

      if (!this.ascendingOrder) {
        sortedKeys.reverse()
      }
      return sortedKeys.reduce<Record<string, AnimalInterface>>(function (
        acc,
        key
      ) {
        acc[key] = selectedAnimals[key]
        return acc
      },
      {})
    },
    hasResult() {
      return Object.keys(this.sortedAnimals).length > 0
    },
  },
  actions: {
    async fetchAnimals() {
      try {
        const promises = [
          fetch('https://acnhapi.com/v1/bugs').then((r) => r.json()),
          fetch('https://acnhapi.com/v1/fish').then((r) => r.json()),
          fetch('https://acnhapi.com/v1/sea').then((r) => r.json()),
        ]

        const [bugsResponse, fishResponse, seaCreaturesResponse] =
          await Promise.all(promises)
        this.bugs = bugsResponse
        this.fish = fishResponse
        this.sea = seaCreaturesResponse
      } finally {
        this.isFetching = false
      }
    },
  },
})
