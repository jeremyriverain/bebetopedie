<template>
  <div class="card">
    <div class="card-content">
      <form class="animal-form">
        <div class="field is-horizontal">
          <div class="field-label">
            <label class="label">Filtrer les animaux:</label>
          </div>
          <div class="field-body">
            <div class="field is-narrow">
              <div class="control">
                <label class="checkbox ml-3">
                  <input type="checkbox" checked />
                  Créatures marines
                </label>
                <label class="checkbox ml-3">
                  <input type="checkbox" checked />
                  Insectes
                </label>
                <label class="checkbox ml-3">
                  <input type="checkbox" checked />
                  Poissons
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="has-text-right ml-3">
          <button class="button">
            <span class="icon">
              <!-- <i class="fa-solid fa-arrow-down-a-z"></i> -->
              <i class="fa-solid fa-arrow-up-a-z"></i>
            </span>
            <span>Trier Z-A</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.animal-form {
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
}
</style>
