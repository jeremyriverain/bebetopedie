export interface AnimalInterface {
  id: number
  'museum-phrase': string
  icon_uri: string
  name: {
    'name-EUen': string
  }
}

export type AnimalType = 'fish' | 'sea' | 'bugs'

export interface SearchAnimalsParams {
  ascendingOrder: boolean
  animalTypesSelected: AnimalType[]
}
