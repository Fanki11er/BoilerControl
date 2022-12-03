import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const LandingPageViewWrapper = styled.div`
	width: 100vw;
	min-height: 100vh;
	background-color: ${(props: StyledTheme) =>
		props.theme.colors.backgroundBlue};
	display: grid;
	grid-template-columns: 100%;
	grid-auto-rows: auto;
`;

export const LandingPageAppTitle = styled.img`
	width: 1000px;
	display: flex;
	justify-self: center;
	margin-top: 100px;
`;

export const LandingPageButtonsWrapper = styled.div`
	width: fit-content;
	padding: 0 20px;
	display: grid;
	grid-template-columns: auto auto;
	column-gap: 60px;
	justify-self: center;
`;
