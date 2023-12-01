import type { ConnectionHandler } from "../interfaces";
import { SerialPort } from "serialport";

/**
 * Serial connection handler
 */
export class Serial implements ConnectionHandler {
  public connection: SerialPort;

  /**
   *
   * @param port Serial port to be used for communication
   * @param baud (Optional) Communication baud rate which to communicate with the port
   */
  constructor(port: string, baud: number = 115200) {
    this.connection = new SerialPort({
      path: port,
      baudRate: baud,
    });
  }

  sendData(data: any): void {}
}
