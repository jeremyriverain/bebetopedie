import type { AnimalInterface } from '@/model'

export function createAnimal(
  animal: Partial<AnimalInterface> = {}
): AnimalInterface {
  return {
    ...{
      'museum-phrase': 'lorem ipsum',
      availability: {
        'month-array-northern': [],
        'month-array-southern': [],
        'time-array': [8, 9, 10],
        time: '8am - 10am',
      },
      icon_uri: 'https://acnhapi.com/v1/icons/bugs/1',
      id: 1,
      name: {
        'name-EUen': 'yellow butterfly',
      },
    },
    ...animal,
  }
}
