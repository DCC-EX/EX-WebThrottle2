import { SerialPort } from "serialport";

export interface ConnectionHandler {
  sendData(data: any): void;
  connection: WebSocket | SerialPort
}
