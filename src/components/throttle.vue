<template>
  <v-container fluid>
    <v-card>
      <v-tabs v-model="tab" color="primary">
        <v-tab value="throttle">
          <v-icon start> mdi:train-variant </v-icon>
          Throttle
        </v-tab>
        <v-tab value="cv">
          <v-icon start> mdi:memory </v-icon>
          CVs
        </v-tab>
        <v-tab value="settings">
          <v-icon start> mdi:cog-box </v-icon>
          Settings
        </v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item value="throttle">
          <v-row>
            <v-col cols="10">
              <v-row>
                <v-col cols="3">
                  <control-knob
                    v-if="locomotive.throttleType == ThrottleType.ROTARY"
                  ></control-knob>
                  <v-slider
                    v-if="locomotive.throttleType == ThrottleType.VERTICAL"
                    direction="vertical"
                  ></v-slider>
                  <v-slider
                    v-if="locomotive.throttleType == ThrottleType.HORIZONTAL"
                  ></v-slider>
                </v-col>
                <v-col cols="6"> Function buttons </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-window-item>

        <v-window-item value="cv"> </v-window-item>
        <v-window-item value="settings">
          <v-combobox
            v-model="locomotive.throttleType"
            label="speedController"
            variant="solo"
            @update:model-value="updateActiveThrottle(loco, locomotive)"
            :items="['Vertical', 'Knob', 'Circular', 'Horizontal']"
          />
        </v-window-item>
      </v-window>
    </v-card>
  </v-container>
</template>
<script lang="ts">
export default {
  name: "Throttle",
};
</script>
<script setup lang="ts">
import ControlKnob from "@slipmatio/control-knob";
import { storeToRefs } from "pinia";
import { ref, computed, defineProps } from "vue";
import { ThrottleType, savedLocosStore } from "../store/locos";

const locoStore = savedLocosStore();
const props = defineProps({ loco: Number });
const { activeThrottles } = storeToRefs(locoStore);
const updateActiveThrottle = computed(() => locoStore.updateActiveThrottle);
const locomotive = activeThrottles.value[props.loco ? props.loco : 0];
const tab = ref("throttle");
</script>
<style lang="scss" scoped></style>
