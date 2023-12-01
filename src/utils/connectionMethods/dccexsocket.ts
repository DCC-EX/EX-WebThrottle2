import { ConnectionHandler } from "../interfaces";

export class DCCExSocket implements ConnectionHandler {
  connection: WebSocket;

  constructor(ip: string, port: number) {
    this.connection = new WebSocket(`ws://${ip}:${port}`);
  }

  sendData(data: any): void {}
}
