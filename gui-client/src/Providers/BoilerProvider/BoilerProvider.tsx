import { AxiosResponse } from "axios";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import axios from "../../Api/axios";
import { apiEndpoints } from "../../Api/endpoints";
import useUser from "../../Hooks/useUser";

import {
	BoilerInfo,
	BoilerSettings,
	FlatBoilerSettings,
	PanelOptions,
} from "../../Types/types";

export const BoilerContext = createContext({
	boilerParameters: null as BoilerStatus,
	handleBoilerControl: (status: PanelOptions) => {},
	handleSettingsChange: (settings: FlatBoilerSettings) => {},
	handleGetBoilerSettings: (): Promise<any> | null => {
		return null;
	},
	handleSelectBoiler: (boilerId: string | null) => {},
	handleGetBoilersList: (userId: number): Promise<any> | null => {
		return null;
	},

	handleAddBoiler: (userId: number, boilerId: string): void => {},
	error: "",
	isLoading: false,
	boilersList: [] as string[],
	selectedBoilerId: "" as string | null,
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
	const { user } = useUser();
	const [boilersList, setBoilersList] = useState<string[]>([]);
	const [selectedBoilerId, setSelectedBoilerId] = useState<string | null>(null);
	const [boilerParameters, setBoilerParameters] = useState<BoilerStatus>(null);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		user && handleGetBoilersList(user?.userId);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);

	const handleSelectBoiler = (boilerId: string | null) => {
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
					setIsLoading(false);

					setBoilerParameters(boilerParameters);
				})
				.catch(() => {
					setError("Error loading params");
					setIsLoading(false);
				});
			//! Add Error info
		}
	};

	const handleBoilerControl = (status: PanelOptions) => {
		setIsLoading(true);
		axios
			.post(setStatus, {
				status,
				id: selectedBoilerId,
			})
			.then(() => {})
			.catch(() => setError("Error setting status"))
			.finally(() => setIsLoading(false));
	};

	const handleSettingsChange = (settings: FlatBoilerSettings) => {
		setIsLoading(true);
		axios
			.post(setSettings, {
				id: selectedBoilerId,
				settings,
			})
			.then(() => {})
			.catch(() => setError("Setting new settings error"))
			.finally(() => setIsLoading(false));
	};

	const handleGetBoilerSettings = async () => {
		setIsLoading(true);
		return await axios
			.post(getSettings, {
				id: selectedBoilerId,
			})
			.then((response: AxiosResponse) => {
				return response.data as BoilerSettings;
			})
			.catch(() => {
				setError("Get settings error");
			})
			.finally(() => setIsLoading(false));
	};

	/*const handleGetBoilersList = async (userId: number) => {
		setIsLoading(true);
		return await axios
			.post(getBoilersList, {
				id: userId,
			})
			.then((response: AxiosResponse) => {
				return response.data as string[];
			})
			.catch(() => {
				setError("Get boilers list error");
			})
			.finally(() => setIsLoading(false));
	};*/

	const handleGetBoilersList = async (userId: number) => {
		setIsLoading(true);
		await axios
			.post(getBoilersList, {
				id: userId,
			})
			.then((response: AxiosResponse) => {
				const data = response.data as string[];
				setBoilersList(data);
			})
			.catch(() => {
				setError("Get boilers list error");
			})
			.finally(() => setIsLoading(false));
	};

	const handleAddBoiler = (userId: number, boilerId: string) => {
		setIsLoading(true);
		axios
			.post(addBoiler, {
				id: userId,
				boilerId,
			})
			.catch(() => {
				setError("Get boilers list error");
			})
			.finally(() => setIsLoading(false));
	};

	useEffect(() => {
		let interval: NodeJS.Timer;

		if (selectedBoilerId) {
			setIsLoading(true);
			interval = setInterval(() => {
				handleChangeParameters();
			}, 500);
		}

		return () => {
			return clearInterval(interval);
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
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
		isLoading,
		boilersList,
		selectedBoilerId,
	};

	return (
		<BoilerContext.Provider value={context}>
			{props.children}
		</BoilerContext.Provider>
	);
};

export default BoilerProvider;
