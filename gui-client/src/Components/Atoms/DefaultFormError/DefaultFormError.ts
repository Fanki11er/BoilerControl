import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const DefaultFormError = styled.span`
	width: 100%;
	padding: 10px 25px;
	border-radius: 10px;
	color: ${(props: StyledTheme) => props.theme.colors.red};
	background-color: ${(props: StyledTheme) => props.theme.colors.pink};
	font-weight: bold;
	text-align: center;
`;
