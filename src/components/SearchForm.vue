<template>
  <div>
    <div class="has-text-right mb-2" v-if="showButton">
      <button class="button" @click="showForm = !showForm">
        <span class="icon is-small">
          <i class="fa-solid" :class="showForm ? 'fa-close' : 'fa-filter'"></i>
        </span>
        <span>{{ labelButton }}</span>
      </button>
    </div>

    <div class="card" v-show="showForm">
      <div class="card-content">
        <form>
          <div class="animal-form">
            <div class="field is-horizontal">
              <div class="field-label">
                <label class="label">Filter animals:</label>
              </div>
              <div class="field-body">
                <div class="field is-narrow">
                  <div class="control">
                    <label class="checkbox ml-3">
                      <input type="checkbox" v-model="types" value="sea" />
                      Sea creatures
                    </label>
                    <label class="checkbox ml-3">
                      <input type="checkbox" v-model="types" value="bugs" />
                      Bugs
                    </label>
                    <label class="checkbox ml-3">
                      <input type="checkbox" v-model="types" value="fish" />
                      Fishes
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="has-text-right ml-3">
              <button
                class="button"
                @click.prevent="ascendingOrder = !ascendingOrder"
              >
                <span class="icon">
                  <i v-if="ascendingOrder" class="fa-solid fa-arrow-up-a-z"></i>
                  <i v-else class="fa-solid fa-arrow-down-a-z"></i>
                </span>
                <span v-if="ascendingOrder">Sort Z-A</span>
                <span v-else>Sort A-Z</span>
              </button>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" for="search-name">Search</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input
                      class="input"
                      placeholder="Name"
                      id="search-name"
                      v-model="term"
                    />
                  </p>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="checkbox ml-3">
                <input type="checkbox" v-model="onlyAvailable" />
                Only show available animals
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AnimalType } from '@/model'
import { useStore } from '@/store'
import { computed, ref } from 'vue'
import { useWindowSize } from '@vueuse/core'

const store = useStore()

const ascendingOrder = computed({
  get() {
    return store.ascendingOrder
  },
  set(newValue: boolean) {
    store.ascendingOrder = newValue
  },
})

const types = computed({
  get() {
    return store.animalTypesSelected
  },
  set(newValue: AnimalType[]) {
    store.animalTypesSelected = newValue
  },
})

const term = computed({
  get() {
    return store.searchTerm
  },
  set(newValue: string) {
    store.searchTerm = newValue
  },
})

const onlyAvailable = computed({
  get() {
    return store.onlyAvailableAnimals
  },
  set(newValue) {
    store.onlyAvailableAnimals = newValue
  },
})

const { width } = useWindowSize()
const showForm = ref(width.value > 768)

const showButton = computed(() => width.value <= 768)

const labelButton = computed(() =>
  showForm.value === true ? 'Close filters' : 'Open filters'
)
</script>

<style scoped>
.animal-form {
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
}

.input {
  max-width: 300px;
}
</style>
