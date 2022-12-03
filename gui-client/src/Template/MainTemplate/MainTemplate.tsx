import { Outlet } from "react-router-dom";
import Navigation from "../../Components/Molecules/Navigation/Navigation";
import { MainTemplateWrapper } from "./MainTemplate.styles";

const MainTemplate = () => {
	return (
		<MainTemplateWrapper>
			<Navigation />
			<Outlet />
		</MainTemplateWrapper>
	);
};

export default MainTemplate;
