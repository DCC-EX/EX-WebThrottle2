<template>
  <v-container fluid>
    <v-card>
      <v-row>
        <v-col cols="10">
          <v-row>
            <v-col cols="3">
              <control-knob></control-knob>
            </v-col>
            <v-col cols="6"> Function buttons </v-col>
          </v-row>
        </v-col>
      </v-row>
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
</script>
<style lang="scss" scoped></style>
