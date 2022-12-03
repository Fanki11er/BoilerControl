import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./Routes/routes";
import LandingPageView from "./Views/LandingPageView/LandingPageView";
import RegistrationView from "./Views/RegistrationView/RegistrationView";
const App = () => {
	const { index, register } = routes;
	return (
		<BrowserRouter>
			<Routes>
				<Route index path={index} element={<LandingPageView />} />
				<Route path={register} element={<RegistrationView />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
