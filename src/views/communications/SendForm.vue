<script lang="ts">
export default {
  name: 'CommunicationsSendForm',
};
</script>

<script setup lang="ts">
import {useCommunicationsStore} from '@/store/communications';
import {ref} from 'vue';

const communicationsStore = useCommunicationsStore();
const formMessage = ref<string>('');

function handleFormSubmit(message: string) {
  communicationsStore.sendMessage(message);
  formMessage.value = '';
}

</script>

<template>
  <p class="text-overline">
    Send commands directly to the Command Station
  </p>

  <v-form @submit.prevent="handleFormSubmit(formMessage)">
    <v-text-field v-model="formMessage" label="Command" required/>

    <div>
      <v-btn type="submit" text="Send"/>
    </div>
  </v-form>
</template>
