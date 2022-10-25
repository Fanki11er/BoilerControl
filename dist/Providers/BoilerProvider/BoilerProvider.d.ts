import React, { PropsWithChildren } from "react";
import { BoilerInfo } from "../../Class/Boiler/Boiler";
import { BoilerSettings } from "../../Class/BoilerSettings/BoilerSettings";
import { PanelOptions } from "../../Types/types";
export declare const BoilerContext: React.Context<{
    boilerParameters: BoilerStatus;
    handleBoilerControl: (status: PanelOptions) => void;
    handleSettingsChange: (settings: any) => void;
    handleGetBoilerSettings: () => BoilerSettings;
}>;
declare type BoilerStatus = BoilerInfo | null;
declare const BoilerProvider: (props: PropsWithChildren) => JSX.Element;
export default BoilerProvider;
