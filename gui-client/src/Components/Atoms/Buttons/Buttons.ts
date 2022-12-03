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
	font-size: 1.2em;
	transition: all 0.5s;
	:hover {
		color: ${(props: StyledTheme) => props.theme.colors.backgroundBlue};
		background-color: ${(props: StyledTheme) => props.theme.colors.lightBlue};
	}
`;
