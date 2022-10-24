import { BoilerStatus, PanelOptions } from "../../Types/types";
export declare class Boiler {
    private id;
    private currentTemperature;
    private currentFanSpeed;
    private currentFuelLevel;
    private alarm;
    private currentOutsideTemperature;
    private currentFuelStream;
    private currentStatus;
    private counter;
    private fuelUsed;
    constructor(id: string);
    getId(): string;
    getAlarm(): string;
    getBoilerInfo(): BoilerInfo;
    setFuelLevel(newFuelLevel: number): void;
    startBoiler(): void;
    stopBoiler(): void;
    private updateCounter;
    private update;
    private figureSpeedOfTempFalling;
    private stopUpdate;
    private breakUpdate;
    private workingUpdate;
    getBoilerParameters(): BoilerInfo;
    changeStatus(status: PanelOptions): void;
}
export declare type BoilerInfo = {
    currentTemperature: number;
    currentFanSpeed: number;
    currentFuelLevel: number;
    currentOutsideTemperature: number;
    currentFuelStream: number;
    alarm: string;
    currentStatus: BoilerStatus;
};
