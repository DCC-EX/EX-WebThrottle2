<template>
  <v-app>
    <v-app-bar>
      <template #prepend>
        <v-app-bar-nav-icon
          icon="mdi:menu"
          @click.stop="toggleNav()"
        />
      </template>

      <v-app-bar-title id="currentPageTitle">
        {{ getTitle }}
      </v-app-bar-title>

      <template #append>
        <v-switch
          v-model="powerModel"
          inset
          true-value="on"
          false-value="off"
          true-icon="mdi:power-on"
          false-icon="mdi:power-off"
        >
          <template #label>
            <v-icon
              icon="mdi:power"
              :style="powerModel == `on` ? 'color: green;' : 'color: red;'"
            />
          </template>
        </v-switch>
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="showNavBar">
      <v-list nav>
        <v-list-item
          v-for="(item, i) in getNavList"
          :key="i"
          :to="item.to"
        >
          <template #prepend>
            <v-icon :icon="item.icon" />
          </template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
    <v-footer height="25">
      <!-- <v-row no-gutters>
        <v-col cols="2">
          <v-switch
            id="themeSwitch"
            v-model="themeModel"
            inset
            true-icon="mdi:weather-sunny"
            false-icon="mdi:moon-waning-crescent"
            true-value="dccExLight"
            false-value="dccExDark"
          />
        </v-col>
        <v-col> -->
      {{ new Date().getFullYear() }} — <strong>DCC EX Team</strong>
      <!-- </v-col>
      </v-row> -->
    </v-footer>
  </v-app>
</template>
<script lang="ts" setup>
import {useTheme} from 'vuetify';
import {computed, ref} from 'vue';
import {useGlobalStore} from './store/global';
import {useSettingsStore} from './store/settings';
import {storeToRefs} from 'pinia';

const theme = useTheme();
const globalStore = useGlobalStore();
const settingsStore = useSettingsStore();
const {getTitle, showNavBar, getNavList} = storeToRefs(globalStore);
const {getTheme} = storeToRefs(settingsStore);
const toggleNav = computed(() => globalStore.toggleNavBar);
const powerModel = ref('off');
theme.global.name.value = getTheme.value;
</script>

<style></style>
