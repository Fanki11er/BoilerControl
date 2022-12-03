import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const DefaultViewWrapper = styled.div`
	width: 100vw;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props: StyledTheme) =>
		props.theme.colors.backgroundBlue};
`;
