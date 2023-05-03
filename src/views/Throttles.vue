<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row class="fill-height">
      <v-col cols="2">
        <v-tabs
          v-model="activeThrottleTabIndex"
          direction="vertical"
          color="primary"
        >
          <v-tab
            v-for="(activeThrottle, key) in activeThrottles"
            :key="activeThrottle.dccAddress"
            :value="key"
          >
            <v-icon start>
              mdi:train-variant
            </v-icon>
            {{ activeThrottle.displayName }}
          </v-tab>
        </v-tabs>
      </v-col>
      <v-col class="fill-height">
        <v-window
          v-model="activeThrottleTabIndex"
          class="fill-height"
        >
          <v-window-item
            v-for="(activeThrottle, key) in activeThrottles"
            :key="activeThrottle.dccAddress"
            class="fill-height"
            :value="key"
          >
            <throttle-control
              class="fill-height"
              :loco="key"
            />
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
export default {
  name: 'ThrottlePage',
};
</script>
<script setup lang="ts">
import ThrottleControl from '../components/ThrottleControl.vue';
import {storeToRefs} from 'pinia';
import {ref} from 'vue';
import {savedLocosStore} from '../store/locos';
const locoStore = savedLocosStore();
const {activeThrottles} = storeToRefs(locoStore);

const activeThrottleTabIndex = ref(-1);
</script>
<style lang="scss" scoped></style>
