import React, { PropsWithChildren } from "react";
import { BoilerInfo } from "../../Class/Boiler/Boiler";
import { PanelOptions } from "../../Types/types";
export declare const BoilerContext: React.Context<{
    boilerParameters: BoilerStatus;
    handleBoilerControl: (status: PanelOptions) => void;
    handleSettingsChange: (settings: any) => void;
    handleGetBoilerSettings: () => Promise<any> | null;
    handleSelectBoiler: (boilerId: string) => void;
    error: string;
}>;
declare type BoilerStatus = BoilerInfo | null;
declare const BoilerProvider: (props: PropsWithChildren) => JSX.Element;
export default BoilerProvider;
