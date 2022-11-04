import type {ConnectionHandler} from '../hwConnections';

/**
 * Serial connection handler
 */
export class Serial implements ConnectionHandler {
  /**
   * Set the speed of a loco
   * @param {number} address The address of the loco
   * @param {number} speed The speed to set it to
   */
  setSpeed(address: number, speed: number): void {
    console.log(`Set speed of ${address} to ${speed}`);
  }
}
