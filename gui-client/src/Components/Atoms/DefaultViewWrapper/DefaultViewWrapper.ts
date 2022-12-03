import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const DefaultViewWrapper = styled.div`
	width: 100%auto;
	min-height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props: StyledTheme) =>
		props.theme.colors.backgroundBlue};
`;
