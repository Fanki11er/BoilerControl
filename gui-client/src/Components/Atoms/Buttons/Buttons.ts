import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const BlueButton = styled.button`
	outline: none;
	background-color: transparent;
	border: 2px solid ${(props: StyledTheme) => props.theme.colors.lightBlue};
	color: ${(props: StyledTheme) => props.theme.colors.lightBlue};
	border-radius: 10px;
	width: 160px;
	height: 50px;
	font-size: ${(props: StyledTheme) =>
		props.theme.fontSizes.mediumDevices.medium};
	transition: all 0.5s;
	cursor: pointer;
	:hover {
		color: ${(props: StyledTheme) => props.theme.colors.backgroundBlue};
		background-color: ${(props: StyledTheme) => props.theme.colors.lightBlue};
		font-weight: bold;
	}
	text-decoration: none;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const GreenMediumButton = styled(BlueButton)`
	font-size: ${(props: StyledTheme) =>
		props.theme.fontSizes.mediumDevices.normal};
	width: 140px;
	height: 40px;
	border: 2px solid ${(props: StyledTheme) => props.theme.colors.green};
	color: ${(props: StyledTheme) => props.theme.colors.green};

	:hover {
		color: ${(props: StyledTheme) => props.theme.colors.backgroundBlue};
		background-color: ${(props: StyledTheme) => props.theme.colors.green};
	}
`;

export const YellowMediumButton = styled(GreenMediumButton)`
	border: 2px solid ${(props: StyledTheme) => props.theme.colors.lightYellow};
	color: ${(props: StyledTheme) => props.theme.colors.lightYellow};

	:hover {
		color: ${(props: StyledTheme) => props.theme.colors.backgroundBlue};
		background-color: ${(props: StyledTheme) => props.theme.colors.lightYellow};
	}
`;

export const MenuPanelButton = styled.button`
	display: flex;
	width: 100%;
	color: ${(props: StyledTheme) => props.theme.colors.lightBlue};
	font-size: ${(props: StyledTheme) =>
		props.theme.fontSizes.mediumDevices.medium};
	justify-content: center;
	align-items: center;
	outline: none;
	text-decoration: none;
	background-color: transparent;
	border: none;
	transition: all 0.5s;
	padding: 2px;
	border-radius: 8px;
	font-family: Montserrat;

	:hover,
	:focus {
		color: ${(props: StyledTheme) => props.theme.colors.green};
		cursor: pointer;
		background-color: ${(props: StyledTheme) =>
			props.theme.colors.backgroundBlue};
		font-weight: bold;
	}
`;
