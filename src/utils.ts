import type { AnimalInterface, AnimalType } from '@/model'

export function resolveAnimalType(animal: AnimalInterface): AnimalType {
  if (animal.icon_uri.includes('bugs')) {
    return 'bugs'
  } else if (animal.icon_uri.includes('sea')) {
    return 'sea'
  }
  return 'fish'
}

export function sortAnimals(
  animals: AnimalInterface[],
  ascendingOrder: boolean
): AnimalInterface[] {
  return animals.sort(function (a, b) {
    const x = a.name['name-EUen'].toLowerCase()
    const y = b.name['name-EUen'].toLowerCase()

    if (x > y) {
      return ascendingOrder ? 1 : -1
    }
    return ascendingOrder ? -1 : 1
  })
}
