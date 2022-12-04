import { AxiosResponse } from "axios";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import axios from "../../Api/axios";
import { apiEndpoints } from "../../Api/endpoints";

import { BoilerInfo, BoilerSettings, PanelOptions } from "../../Types/types";

export const BoilerContext = createContext({
	boilerParameters: null as BoilerStatus,
	handleBoilerControl: (status: PanelOptions) => {},
	handleSettingsChange: (settings: any) => {},
	handleGetBoilerSettings: (): Promise<any> | null => {
		return null;
	},
	handleSelectBoiler: (boilerId: string) => {},
	handleGetBoilersList: (userId: number): Promise<any> | null => {
		return null;
	},

	handleAddBoiler: (userId: number, boilerId: string): void => {},
	error: "",
});

type BoilerStatus = BoilerInfo | null;

const BoilerProvider = (props: PropsWithChildren) => {
	const {
		getParams,
		setStatus,
		setSettings,
		getSettings,
		getBoilersList,
		addBoiler,
	} = apiEndpoints;
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
				.post(getParams, {
					id: selectedBoilerId,
				})
				.then((response: AxiosResponse) => {
					const boilerParameters = response.data as BoilerStatus;

					setBoilerParameters(boilerParameters);
				})
				.catch(() => setError("Error loading params"));
			//! Add Error info
		}
	};

	const handleBoilerControl = (status: PanelOptions) => {
		axios
			.post(setStatus, {
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
			.post(setSettings, {
				id: selectedBoilerId,
				settings,
			})
			.then(() => {})
			.catch(() => setError("Setting new settings error"));
		//! Add Error info
	};

	const handleGetBoilerSettings = async () => {
		return await axios
			.post(getSettings, {
				id: selectedBoilerId,
			})
			.then((response: AxiosResponse) => {
				return response.data as BoilerSettings;
			})
			.catch(() => {
				setError("Get settings error");
			});
	};

	const handleGetBoilersList = async (userId: number) => {
		return await axios
			.post(getBoilersList, {
				id: userId,
			})
			.then((response: AxiosResponse) => {
				return response.data as string[];
			})
			.catch(() => {
				setError("Get boilers list error");
			});
	};

	const handleAddBoiler = (userId: number, boilerId: string) => {
		axios
			.post(addBoiler, {
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
