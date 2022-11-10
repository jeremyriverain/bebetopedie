import { defineStore } from 'pinia'
import type {
  AnimalInterface,
  AnimalType,
  Hemisphere,
  SearchAnimalsParams,
} from '@/model'
import { sortAnimals } from '@/utils'

export const useStore = defineStore('main', {
  state() {
    return {
      bugs: [],
      fish: [],
      sea: [],
      isFetching: true,
      ascendingOrder: true,
      animalTypesSelected: ['bugs', 'fish', 'sea'],
      searchTerm: '',
      currentHemisphere: 'northern',
    } as Record<AnimalType, AnimalInterface[]> & {
      isFetching: boolean
      currentHemisphere: Hemisphere
    } & SearchAnimalsParams
  },
  getters: {
    selectedAnimals(): AnimalInterface[] {
      return [
        ...(this.animalTypesSelected.includes('bugs') ? this.bugs : []),
        ...(this.animalTypesSelected.includes('fish') ? this.fish : []),
        ...(this.animalTypesSelected.includes('sea') ? this.sea : []),
      ]
    },
    searchedAnimals(): AnimalInterface[] {
      if (!this.searchTerm || this.searchTerm.length === 0) {
        return this.selectedAnimals
      }

      return this.selectedAnimals.filter((a) =>
        a.name['name-EUen']
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase())
      )
    },
    sortedAnimals(): AnimalInterface[] {
      return sortAnimals(this.searchedAnimals, this.ascendingOrder)
    },
    reversedSortedAnimals(): AnimalInterface[] {
      return sortAnimals(this.searchedAnimals, this.ascendingOrder)
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
        this.bugs = Object.keys(bugsResponse).map((key) => bugsResponse[key])
        this.fish = Object.keys(fishResponse).map((key) => fishResponse[key])
        this.sea = Object.keys(seaCreaturesResponse).map(
          (key) => seaCreaturesResponse[key]
        )
      } finally {
        this.isFetching = false
      }
    },
  },
})
