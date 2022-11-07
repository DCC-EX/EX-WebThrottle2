import { defineStore } from "pinia";

interface State {}

export const savedLocosStore = defineStore("savedLocos", {
    state: (): State => {
        return {};
    },
});
