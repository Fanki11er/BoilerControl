import { BoilerSettings } from "../Class/BoilerSettings/BoilerSettings";

export type BoilerStatus = "Stopped" | "Working" | "Idle";

export type BoilerCurrentParameters = {
	currentTemperature: number;
	currentFanSpeed: number;
	currentFuelLevel: number;
	alarm: string;
	currentOutsideTemperature: number;
	currentFuelStream: number;
	currentStatus: BoilerStatus;
};

export type BoilerSnapshot = {
	boilerId: string;
	boilerSettings: BoilerSettings;
	boilerCurrentParameters: BoilerInfo;
};

export type PanelOptions =
	| "STOP"
	| "START"
	| "RESET"
	| "REFUEL"
	| "SETTINGS"
	| "EXIT";

export type BoilerInfo = {
	currentTemperature: number;
	currentFanSpeed: number;
	currentFuelLevel: number;
	currentOutsideTemperature: number;
	currentFuelStream: number;
	alarm: string;
	currentStatus: BoilerStatus;
};
