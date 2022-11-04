<script setup lang="ts">
import {ref} from 'vue';

const counter = ref(0);

</script>

<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <h1>
        Home
      </h1>

      <p
        id="counter"
        class="text-h2"
      >
        {{ counter }}
      </p>
      <v-btn @click="counter++">
        Click me!
      </v-btn>
      <v-btn
        id="reset"
        @click="counter = 0"
      >
        Reset
      </v-btn>
    </v-responsive>
  </v-container>
</template>
