export interface AnimalInterface {
  id: number
  'museum-phrase': string
  icon_uri: string
  name: {
    'name-EUen': string
  }
  availability: {
    'month-array-northern': number[]
    'month-array-southern': number[]
    time: `${string} - ${string}` | ''
    'time-array': number[]
  }
}

export type AnimalType = 'fish' | 'sea' | 'bugs'

export interface SearchAnimalsParams {
  ascendingOrder: boolean
  animalTypesSelected: AnimalType[]
  searchTerm: string
  onlyAvailableAnimals: boolean
}

export type Hemisphere = 'northern' | 'southern'
