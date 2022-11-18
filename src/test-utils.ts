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
        'time-array': [],
        time: '8am - 10pm',
      },
      icon_uri: '',
      id: 1,
      name: {
        'name-EUen': '',
      },
    },
    ...animal,
  }
}
