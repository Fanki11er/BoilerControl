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
