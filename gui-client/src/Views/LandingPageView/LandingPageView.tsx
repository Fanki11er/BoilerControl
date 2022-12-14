import { Link } from "react-router-dom";
import AppTitleImage from "../../Assets/AppTitle.svg";
import { BlueButton } from "../../Components/Atoms/Buttons/Buttons";
import { routes } from "../../Routes/routes";
import {
	LandingPageAppTitle,
	LandingPageButtonsWrapper,
	LandingPageViewWrapper,
} from "./LandingPageView.styles";

const LandingPageView = () => {
	const { login, register } = routes;
	return (
		<LandingPageViewWrapper>
			<LandingPageAppTitle src={AppTitleImage} alt={"Application title"} />
			<LandingPageButtonsWrapper>
				<BlueButton as={Link} to={login}>
					Login
				</BlueButton>
				<BlueButton as={Link} to={register}>
					Register
				</BlueButton>
			</LandingPageButtonsWrapper>
		</LandingPageViewWrapper>
	);
};

export default LandingPageView;
