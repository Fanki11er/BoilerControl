import React, {
	createContext,
	PropsWithChildren,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";
import { Boiler, BoilerInfo } from "../../Class/Boiler/Boiler";
import { BoilerSettings } from "../../Class/BoilerSettings/BoilerSettings";
import { PanelOptions } from "../../Types/types";

export const BoilerContext = createContext({
	boilerParameters: null as BoilerStatus,
	handleBoilerControl: (status: PanelOptions) => {
		status;
	},
	handleSettingsChange: (settings: any) => {
		settings;
	},
	handleGetBoilerSettings: (): BoilerSettings => {
		return {} as BoilerSettings;
	},
});

type BoilerStatus = BoilerInfo | null;

const BoilerProvider = (props: PropsWithChildren) => {
	const [boilerParameters, setBoilerParameters] = useState<BoilerStatus>(null);

	const { current: boiler } = useRef(new Boiler("B1"));

	const handleChangeParameters = useCallback(() => {
		setBoilerParameters(boiler.getBoilerParameters());
	}, []);

	const handleBoilerControl = useCallback((status: PanelOptions) => {
		if (boiler && status === "RESET") {
			boiler.resetAlarms();
		} else if (boiler) {
			boiler.changeStatus(status);
		}
	}, []);

	const handleSettingsChange = useCallback((settings: any) => {
		boiler.setBoilerSettings(settings);
	}, []);

	const handleGetBoilerSettings = useCallback(() => {
		return boiler.getBoilerSettings();
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			handleChangeParameters();
		}, 500);

		return () => {
			return clearInterval(interval);
		};
	}, []);

	const context = {
		boilerParameters,
		handleSettingsChange,
		handleBoilerControl,
		handleGetBoilerSettings,
	};

	return (
		<BoilerContext.Provider value={context}>
			{props.children}
		</BoilerContext.Provider>
	);
};

export default BoilerProvider;
