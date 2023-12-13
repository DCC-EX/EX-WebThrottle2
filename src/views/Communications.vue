<script lang="ts">
export default {
  name: 'CommunicationsView',
};
</script>

<script setup lang="ts">
import {ref} from 'vue';
import CommunicationsFakeReadForm from "@/views/communications/FakeReadForm.vue";
import CommunicationsSendForm from "@/views/communications/SendForm.vue";
import CommunicationsLogs from "@/views/communications/Logs.vue";

const tab = ref('general');

</script>

<template>
  <v-container>
    <v-toolbar color="primary" class="text-center">
      <v-toolbar-title>Communications</v-toolbar-title>
    </v-toolbar>

    <v-tabs v-model="tab" color="primary">
      <v-tab value="log">
        <v-icon start icon="mdi:format-list-bulleted"/>
        Log
      </v-tab>
      <v-tab value="send">
        <v-icon start icon="mdi:call-made"/>
        Send
      </v-tab>
      <v-tab value="fakeRead">
        <v-icon start icon="mdi:call-received"/>
        Fake Read
      </v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item value="log">
        <v-container>
          <CommunicationsLogs/>
        </v-container>
      </v-window-item>
      <v-window-item value="send">
        <v-container>
          <CommunicationsSendForm/>
        </v-container>
      </v-window-item>
      <v-window-item value="fakeRead">
        <v-container>
          <CommunicationsFakeReadForm/>
        </v-container>
      </v-window-item>
    </v-window>
  </v-container>
</template>
