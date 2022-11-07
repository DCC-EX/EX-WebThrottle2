import { defineStore } from "pinia";

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

export const settingsStore = defineStore("settings", {
    state: (): State => {
        const savedConnections = localStorage.getItem()
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
            localStorage.setItem(, JSON.stringify(this.connections));
        },
    },
});
