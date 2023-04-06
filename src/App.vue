<template>
  <v-app class="fill-height">
    <v-app-bar>
      <template #prepend>
        <v-app-bar-nav-icon icon="mdi:menu" @click.stop="toggleNav()" />
      </template>

      <v-app-bar-title id="currentPageTitle">
        {{ getTitle }}
      </v-app-bar-title>

      <template #append>
        <v-switch
          v-model="powerModel"
          hide-details
          true-value="on"
          false-value="off"
          class="p-switch"
        >
          <template #label>
            <label>Power {{ powerModel }}</label>
            <v-icon
              icon="mdi:power"
              :class="powerModel == 'on' ? 'p-on' : 'p-off'"
            />
          </template>
        </v-switch>
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="showNavBar">
      <v-list nav>
        <v-list-item v-for="(item, i) in getNavList" :key="i" :to="item.to">
          <template #prepend>
            <v-icon :icon="item.icon" />
          </template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="main">
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
import { useTheme } from "vuetify";
import { computed, ref } from "vue";
import { useGlobalStore } from "./store/global";
import { useSettingsStore } from "./store/settings";
import { storeToRefs } from "pinia";

const theme = useTheme();
const globalStore = useGlobalStore();
const settingsStore = useSettingsStore();
const { getTitle, showNavBar, getNavList } = storeToRefs(globalStore);
const { getTheme } = storeToRefs(settingsStore);
const toggleNav = computed(() => globalStore.toggleNavBar);
const powerModel = ref("off");
theme.global.name.value = getTheme.value;
</script>

<style lang="scss">
.main {
  height: 95%;
}
.p-switch.v-switch .v-selection-control__wrapper {
  display: none !important;
  width: 0;
}
.p-switch .v-label label {
  font-size: 14px;
  font-variation-settings: "wght" 200;
  color: #ffffff;
  text-transform: capitalize;
}
.p-switch .p-on {
  color: #ffffff;
  box-shadow: 0px 0px 6px 0px #71ff71;
  background: #00e700;
  border-radius: 16px;
  padding: 4px;
  height: 32px;
  width: 32px;
  margin: 8px;
  border: 1px solid #71ff71;
}
.p-switch .p-off {
  color: #ffffff;
  background: red;
  border-radius: 16px;
  padding: 4px;
  height: 32px;
  width: 32px;
  margin: 8px;
}
</style>
