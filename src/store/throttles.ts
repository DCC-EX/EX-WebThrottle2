import {defineStore} from 'pinia';
import {Active, powerCommand, Track} from '@cloudthrottle/dcc-ex--commands';
import {useCommunicationsStore} from '@/store/communications';

type ThrottlesState = {
  powers: Map<Track, Active>
}

export const useThrottlesStore = defineStore('throttles', {
  state: (): ThrottlesState => {
    const powersMap = new Map<Track, Active>();
    powersMap.set(Track.MAIN, 0);

    return {
      powers: powersMap,
    };
  },
  getters: {
    mainPower({powers}): Active {
      return powers.get(Track.MAIN) || 0;
    },
  },
  actions: {
    setMainPower(active: Active): void {
      console.debug('setMainPower', active);

      const newPowersState = new Map(this.powers);
      newPowersState.set(Track.MAIN, active);
      this.powers = newPowersState;

      const commsStore = useCommunicationsStore();
      const powerCommandString = powerCommand({
        power: active,
        track: Track.MAIN,
      });
      commsStore.sendMessage(powerCommandString);
    },
  },
},
);
