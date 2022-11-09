import { defineStore } from 'pinia'
import type { AnimalInterface, AnimalType } from '@/model'

export const useStore = defineStore('main', {
  state() {
    return {
      bugs: {},
      fish: {},
      sea: {},
      isFetching: true,
    } as Record<AnimalType, Record<string, AnimalInterface>> & {
      isFetching: boolean
    }
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
