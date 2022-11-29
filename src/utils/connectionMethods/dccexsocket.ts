import {ConnectionHandler} from '../interfaces';

export class DCCExSocket implements ConnectionHandler {
  socket: WebSocket;

  constructor(ip: string, port: number) {
    this.socket = new WebSocket(`ws://${ip}:${port}`);
  }

  setSpeed(address: number, speed: number): void {
    this.socket.send(JSON.stringify({loco: address, speed: speed}));
    console.log(`Set speed of ${address} to ${speed}`);
  }
}
