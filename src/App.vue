<template>
  <div class="container">
    <TheHeaderImage />
    <SearchForm class="mx-2 my-2" />
    <div class="animal-container">
      <div
        class="card animal-item mx-2 my-2"
        v-for="(animal, key) in animals"
        :key="key"
      >
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <img
                  :src="animal['icon_uri']"
                  :alt="animal['name']['name-EUen']"
                />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{{ animal['name']['name-EUen'] }}</p>
            </div>
            <div class="media-right">
              <div class="has-text-right">
                <span
                  v-if="animal['icon_uri'].includes('bugs')"
                  class="tag is-bug"
                  >Insecte</span
                >
                <span
                  v-else-if="animal['icon_uri'].includes('fish')"
                  class="tag is-fish"
                  >Poisson</span
                >
                <span v-else class="tag is-sea">Créature marine</span>
              </div>
            </div>
          </div>

          <div class="content">
            {{ animal['museum-phrase'] }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TheHeaderImage from '@/components/TheHeaderImage.vue'
import SearchForm from '@/components/SearchForm.vue'

import bugs from '@/data/bugs.json'
import fishes from '@/data/fish.json'
import seaCreatures from '@/data/sea.json'

const animals = ref({
  ...bugs,
  ...fishes,
  ...seaCreatures,
})
</script>

<style scoped>
@media screen and (min-width: 768px) {
  .animal-container {
    display: grid;
    grid-template-columns: auto auto;
  }
}

.animal-item .media {
  align-items: center;
}

.tag.is-fish {
  background-color: #f14668;
  color: #fff;
}
.tag.is-sea {
  background-color: #48c78e;
  color: #fff;
}

.tag.is-bug {
  background-color: #ffe08a;
  color: rgba(0, 0, 0, 0.7);
}
</style>
