import { Link, useLocation } from "react-router-dom";
import { routes } from "../../../Routes/routes";
import { YellowMediumButton } from "../../Atoms/Buttons/Buttons";
import { NavigationWrapper } from "./Navigation.styles";

const Navigation = () => {
	const { login, register } = routes;
	const location = useLocation();
	return (
		<NavigationWrapper>
			{location.pathname === register && (
				<YellowMediumButton as={Link} to={login}>
					Login
				</YellowMediumButton>
			)}
			{location.pathname === login && (
				<YellowMediumButton as={Link} to={register}>
					Register
				</YellowMediumButton>
			)}
		</NavigationWrapper>
	);
};

export default Navigation;
