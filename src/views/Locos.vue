<template>
  <div id="loco-window" class="section">
    <div class="row settings-heading">
      <div class="column-7 pl0 hdng">Locomotives</div>
      <div class="column-3 pr0">
        <div class="option-btns formbuilder-button row">
          <div class="column-2">&nbsp;</div>
          <div class="column-4">
            <button id="add-loco" class="add-loco-btn btn">
              <span class="icon-plus" /> Add New
            </button>
            <div id="loco-form-content" class="add-loco-form">
              <form id="loco-form" class="form-inline">
                <div class="fn-modal-header row">
                  <h4 class="fn-heading add-loco-head">Add Locomotive</h4>
                  <span id="close-addloco-model" class="close">×</span>
                </div>
                <!-- <div class="add-loco-head">s
                                                Add Locomotive
                                                <>
                                                <hr>
                                            </div> -->
                <div class="row">
                  <label class="column-4" for="name">Name:*</label>
                  <input
                    id="name"
                    class="column-6"
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    required
                  />
                </div>
                <div class="row">
                  <label class="column-4" for="cv">CV:*</label>
                  <input
                    id="cv"
                    class="column-6"
                    type="number"
                    placeholder="Enter CV"
                    name="cv"
                    required
                  />
                </div>
                <div class="row">
                  <label class="column-4" for="type">Engine Type:</label>
                  <select
                    id="type"
                    class="column-6 add-select"
                    placeholder="Select Type"
                    name="type"
                  >
                    <option value="Diesel">Diesel</option>
                    <option value="Steam">Steam</option>
                    <option value="Electric">Electric</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div class="row">
                  <label class="column-4" for="brand">Brand:</label>
                  <input
                    id="brand"
                    class="column-6"
                    type="text"
                    placeholder="Brand Name"
                    name="brand"
                  />
                </div>
                <div class="row">
                  <label class="column-4" for="decoder">Decoder:</label>
                  <input
                    id="decoder"
                    class="column-6"
                    type="text"
                    placeholder="Decoder Name"
                    name="decoder"
                  />
                </div>
                <div class="row">
                  <label class="column-4" for="map">Function map:*</label>
                  <input
                    id="function-maps"
                    class="column-6"
                    type="text"
                    placeholder="Select Map"
                    name="map"
                    required
                  />
                </div>
                <div class="spacer" />
                <div class="row">
                  <div class="column-2" />
                  <button
                    id="loco-submit"
                    loco-mode="add"
                    class="column-6"
                    type="submit"
                  >
                    Submit
                  </button>
                  <div class="column-2" />
                </div>
              </form>
            </div>
          </div>
          <div class="column-2">
            <button
              id="export-locolist"
              class="add-loco-btn btn"
              title="Export Locomotives"
            >
              <span class="icon-upload3" />
            </button>
          </div>
          <div class="column-2">
            <button
              id="import-locolist"
              class="add-loco-btn btn"
              title="Import Locomotives"
            >
              <span class="icon-download3" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row settings-content">
      <div id="locomotives-panel" class="settings-panel">
        <div class="settings-group">Select a Locomotive</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "LocosPage",
};
</script>
<script setup lang="ts"></script>
<style lang="scss" scoped></style>
