<template>
  <v-container>
    <v-row no-gutters>
      <v-col>
        <v-toolbar color="primary">
          <v-toolbar-title>Settings</v-toolbar-title>
        </v-toolbar>

        <div class="d-flex flex-row">
          <v-tabs
            v-model="tab"
            color="primary"
          >
            <v-tab value="general">
              <v-icon start>
                mdi:cog-box
              </v-icon>
              General
            </v-tab>
            <v-tab value="storage">
              <v-icon start>
                mdi:zip-disk
              </v-icon>
              Storage
            </v-tab>
            <v-tab value="app">
              <v-icon start>
                mdi:application
              </v-icon>
              App
            </v-tab>
          </v-tabs>
          <v-window v-model="tab">
            <v-window-item value="general">
              <v-card
                flat
                height="300"
              >
                <v-card-actions>
                  <v-combobox
                    v-model="currentTheme"
                    label="theme"
                    variant="solo"
                    :items="['Light', 'Dark']"
                  />
                  <v-combobox
                    v-model="currentController"
                    label="speedController"
                    variant="solo"
                    :items="['Vertical', 'Knob', 'Circular', 'Horizontal']"
                  />
                </v-card-actions>
              </v-card>
            </v-window-item>
            <v-window-item value="storage">
              <v-card
                flat
                height="300"
              >
                <v-card-actions>
                  <v-btn>Export App Data</v-btn>
                  <v-btn>Import App Data</v-btn>
                  <v-btn color="error">
                    Wipe App Data
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-window-item>
            <v-window-item value="app">
              <v-card
                flat
                height="300"
              >
                <v-card-actions>
                  <v-btn>Install as App</v-btn>
                </v-card-actions>
              </v-card>
            </v-window-item>
          </v-window>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
export default {
  name: 'SettingsPage',
};
</script>
<script setup lang="ts">
import {storeToRefs} from 'pinia';
import {ref, computed} from 'vue';
import {useSettingsStore} from '../store/settings';
const settingsStore = useSettingsStore();
const {getTheme, getController} = storeToRefs(settingsStore);
const setTheme = computed(settingsStore.setTheme);
const tab = ref('general');
const currentTheme = ref(getTheme);
const currentController = ref(getController);

watch(currentTheme);
</script>
<style scoped></style>
