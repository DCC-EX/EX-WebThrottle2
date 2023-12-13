<script lang="ts">
export default {
  name: 'CommunicationsFakeReadForm',
};
</script>

<script setup lang="ts">
import {useCommunicationsStore} from '../../store/communications';
import {ref} from 'vue';

const communicationsStore = useCommunicationsStore();
const formMessage = ref<string>('');

function handleFormSubmit(message: string) {
  communicationsStore.fakeReadMessage(message);
  formMessage.value = '';
}

</script>

<template>
  <p class="text-overline">
    Simulates commands received from the Command Station
  </p>

  <v-form @submit.prevent="handleFormSubmit(formMessage)">
    <v-text-field v-model="formMessage" label="Read Command" required/>

    <div>
      <v-btn type="submit" text="Fake Read"/>
    </div>
  </v-form>
</template>
