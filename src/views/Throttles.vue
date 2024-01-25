<template>
  <v-container fluid>
    <v-row>
      <v-col cols="2">
        <v-tabs
          v-model="activeThrottle"
          direction="vertical"
          color="primary"
        >
          <v-tab
            v-for="(loco, key) in activeThrottles"
            :key="key"
            :value="key"
          >
            <v-icon start>
              mdi:train-variant
            </v-icon>
            {{ loco.displayName }}
          </v-tab>
        </v-tabs>
      </v-col>
      <v-col>
        <v-window v-model="activeThrottle">
          <v-window-item
            v-for="(loco, key) in activeThrottles"
            :key="key"
            :value="key"
          >
            <throttle-detail :loco="key"/>
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
import ThrottleDetail from '../components/throttle.vue';
import {storeToRefs} from 'pinia';
import {ref} from 'vue';
import {savedLocosStore} from '../store/locos';
const locoStore = savedLocosStore();
const {activeThrottles} = storeToRefs(locoStore);

const activeThrottle = ref(-1);
</script>
<style lang="scss" scoped></style>
