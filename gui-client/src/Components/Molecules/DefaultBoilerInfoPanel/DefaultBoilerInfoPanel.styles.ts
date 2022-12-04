import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const BigNumber = styled.span`
	font-size: 5em;
	font-weight: bold;
	color: ${(props: StyledTheme) => props.theme.colors.green};
`;

export const BoilerInfoLabel = styled.span`
	width: 100%;
	color: ${(props: StyledTheme) => props.theme.colors.lightBlue};
	display: flex;
	font-weight: bold;
	font-size: 1.4em;
	justify-content: center;
	align-items: center;
	padding-top: 10px;
	border-top: 2px solid ${(props: StyledTheme) => props.theme.colors.lightBlue};
`;
