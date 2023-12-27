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
            hide-details
            true-value="1"
            false-value="0"
            class="p-switch"
          >
            <template #label>  
              <v-icon
                icon="mdi:power"
                :class="powerModel.value == 1 ? 'p-on' : 'p-off'"
              />
              <label>Power {{ powerModel.value == 1 ? 'On' : 'Off' }}</label>
            </template>
          </v-switch>

          <form @submit.prevent="serialConnectionRequest">
            <span class="conn-type-icon"><img src="../src/assets/Serial.svg"/></span>
            <span v-if="isConnected" class="font-light">Connected ✅</span>
            <button v-else type="submit"  class="font-light">
              Connect
            </button>
          </form>
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
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view/>
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
import {useCommunicationsStore} from '@/store/communications';
import {useThrottlesStore} from '@/store/throttles';
import {Active} from '@cloudthrottle/dcc-ex--commands';
import './assets/styles/ex-icons.scss';

const theme = useTheme();
const globalStore = useGlobalStore();
const settingsStore = useSettingsStore();
const {getTitle, showNavBar, getNavList} = storeToRefs(globalStore);
const {getTheme} = storeToRefs(settingsStore);
const toggleNav = computed(() => globalStore.toggleNavBar);
theme.global.name.value = getTheme.value;

const {serialConnectionRequest} = useCommunicationsStore();
const { isConnected } = storeToRefs(useCommunicationsStore())

const throttlesStore = useThrottlesStore();
const {mainPower} = storeToRefs(throttlesStore)

const powerModel = computed({
  get: () => mainPower,
  set: (active: unknown) => {
    throttlesStore.setMainPower(active as Active)
  }
});

</script>

<style lang="scss">
.font-light{
  font-variation-settings: "wght" 200;
  font-size: 14px;
}
.p-switch.v-switch .v-selection-control__wrapper {
  display: none !important;
  width: 0;
}

.p-switch .v-label{
  font-size: 14px;
  font-variation-settings: "wght" 300;
  color: #ffffff;
  text-transform: capitalize;
  padding-inline-start: 0px !important;
  padding: 20px 16px;
  height: 24px !important;
  margin: 0 24px;
  background: #000000;
  border-radius: 24px;
}

.p-switch .p-on {
  color: #ffffff;
  box-shadow: 0px 0px 6px 0px #71ff71;
  background: #00e700;
  border-radius: 16px;
  padding: 4px;
  height: 24px;
  width: 24px;
  margin: 8px;
  border: 1px solid #71ff71;
}

.p-switch .p-off {
  color: #ffffff;
  background: red;
  border-radius: 16px;
  padding: 4px;
  height: 24px;
  width: 24px;
  margin: 8px;
}
span.conn-type-icon {
    border: 1px solid #9d9d9d;
    padding: 2px 3px;
    border-radius: 20px;
    margin: 0 4px;
}
span.conn-type-icon img {
    display: inline-block;
    height: 20px;
    width: 20px;
    vertical-align: middle;
}
</style>
