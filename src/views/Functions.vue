<template>
  <div id="fn-map-window" class="section">
    <div class="row settings-heading">
      <div class="column-7 pl0 hdng">Function Mappings</div>
      <div class="column-3 pr0">
        <div class="option-btns formbuilder-button row">
          <div class="column-2">&nbsp;</div>
          <div class="column-4">
            <button id="add-map" class="add-loco-btn btn">
              <span class="icon-plus"></span> New Map
            </button>
          </div>
          <div class="column-2">
            <button
              class="add-loco-btn btn"
              id="export-all-maps"
              title="Export Map"
            >
              <span class="icon-upload3"></span>
            </button>
          </div>
          <div class="column-2">
            <button
              class="add-loco-btn btn"
              id="import-all-maps"
              title="Import Map"
            >
              <span class="icon-download3"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row settings-content">
      <div class="side-panel">
        <ul id="function-mappings"></ul>
      </div>
      <div class="settings-panel" id="mapping-panel">
        <div class="settings-group placeholder">
          <p>Select a Map</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
<script lang="ts">
export default {
  name: "Functions",
};
</script>
<script setup lang="ts"></script>
