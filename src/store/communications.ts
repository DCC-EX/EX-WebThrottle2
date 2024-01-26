import {defineStore} from 'pinia';
import {
  createSerialConnection,
} from '@cloudthrottle/dcc-ex--serial-communicator';

type LogItemKind = 'sent' | 'received';
type LogItem = {
  message: string
  kind: LogItemKind
  timestamps: {
    createdAt: Date
  }
}
type Logs = LogItem[]

type Writer = WritableStreamDefaultWriter<string> | null

type CommunicationsState = {
  logs: Logs,
  writer: Writer
}

export const useCommunicationsStore = defineStore('communications', {
  state: (): CommunicationsState => {
    return {
      logs: [],
      writer: null,
    };
  },
  getters: {
    sentLogs: ({logs}): Logs => {
      return logs.filter((logItem) => logItem.kind === 'sent');
    },
    receivedLogs: ({logs}): Logs => {
      return logs.filter((logItem) => logItem.kind === 'received');
    },
    isConnected: ({writer}): boolean => {
      return !!writer;
    },
  },
  actions: {
    sendMessage(message: string): void {
      console.debug('sendMessage', message);
      const newLogItem: LogItem = {
        message,
        timestamps: {createdAt: new Date},
        kind: 'sent',
      };
      this.writeToSerial(message);
      this.addLogItem(newLogItem);
    },
    fakeReadMessage(message: string): void {
      console.debug('fakeReadMessage', message);
      const newLogItem: LogItem = {
        message,
        timestamps: {createdAt: new Date},
        kind: 'received',
      };
      this.addLogItem(newLogItem);
    },
    readHandler(message: string): void {
      console.debug('readHandler', message);
      const newLogItem: LogItem = {
        message,
        timestamps: {createdAt: new Date},
        kind: 'received',
      };
      this.addLogItem(newLogItem);
    },
    addLogItem(logItem: LogItem): void {
      const newLogItem = {...logItem};
      this.logs = [newLogItem, ...this.logs];
    },
    writeToSerial(message: string): void {
      console.debug('writeToSerial', message);
      if (this.isConnected && this.writer) {
        console.debug('writeToSerial', 'writer.write', message);
        this.writer.write(message);
      }
    },
    async serialConnectionRequest(): Promise<void> {
      try {
        const {writer} = await createSerialConnection({
          readHandler: this.readHandler,
        });
        this.writer = writer;
      } catch (e) {
        console.debug('serialConnectionRequest', e);
        return;
      }
    },
  },
});
