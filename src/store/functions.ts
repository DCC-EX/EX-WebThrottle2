import {defineStore} from 'pinia';

interface DCCFunctions {
  name: string;
}

interface State {
  functions: DCCFunctions[];
}

export const functionMapsStore = defineStore('functionMaps', {
  state: (): State => {
    return {
      functions: [],
    };
  },
});
