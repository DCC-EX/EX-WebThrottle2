<template>
  <div
    id="settings-window"
    class="section"
  >
    <div class="row">
      <div class="settings-heading hdng">
        Settings
      </div>
    </div>
    <div class="row settings-content">
      <div class="side-panel">
        <ul>
          <li id="settings-general">
            General
          </li>
          <li id="settings-storage">
            Storage
          </li>
          <li id="settings-app">
            App
          </li>
        </ul>
      </div>
      <div
        id="settings-panel"
        class="settings-panel scrollbar"
      >
        <div
          id="general-section"
          class="settings-section"
        >
          <div class="settings-subheading">
            General
          </div>
          <div class="settings-group">
            <div class="row setting-entry">
              <label class="setting-label"> Theme </label>
              <div class="setting-content">
                <select
                  id="theme-selector"
                  class="btn theme-selector select-control"
                  name="themeselector"
                  title="Change Theme"
                >
                  <option value="simple">
                    Simple
                  </option>
                  <option value="metallic">
                    Metallic
                  </option>
                  <option value="dark">
                    Dark
                  </option>
                </select>
              </div>
            </div>
            <div class="row setting-entry">
              <label class="setting-label"> Speed Controller </label>
              <div class="setting-content">
                <select
                  id="throttle-selector"
                  class="btn throttle-selector select-control"
                  name="throttleselector"
                  title="Change Throttle Controller"
                >
                  <option value="vertical">
                    Vertical
                  </option>
                  <option value="knob">
                    Knob
                  </option>
                  <option value="circular">
                    Circular
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div
          id="storage-section"
          class="settings-section"
        >
          <div class="settings-subheading">
            Storage
          </div>
          <div class="settings-group">
            <!--<div class="row setting-entry">
                                        <label class="setting-label">
                                            Some placeholder
                                        </label>
                                        <div class="setting-content">
                                            <input />
                                        </div>
                                    </div>
                                    <div class="row setting-entry">
                                        <label class="setting-label">
                                            Some placeholder
                                        </label>
                                        <div class="setting-content">
                                            <input />
                                        </div>
                                    </div>-->
            <!--<div class="hr"></div>-->
            <div class="row setting-entry">
              <label class="setting-label">
                <button id="backup-app-settings">
                  &#10514;&nbsp; Export App data
                </button>
              </label>
            </div>
            <div class="row setting-entry">
              <label class="setting-label">
                <button id="restore-app-settings">
                  &#10515;&nbsp; Import App data
                </button>
              </label>
            </div>
            <div class="row setting-entry">
              <label class="setting-label">
                <button id="wipe-app-settings">
                  &#10539;&nbsp; Wipe App data
                </button>
              </label>
            </div>
          </div>
          <div
            id="app-section"
            class="settings-section"
          >
            <div class="settings-subheading">
              App
            </div>
            <div class="settings-group">
              <div class="row setting-entry">
                <label class="setting-label"> Install as an app </label>
                <label class="setting-label">
                  <button class="add-button">Install</button>
                  <label class="installed-label">App Installed</label>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'Settings',
};
</script>
<script setup lang="ts"></script>
<style scoped></style>
