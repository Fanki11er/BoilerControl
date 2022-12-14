import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const BigNumber = styled.span`
	font-size: ${(props: StyledTheme) =>
		props.theme.fontSizes.mediumDevices.enormous};
	font-weight: bold;
	color: ${(props: StyledTheme) => props.theme.colors.green};
`;

export const BoilerInfoLabel = styled.span`
	width: 100%;
	color: ${(props: StyledTheme) => props.theme.colors.lightBlue};
	display: flex;
	font-weight: bold;
	font-size: ${(props: StyledTheme) =>
		props.theme.fontSizes.mediumDevices.mediumLarge};
	justify-content: center;
	align-items: center;
	padding-top: 10px;
	border-top: 2px solid ${(props: StyledTheme) => props.theme.colors.lightBlue};
`;
