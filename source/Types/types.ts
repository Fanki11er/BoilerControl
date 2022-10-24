export type Routes = "/" | "/Login" | "/Register" | "/Main" | "/BoilerInfo";

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
