<template>
  <div class="card">
    <div class="card-content">
      <form class="animal-form">
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
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AnimalType } from '@/model';
import { useStore } from '@/store'
import { computed } from 'vue'

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
  }
})
</script>

<style scoped>
.animal-form {
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
}
</style>
