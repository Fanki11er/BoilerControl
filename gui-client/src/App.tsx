import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProvider from "./Providers/UserProvider/UserProvider";
import { routes } from "./Routes/routes";
import MainTemplate from "./Template/MainTemplate/MainTemplate";
import AuthView from "./Views/AuthView/AuthView";
import LandingPageView from "./Views/LandingPageView/LandingPageView";
import LoginView from "./Views/LoginView/LoginView";
import RegistrationView from "./Views/RegistrationView/RegistrationView";
const App = () => {
	const { index, register, login } = routes;
	return (
		<UserProvider>
			<BrowserRouter>
				<Routes>
					<Route index path={index} element={<LandingPageView />} />
					<Route element={<MainTemplate />}>
						<Route path={register} element={<RegistrationView />} />
						<Route path={login} element={<LoginView />} />
						<Route element={<AuthView />}></Route>
					</Route>
					<Route path={"*"} element={<LandingPageView />} />
				</Routes>
			</BrowserRouter>
		</UserProvider>
	);
};

export default App;
