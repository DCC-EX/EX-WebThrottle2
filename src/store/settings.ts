import {defineStore} from 'pinia';
import {StorageKeys} from '../utils/enums';

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
      StorageKeys.SAVED_CONNECTIONS,
    );
    const savedTheme = localStorage.getItem(StorageKeys.THEME);

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
        StorageKeys.SAVED_CONNECTIONS,
        JSON.stringify(this.connections),
      );
    },
    setTheme(theme: string) {
      this.theme = theme;
      localStorage.setItem(StorageKeys.THEME, theme);
    },
    setController(cont: string) {
      this.controller = cont;
      localStorage.setItem(StorageKeys.CONTROLLER, cont);
    },
  },
});
