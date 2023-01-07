<template>
  <v-container fluid>
    <v-row>
      <v-col cols="2">
        <v-list>
          <v-list-item two-line class="py-3">
            <v-list-item-title>Locomotive 1</v-list-item-title>
            <v-list-item-subtitle>CV text</v-list-item-subtitle>
          </v-list-item>
          <v-list-item two-line class="py-3">
            <v-list-item-title>Locomotive 2</v-list-item-title>
            <v-list-item-subtitle>CV text</v-list-item-subtitle>
          </v-list-item>
          <v-list-item two-line class="py-3">
            <v-list-item-title>Locomotive 3</v-list-item-title>
            <v-list-item-subtitle>CV text</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col>
        <throttle></throttle>
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
</script>
<style lang="scss" scoped></style>
