import { BrowserRouter, Route, Routes } from "react-router-dom";
import BoilerInfo from "./Components/Organism/BoilerInfo/BoilerInfo";
import UserProvider from "./Providers/UserProvider/UserProvider";
import { routes } from "./Routes/routes";
import MainTemplate from "./Template/MainTemplate/MainTemplate";
import AuthView from "./Views/AuthView/AuthView";
import BoilersListView from "./Views/BoilersListView/BoilersListview";
import LandingPageView from "./Views/LandingPageView/LandingPageView";
import LoginView from "./Views/LoginView/LoginView";
import RegistrationView from "./Views/RegistrationView/RegistrationView";
import SettingsView from "./Views/SettingsView/SettingsView";
const App = () => {
	const { index, register, login, boilersList, controlPanel, settings } =
		routes;
	return (
		<UserProvider>
			<BrowserRouter>
				<Routes>
					<Route index path={index} element={<LandingPageView />} />
					<Route element={<MainTemplate />}>
						<Route path={register} element={<RegistrationView />} />
						<Route path={login} element={<LoginView />} />
						<Route element={<AuthView />}>
							<Route path={boilersList} element={<BoilersListView />} />
							<Route path={controlPanel} element={<BoilerInfo />} />
							<Route path={settings} element={<SettingsView />} />
						</Route>
					</Route>
					<Route path={"*"} element={<LandingPageView />} />
				</Routes>
			</BrowserRouter>
		</UserProvider>
	);
};

export default App;
