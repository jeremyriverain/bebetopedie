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
                  <input type="checkbox" v-model="types" value="bug" />
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
            @click.prevent="$emit('update:ascendingOrder', !ascendingOrder)"
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
import { ref, watch } from 'vue'

const props = defineProps({
  ascendingOrder: {
    type: Boolean,
    required: true,
  },
  animalTypes: {
    type: Array,
    required: true,
  },
})

const emits = defineEmits(['update:ascendingOrder', 'update:animalTypes'])

const types = ref(props.animalTypes)

watch(types, () => {
  emits('update:animalTypes', types.value)
})
</script>

<style scoped>
.animal-form {
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
}
</style>
