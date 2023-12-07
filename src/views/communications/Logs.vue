<script lang="ts">
export default {
  name: 'CommunicationsLogs',
};
</script>

<script setup lang="ts">
import {useCommunicationsStore} from '@/store/communications';
import {storeToRefs} from 'pinia';
import {computed, ComputedRef} from 'vue';

const communicationsStore = useCommunicationsStore();
const isEmpty: ComputedRef<boolean> = computed(() => communicationsStore.logs.length === 0);
const {logs} = storeToRefs(communicationsStore);

</script>

<template>
  <p v-show="isEmpty" class="text-overline">
    Waiting for communications...
  </p>

  <v-list v-show="!isEmpty" density="compact">
    <v-list-item v-for="(logItem, index) in logs" :key="index" color="primary">
      <template #prepend>
        <v-icon v-show="logItem.kind === 'sent'" icon="mdi:call-made"/>
        <v-icon v-show="logItem.kind === 'received'" icon="mdi:call-received"/>
      </template>

      <v-list-item-title v-text="logItem.message" />
      <v-list-item-subtitle v-text="logItem.timestamps.createdAt.toLocaleString()"/>
    </v-list-item>
  </v-list>
</template>
