export type Routes =
	| "/"
	| "/Login"
	| "/Register"
	| "/Main"
	| "/BoilerInfo"
	| "/Settings"
	| "/AddBoiler";

export type Route = {
	currentRoute: Routes;
	payload?: string;
};

export type BoilerStatus = "Stopped" | "Working" | "Idle";

export type PanelOptions =
	| "STOP"
	| "START"
	| "RESET"
	| "REFUEL"
	| "SETTINGS"
	| "EXIT";

export type User = {
	userName: string;
	userId: number;
};

export type BoilerInfo = {
	currentTemperature: number;
	currentFanSpeed: number;
	currentFuelLevel: number;
	currentOutsideTemperature: number;
	currentFuelStream: number;
	alarm: string;
	currentStatus: BoilerStatus;
};

export type BoilerSettings = {
	userSettings: {
		desiredTemperature: number;
		boilerHysteresis: number;
	};
	advancedSettings: {
		fanSpeed: number;
		fanSpeedInSupervision: number;
		supervisionWaitingTime: number;
		fuelStream: number;
		fuelBreakTime: number;
		fuelStreamTime: number;
	};
};
