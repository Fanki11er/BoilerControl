export declare type Routes = "/" | "/Login" | "/Register" | "/Main" | "/BoilerInfo" | "/Settings" | "/AddBoiler";
export declare type Route = {
    currentRoute: Routes;
    payload?: string;
};
export declare type BoilerStatus = "Stopped" | "Working" | "Idle";
export declare type PanelOptions = "STOP" | "START" | "RESET" | "REFUEL" | "SETTINGS" | "EXIT";
export declare type User = {
    userName: string;
    userId: number;
};
export declare type BoilerInfo = {
    currentTemperature: number;
    currentFanSpeed: number;
    currentFuelLevel: number;
    currentOutsideTemperature: number;
    currentFuelStream: number;
    alarm: string;
    currentStatus: BoilerStatus;
};
export declare type BoilerSettings = {
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
