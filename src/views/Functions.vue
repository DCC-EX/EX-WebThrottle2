<template>
  <div
    id="fn-map-window"
    class="section"
  >
    <div class="row settings-heading">
      <div class="column-7 pl0 hdng">
        Function Mappings
      </div>
      <div class="column-3 pr0">
        <div class="option-btns formbuilder-button row">
          <div class="column-2">
&nbsp;
          </div>
          <div class="column-4">
            <button
              id="add-map"
              class="add-loco-btn btn"
            >
              <span class="icon-plus" /> New Map
            </button>
          </div>
          <div class="column-2">
            <button
              id="export-all-maps"
              class="add-loco-btn btn"
              title="Export Map"
            >
              <span class="icon-upload3" />
            </button>
          </div>
          <div class="column-2">
            <button
              id="import-all-maps"
              class="add-loco-btn btn"
              title="Import Map"
            >
              <span class="icon-download3" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row settings-content">
      <div class="side-panel">
        <ul id="function-mappings" />
      </div>
      <div
        id="mapping-panel"
        class="settings-panel"
      >
        <div class="settings-group placeholder">
          <p>Select a Map</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'FunctionsPage',
};
</script>
<script setup lang="ts"></script>
<style lang="scss" scoped></style>
