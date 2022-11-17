import type { AnimalInterface, AnimalType } from '@/model'

export function resolveAnimalType(animal: AnimalInterface): AnimalType {
  if (animal.icon_uri.includes('bugs')) {
    return 'bugs'
  } else if (animal.icon_uri.includes('sea')) {
    return 'sea'
  } else if (animal.icon_uri.includes('fish')) {
    return 'fish'
  }
  throw new Error('this animal is neither a bug nor a fish or a sea creature.')
}

export function sortAnimals(
  animals: AnimalInterface[],
  ascendingOrder: boolean
): AnimalInterface[] {
  return [...animals].sort(function (a, b) {
    const x = a.name['name-EUen'].toLowerCase()
    const y = b.name['name-EUen'].toLowerCase()

    if (x > y) {
      return ascendingOrder ? 1 : -1
    }
    return ascendingOrder ? -1 : 1
  })
}

export function isAvailable(
  monthAvailability: number[],
  timeAvailability: number[]
): boolean {
  const now = new Date()
  const monthNumber = now.getMonth() + 1
  const hourNumber = now.getHours()
  return (
    monthAvailability.includes(monthNumber) &&
    timeAvailability.includes(hourNumber)
  )
}
