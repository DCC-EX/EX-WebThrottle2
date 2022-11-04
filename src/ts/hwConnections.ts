export enum ConnectionMethods {
    Serial = 'Serial',
    Emulator = 'Emulator',
}

export interface ConnectionHandler {
    setSpeed(address: number, speed: number): void;
}
