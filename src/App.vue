<template>
  <v-app>
    <v-app-bar>
      <template #prepend>
        <v-app-bar-nav-icon
          icon="mdi:menu"
          @click.stop="toggleNav()"
        />
      </template>

      <v-app-bar-title id="title">
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
            <v-icon :icon="item.icon"/>
          </template>
          <v-list-item-title v-text="item.title"/>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>
    <v-footer height="25">
      <v-row no-gutters>
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
        <v-col>
          {{ new Date().getFullYear() }} — <strong>DCC EX Team</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
  <!-- <div>
        <nav class="menu" id="side-menu" tabindex="0">
            <header class="avatar">
                <button class="nav-btn in" id="nav-close">&times;</button>
                <img src="./assets/cover.jpg" />
            </header>
            <ul>
                <li tabindex="0" class="throttle" id="throttle-nav"><span>Throttle</span></li>
                <li tabindex="0" class="locomotives" id="loco-nav"><span>Locomotives</span></li>
                <li tabindex="0" class="function-maps" id="fn-map-nav">
                    <span>Function Maps</span>
                </li>
                <li tabindex="0" class="settings" id="settings-nav"><span>Settings</span></li>
            </ul>
        </nav>
        <div class="topnav">
            <div class="row">
                <div class="column-2">
                    <button class="nav-btn" id="nav-open">☰</button>
                </div>
                <div class="column-6 align-center">
                    <div class="throttle-heading">
                        <a href="http://www.dcc-ex.com" target="_blank" rel="noopener noreferrer"
                            ><div class="wt-logo"></div
                        ></a>
                        img src="images/WebThrottle.png" /> -->
  <!-- <p>Version 1.2.0</p> -->
  <!-- </div>
                </div>
                <div class="column-2">
                    <button class="btn-expand" id="fs-toggle" state="ws" title="Fullscreen">
                        &#10530;
                    </button>
                    <button class="btn-info" id="info-tooltip" state="ws" title="Information">
                        <span class="icon-info"></span>
                    </button>
                    <button
                        class="btn-info"
                        id="help-button"
                        state="ws"
                        title="Help"
                        onclick=" window.open('https://dcc-ex.com/throttles/ex-webthrottle.html', '_blank')"
                    >
                        <span class="icon-question"></span>
                    </button>
                </div>
            </div>
        </div>
        
    </div> -->
</template>
<script lang="ts" setup>
import {useTheme} from 'vuetify';
import {computed, ref, watch} from 'vue';
import {useGlobalStore} from './store/global';
import {storeToRefs} from 'pinia';

const theme = useTheme();
const globalStore = useGlobalStore();
const {getTitle, showNavBar, getNavList} = storeToRefs(globalStore);
const toggleNav = computed(() => globalStore.toggleNavBar);
const themeModel = ref('dccExDark');
const powerModel = ref('off');

watch(themeModel, (newmodel, oldold) => {
  theme.global.name.value = newmodel;
});
</script>

<style></style>
