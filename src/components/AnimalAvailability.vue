<template>
  <h3 class="title is-6">
    <i class="fa-solid fa-calendar-days"></i> Availability
  </h3>
  <div class="control subtitle mb-2">
    <label
      class="radio"
      v-for="hemisphere in hemispheres"
      :key="hemisphere.value"
    >
      <input
        type="radio"
        name="hemisphere"
        v-model="currentHemisphere"
        :value="hemisphere.value"
      />
      {{ hemisphere.label }}
    </label>
  </div>
  <div class="table-container">
    <table class="table">
      <table class="table is-bordered">
        <tbody>
          <tr>
            <td v-for="(month, index) in months.slice(0, 6)" :key="month">
              <div class="icon-text">
                <span
                  class="icon has-text-success"
                  v-if="currentAvailability.includes(index + 1)"
                >
                  <i class="fas fa-check-square"></i>
                </span>
                <span class="icon has-text-danger" v-else>
                  <i class="fas fa-close"></i>
                </span>
                <span>{{ month }}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td v-for="(month, index) in months.slice(-6)" :key="month">
              <div class="icon-text">
                <span
                  class="icon has-text-success"
                  v-if="currentAvailability.includes(index + 7)"
                >
                  <i class="fas fa-check-square"></i>
                </span>
                <span class="icon has-text-danger" v-else>
                  <i class="fas fa-close"></i>
                </span>
                <span>{{ month }}</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </table>
  </div>
  <div><i class="fa-regular fa-clock"></i> {{ timeAvailabilityLabel }}</div>
</template>

<script lang="ts" setup>
import { computed, type PropType } from 'vue'
import { ref } from 'vue'
import { useStore } from '@/store'

import type { AnimalInterface, Hemisphere } from '@/model'

const props = defineProps({
  animal: {
    type: Object as PropType<AnimalInterface>,
    required: true,
  },
})

const months = ref([
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
])

const hemispheres = ref<{ label: string; value: Hemisphere }[]>([
  {
    label: 'Northern',
    value: 'northern',
  },
  {
    label: 'Southern',
    value: 'southern',
  },
])

const store = useStore()

const currentHemisphere = computed({
  get() {
    return store.currentHemisphere
  },
  set(newValue: Hemisphere) {
    store.currentHemisphere = newValue
  },
})

const currentAvailability = computed(() =>
  currentHemisphere.value === 'northern'
    ? props.animal.availability['month-array-northern']
    : props.animal.availability['month-array-southern']
)

const timeAvailabilityLabel = computed(() => {
  if (props.animal.availability.time.length === 0) {
    return 'These animals can be caught all day ! No time constraints'
  }
  const [from = '', to = ''] = props.animal.availability.time.split(' - ')
  return `These animals can be caught from ${from} to ${to}.`
})
</script>
