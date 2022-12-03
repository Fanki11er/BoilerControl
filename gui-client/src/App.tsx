import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./Routes/routes";
import LandingPageView from "./Views/LandingPageView/LandingPageView";
const App = () => {
	const { index } = routes;
	return (
		<BrowserRouter>
			<Routes>
				<Route index path={index} element={<LandingPageView />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
