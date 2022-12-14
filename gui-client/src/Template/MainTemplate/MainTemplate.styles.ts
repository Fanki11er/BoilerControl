import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const MainTemplateWrapper = styled.div`
	width: 100vw;
	min-height: 100vh;
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: auto 1fr;
	justify-content: center;
	background-color: ${(props: StyledTheme) =>
		props.theme.colors.backgroundBlue};
`;
