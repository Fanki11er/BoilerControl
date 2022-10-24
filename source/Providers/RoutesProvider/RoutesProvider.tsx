import React, {
	createContext,
	PropsWithChildren,
	useCallback,
	useState,
} from "react";
import { Route, Routes } from "../../Types/types";

export const RoutesContext = createContext({
	currentRoute: { currentRoute: "/", payload: "" } as Route,
	handleChangeRoute: (route: Routes, payload?: string) => {
		route;
		payload;
	},
});

const RouterProvider = (props: PropsWithChildren) => {
	const [currentRoute, setCurrentRoute] = useState<Route>({
		currentRoute: "/Register",
		payload: "",
	});

	const handleChangeRoute = useCallback((route: Routes, payload?: string) => {
		setCurrentRoute({ currentRoute: route, payload });
	}, []);

	const context = {
		currentRoute,
		handleChangeRoute,
	};

	return (
		<RoutesContext.Provider value={context}>
			{props.children}
		</RoutesContext.Provider>
	);
};

export default RouterProvider;
