import { defineStore } from "pinia";

export interface ByteCV {
  cvNumber: number;
  value: number;
}

export interface BooleanCV {
  cvNumber: number;
  value: boolean;
}

export enum ThrottleType {
  ROTARY = "Rotary Knob",
  VERTICAL = "Vertical Slider",
  CIRCULAR = "Circular Slider",
}

export interface Locomotive {
  displayName: string;
  roadNumber: string;
  dccAddress: number;
  currentSpeed: number;
  throttleType: ThrottleType;
  savedCVState?: (ByteCV | BooleanCV)[];
}

interface State {
  Locomotives: Locomotive[];
  activeThrottles: Locomotive[];
}

export const savedLocosStore = defineStore("savedLocos", {
  state: (): State => {
    return {
      Locomotives: [],
      activeThrottles: [],
    };
  },
});
