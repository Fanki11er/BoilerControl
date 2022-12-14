import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const BoilerInfoPanelWrapper = styled.div`
	width: 280px;
	height: 200px;
	background-color: ${(props: StyledTheme) => props.theme.colors.darkBlue};
	border-radius: 10px;
	display: grid;
	row-gap: 10px;
	grid-template-columns: 100%;
	grid-template-rows: 100px 50px;
	justify-items: center;
	align-items: center;
	padding: 15px 15px;
`;
