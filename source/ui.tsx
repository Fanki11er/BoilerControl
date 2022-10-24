import React, { useCallback, useContext } from "react";
import BoilerInfoView from "./Components/BoilerInfoView/BoilerInfoView";
import LoginForm from "./Components/LoginForm/LoginForm";
import MainPage from "./Components/MainPage/MainPage";
//import LoginForm from "./Components/LoginForm/LoginForm";
import RegisterForm from "./Components/RegisterForm/RegisterForm";
import { RoutesContext } from "./Providers/RoutesProvider/RoutesProvider";
import { Route } from "./Types/types";

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
