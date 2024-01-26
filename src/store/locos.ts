import {defineStore} from 'pinia';

export interface CVList {
  [cv: number]: number;
}

export interface Locomotive {
  [loconumber: number]: LocomotiveData;
}
export interface ByteCV {
  cvNumber: number;
  value: number;
}

export interface BooleanCV {
  cvNumber: number;
  value: boolean;
}

export enum ThrottleType {
  ROTARY = 'Rotary Knob',
  VERTICAL = 'Vertical Slider',
  CIRCULAR = 'Circular Slider',
  HORIZONTAL = 'Horizontal Slider',
}

export interface LocomotiveData {
  displayName: string;
  roadNumber: string;
  dccAddress: number;
  currentSpeed: number;
  throttleType: ThrottleType;
  savedCVState?: CVList;
}

interface State {
  locomotives: Locomotive;
  activeThrottles: Locomotive;
}

export const savedLocosStore = defineStore('savedLocos', {
  state: (): State => {
    return {
      locomotives: {},
      activeThrottles: {
        1234: {
          displayName: 'Test Loco 1',
          roadNumber: '1234',
          dccAddress: 1234,
          currentSpeed: 0,
          throttleType: ThrottleType.ROTARY,
        },
        4567: {
          displayName: 'Test Loco 2',
          roadNumber: '4567',
          dccAddress: 4567,
          currentSpeed: 0,
          throttleType: ThrottleType.CIRCULAR,
        },
        4321: {
          displayName: 'Test Loco 3',
          roadNumber: '4321',
          dccAddress: 4321,
          currentSpeed: 0,
          throttleType: ThrottleType.VERTICAL,
        },
        7654: {
          displayName: 'Test Loco 4',
          roadNumber: '7654',
          dccAddress: 7654,
          currentSpeed: 0,
          throttleType: ThrottleType.HORIZONTAL,
        },
      },
    };
  },
  actions: {
    updateActiveThrottle(loco: number, data: LocomotiveData) {
      this.activeThrottles[loco] = data;
    },
  },
});
