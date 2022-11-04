<script setup lang="ts">
import {ref} from 'vue';
import {useRouter} from 'vue-router';

const drawer = ref(false);

const router = useRouter();

</script>

<template>
  <v-app>
    <v-app-bar :elevation="0">
      <template #prepend>
        <v-app-bar-nav-icon
          id="drawer-icon"
          @click="drawer = !drawer"
        />
      </template>
      <v-app-bar-title>Home</v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer">
      <v-list
        nav
      >
        <v-list-item
          title="home"
          value="home"
          @click="router.push('/'); drawer = !drawer"
        />
        <v-list-item
          title="about"
          value="about"
          @click="router.push('/about'); drawer = !drawer"
        />
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <RouterView/>
    </v-main>
  </v-app>
</template>

