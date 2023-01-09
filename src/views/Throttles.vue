<template>
  <v-container fluid>
    <v-row>
      <v-col cols="2">
        <v-tabs v-model="activeThrottle" direction="vertical" color="primary">
          <v-tab v-for="(l, k) in activeThrottles" :value="k">
            <v-icon start> mdi:train-variant </v-icon>
            {{ l.displayName }}
          </v-tab>
        </v-tabs>
      </v-col>
      <v-col>
        <v-window v-model="activeThrottle">
          <v-window-item v-for="(l, k) in activeThrottles" :value="k">
            <throttle :loco="k"></throttle>
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
export default {
  name: "ThrottlePage",
};
</script>
<script setup lang="ts">
import Throttle from "../components/throttle.vue";
import { storeToRefs } from "pinia";
import { ref, computed } from "vue";
import { savedLocosStore } from "../store/locos";
const locoStore = savedLocosStore();
const { activeThrottles } = storeToRefs(locoStore);

const activeThrottle = ref(-1);
</script>
<style lang="scss" scoped></style>
