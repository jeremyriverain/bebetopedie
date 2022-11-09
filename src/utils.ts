import type { AnimalInterface, AnimalType } from '@/model'

export function resolveAnimalType(animal: AnimalInterface): AnimalType {
  if (animal.icon_uri.includes('bugs')) {
    return 'bugs'
  } else if (animal.icon_uri.includes('sea')) {
    return 'sea'
  }
  return 'fish'
}
