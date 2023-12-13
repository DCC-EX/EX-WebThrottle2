import {defineStore} from 'pinia';

export type LogItemKind = 'sent' | 'received';
export type LogItem = {
    message: string
    kind: LogItemKind
    timestamps: {
        createdAt: Date
    }
}

export type Logs = LogItem[]

type CommunicationsState = {
    logs: Logs
}

export const useCommunicationsStore = defineStore('communications', {
  state: (): CommunicationsState => {
    return {
      logs: [],
    };
  },
  getters: {
    sentLogs: ({logs}): Logs => {
      return logs.filter((logItem) => logItem.kind === 'sent');
    },
    receivedLogs: ({logs}): Logs => {
      return logs.filter((logItem) => logItem.kind === 'received');
    },
  },
  actions: {
    sendMessage(message: string): void {
      const newLogItem: LogItem = {message, timestamps: {createdAt: new Date}, kind: 'sent'};
      this.addLogItem(newLogItem);
    },
    fakeReadMessage(message: string): void {
      const newLogItem: LogItem = {message, timestamps: {createdAt: new Date}, kind: 'received'};
      this.addLogItem(newLogItem);
    },
    addLogItem(logItem: LogItem): void {
      const newLogItem = {...logItem};
      this.logs = [newLogItem, ...this.logs];
    },
  },
});
