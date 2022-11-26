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
  theme: string;
  controller: string;
}

export const useSettingsStore = defineStore('settings', {
  state: (): State => {
    const savedConnections = localStorage.getItem(
      STORAGE_KEYS.SAVED_CONNECTIONS,
    );
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);

    return {
      connections: savedConnections ? JSON.parse(savedConnections) : [],
      theme: savedTheme ? savedTheme : 'dark',
      controller: 'knob',
    };
  },
  getters: {
    getConnections: (state) => state.connections,
    getTheme: (state) => state.theme,
    getController: (state) => state.controller,
  },
  actions: {
    addConnection(conn: Connection) {
      this.connections.push(conn);
      localStorage.setItem(
        STORAGE_KEYS.SAVED_CONNECTIONS,
        JSON.stringify(this.connections),
      );
    },
    setTheme(theme: string) {
      this.theme = theme;
      localStorage.setItem(STORAGE_KEYS.THEME, theme);
    },
    setController(cont: string) {
      this.controller = cont;
      localStorage.setItem(STORAGE_KEYS.CONTROLLER, cont);
    },
  },
});
