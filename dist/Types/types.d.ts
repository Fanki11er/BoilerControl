export declare type Routes = "/" | "/Login" | "/Register" | "/Main" | "/BoilerInfo";
export declare type Route = {
    currentRoute: Routes;
    payload?: string;
};
export declare type BoilerStatus = "Stopped" | "Working" | "Idle";
export declare type PanelOptions = "STOP" | "START" | "RESET" | "REFUEL" | "SETTINGS" | "EXIT";
