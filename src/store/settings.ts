import {defineStore} from 'pinia';
import {STORAGE_KEYS} from '../utils/enums';

export enum CONNECTION_TYPE {
  SERIAL,
  WIFI,
  EMULATOR,
}

export interface Connection {
  conType: CONNECTION_TYPE;
  address: string;
  port?: number;
  name: string;
}

interface State {
  connections: Connection[];
}

export const settingsStore = defineStore('settings', {
  state: (): State => {
    const savedConnections = localStorage.getItem(
      STORAGE_KEYS.SAVED_CONNECTIONS,
    );
    if (savedConnections) {
      return {
        connections: JSON.parse(savedConnections),
      };
    }
    return {
      connections: [],
    };
  },
  getters: {
    getConnections: (state) => state.connections,
  },
  actions: {
    addConnection(conn: Connection) {
      this.connections.push(conn);
      localStorage.setItem(
        STORAGE_KEYS.SAVED_CONNECTIONS,
        JSON.stringify(this.connections),
      );
    },
  },
});
