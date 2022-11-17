import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import type { AnimalInterface } from './model'
import { resolveAnimalType, sortAnimals, isAvailable } from './utils'

function createAnimal(animal: Partial<AnimalInterface> = {}): AnimalInterface {
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

describe('resolveAnimalType', () => {
  it('resolves type correctly', () => {
    expect(
      resolveAnimalType(
        createAnimal({ icon_uri: 'https://acnhapi.com/v1/icons/sea/1' })
      )
    ).toBe('sea')
    expect(
      resolveAnimalType(
        createAnimal({ icon_uri: 'https://acnhapi.com/v1/icons/bugs/1' })
      )
    ).toBe('bugs')
    expect(
      resolveAnimalType(
        createAnimal({ icon_uri: 'https://acnhapi.com/v1/icons/fish/1' })
      )
    ).toBe('fish')
    expect(() =>
      resolveAnimalType(
        createAnimal({ icon_uri: 'https://acnhapi.com/v1/icons/unknown/1' })
      )
    ).toThrowError()
  })
})

describe('sortAnimals', () => {
  it('sorts in ascending order', () => {
    const unorderedAnimals = [
      createAnimal({ name: { 'name-EUen': 'b' } }),
      createAnimal({ name: { 'name-EUen': 'a' } }),
      createAnimal({ name: { 'name-EUen': 'c' } }),
    ]

    const orderedAnimals = sortAnimals(unorderedAnimals, true)
    expect(unorderedAnimals[0].name['name-EUen']).toBe('b')
    expect(unorderedAnimals[1].name['name-EUen']).toBe('a')
    expect(unorderedAnimals[2].name['name-EUen']).toBe('c')

    expect(orderedAnimals[0].name['name-EUen']).toBe('a')
    expect(orderedAnimals[1].name['name-EUen']).toBe('b')
    expect(orderedAnimals[2].name['name-EUen']).toBe('c')
  })
})

describe('isAvailable', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("is not available when it's not the right month", () => {
    const date = new Date(2000, 5, 27, 21)
    vi.setSystemTime(date)
    expect(isAvailable([1], [21])).toBe(false)
  })
  it("is not available when it's not the time", () => {
    const date = new Date(2000, 5, 27, 21)
    vi.setSystemTime(date)
    expect(isAvailable([6], [20])).toBe(false)
  })
  it("is not available when it's not the time and not the right month", () => {
    const date = new Date(2000, 5, 27, 21)
    vi.setSystemTime(date)
    expect(isAvailable([1], [20])).toBe(false)
  })

  it("is available when it's the time and the right month", () => {
    const date = new Date(2000, 5, 27, 21)
    vi.setSystemTime(date)
    expect(isAvailable([6], [21])).toBe(true)
  })
})
