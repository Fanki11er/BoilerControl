import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const DefaultViewWrapper = styled.div`
	width: 100%;
	min-height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${(props: StyledTheme) =>
		props.theme.colors.backgroundBlue};
`;
