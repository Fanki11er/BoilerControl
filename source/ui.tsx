import React, { useCallback, useContext } from "react";
import BoilerInfoView from "./Views/BoilerInfoView/BoilerInfoView";

import MainPage from "./Views/MainPage/MainPage";

import { RoutesContext } from "./Providers/RoutesProvider/RoutesProvider";
import { Route } from "./Types/types";
import LoginForm from "./Views/LoginForm/LoginForm";
import RegisterForm from "./Views/RegisterForm/RegisterForm";

const App = () => {
	const { currentRoute } = useContext(RoutesContext);

	const switchComponents = useCallback((currentRoute: Route) => {
		switch (currentRoute.currentRoute) {
			case "/Login": {
				return <LoginForm />;
			}
			case "/Register": {
				return <RegisterForm />;
			}
			case "/Main": {
				return <MainPage />;
			}
			case "/BoilerInfo": {
				return <BoilerInfoView id={currentRoute.payload!} />;
			}
			default: {
				return <RegisterForm />;
			}
		}
	}, []);
	return switchComponents(currentRoute);
};

export default App;
