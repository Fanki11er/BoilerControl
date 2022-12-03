import AppTitleImage from "../../Assets/AppTitle.svg";
import { BlueButton } from "../../Components/Atoms/Buttons/Buttons";
import {
	LandingPageAppTitle,
	LandingPageButtonsWrapper,
	LandingPageViewWrapper,
} from "./LandingPageView.styles";

const LandingPageView = () => {
	return (
		<LandingPageViewWrapper>
			<LandingPageAppTitle src={AppTitleImage} alt={"Application title"} />
			<LandingPageButtonsWrapper>
				<BlueButton>Login</BlueButton>
				<BlueButton>Register</BlueButton>
			</LandingPageButtonsWrapper>
		</LandingPageViewWrapper>
	);
};

export default LandingPageView;
