import { defineStore } from 'pinia'
import type {
  AnimalInterface,
  AnimalType,
  Hemisphere,
  SearchAnimalsParams,
} from './model'
import { isAvailable, sortAnimals } from './utils'
import bugs from './data/bugs.json'
import fishes from './data/fish.json'
import seaCreatures from './data/sea.json'

export const initialState = () => {
  return {
    bugs: [],
    fish: [],
    sea: [],
    isFetching: true,
    ascendingOrder: true,
    animalTypesSelected: ['bugs', 'fish', 'sea'],
    searchTerm: '',
    currentHemisphere: 'northern',
    onlyAvailableAnimals: false,
  }
}

export type MainStoreState = Record<AnimalType, AnimalInterface[]> & {
  isFetching: boolean
  currentHemisphere: Hemisphere
} & SearchAnimalsParams

export const useStore = defineStore('main', {
  state() {
    return initialState() as MainStoreState
  },
  getters: {
    allAnimals(): AnimalInterface[] {
      return [...this.bugs, ...this.fish, ...this.sea]
    },
    availableAnimalsMap(): Record<string, boolean> {
      return this.allAnimals.reduce((a: any, b: AnimalInterface) => {
        return {
          ...a,
          [b.name['name-EUen']]: isAvailable(
            this.currentHemisphere === 'northern'
              ? b.availability['month-array-northern']
              : b.availability['month-array-southern'],
            b.availability['time-array']
          ),
        }
      }, {})
    },
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
    availaibleAnimals(): AnimalInterface[] {
      return this.searchedAnimals.filter(
        (a) => this.availableAnimalsMap[a.name['name-EUen']] === true
      )
    },
    sortedAnimals(): AnimalInterface[] {
      return [
        ...sortAnimals(
          this.onlyAvailableAnimals
            ? this.availaibleAnimals
            : this.searchedAnimals,
          this.ascendingOrder
        ),
      ]
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

      // this.bugs = Object.keys(bugs).map((key) => (bugs as any)[key])
      // this.fish = Object.keys(fishes).map((key) => (fishes as any)[key])
      // this.sea = Object.keys(seaCreatures).map(
      //   (key) => (seaCreatures as any)[key]
      // )
      // this.isFetching = false
    },
  },
})
