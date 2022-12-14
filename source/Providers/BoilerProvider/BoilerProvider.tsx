import React, {
	createContext,
	PropsWithChildren,
	useEffect,
	useState,
} from "react";

import { BoilerInfo, BoilerSettings, PanelOptions } from "../../Types/types";
//@ts-ignore
import { Axios } from "axios";
const axios = require("axios") as Axios;

export const BoilerContext = createContext({
	boilerParameters: null as BoilerStatus,
	handleBoilerControl: (status: PanelOptions) => {
		status;
	},
	handleSettingsChange: (settings: any) => {
		settings;
	},
	handleGetBoilerSettings: (): Promise<any> | null => {
		return null;
	},
	handleSelectBoiler: (boilerId: string) => {
		boilerId;
	},
	handleGetBoilersList: (userId: number): Promise<any> | null => {
		userId;
		return null;
	},

	handleAddBoiler: (userId: number, boilerId: string): void => {
		userId;
		boilerId;
	},
	error: "",
});

type BoilerStatus = BoilerInfo | null;

const BoilerProvider = (props: PropsWithChildren) => {
	const [selectedBoilerId, setSelectedBoilerId] = useState<string | null>(null);
	const [boilerParameters, setBoilerParameters] = useState<BoilerStatus>(null);
	const [error, setError] = useState("");

	const handleSelectBoiler = (boilerId: string) => {
		setBoilerParameters(null);
		setSelectedBoilerId(boilerId);
	};

	const handleChangeParameters = () => {
		if (selectedBoilerId) {
			axios
				.post("http://localhost:8000/GetParams", {
					id: selectedBoilerId,
				})
				.then((response: any) => {
					const boilerParameters = response.data as BoilerStatus;

					setBoilerParameters(boilerParameters);
				})
				.catch(() => setError("Error loading params"));
			//! Add Error info
		}
	};

	const handleBoilerControl = (status: PanelOptions) => {
		axios
			.post("http://localhost:8000/SetStatus", {
				status,
				id: selectedBoilerId,
			})
			.then(() => {})
			.catch(() => setError("Error setting status"));
		//! Add Error info
	};

	const handleSettingsChange = (settings: any) => {
		//boiler.setBoilerSettings(settings);
		axios
			.post("http://localhost:8000/SetSettings", {
				id: selectedBoilerId,
				settings,
			})
			.then(() => {})
			.catch(() => setError("Setting new settings error"));
		//! Add Error info
	};

	const handleGetBoilerSettings = async () => {
		return await axios
			.post("http://localhost:8000/GetSettings", {
				id: selectedBoilerId,
			})
			.then((response: any) => {
				return response.data as BoilerSettings;
			})
			.catch(() => {
				setError("Get settings error");
			});
	};

	const handleGetBoilersList = async (userId: number) => {
		return await axios
			.post("http://localhost:8000/GetBoilersList", {
				id: userId,
			})
			.then((response: any) => {
				return response.data as string[];
			})
			.catch(() => {
				setError("Get boilers list error");
			});
	};

	const handleAddBoiler = (userId: number, boilerId: string) => {
		axios
			.post("http://localhost:8000/AddBoiler", {
				id: userId,
				boilerId,
			})
			.catch(() => {
				setError("Get boilers list error");
			});
	};

	useEffect(() => {
		let interval: NodeJS.Timer;
		if (selectedBoilerId) {
			interval = setInterval(() => {
				handleChangeParameters();
			}, 500);
		}

		return () => {
			return clearInterval(interval);
		};
	}, [selectedBoilerId]);

	const context = {
		boilerParameters,
		handleSettingsChange,
		handleBoilerControl,
		handleGetBoilerSettings,
		handleSelectBoiler,
		handleGetBoilersList,
		handleAddBoiler,
		error,
	};

	return (
		<BoilerContext.Provider value={context}>
			{props.children}
		</BoilerContext.Provider>
	);
};

export default BoilerProvider;
