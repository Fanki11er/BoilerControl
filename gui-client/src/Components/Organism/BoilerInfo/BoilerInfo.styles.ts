import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const BoilerInfoWrapper = styled.section`
	width: 88%;
	min-height: 80vh;
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: 50px auto;
	row-gap: 20px;
	justify-items: center;
	justify-self: center;
`;

export const BoilerInfoHeader = styled.h2`
	width: fit-content;
	display: flex;
	justify-self: flex-start;
	font-size: 1.6em;
	color: ${(props: StyledTheme) => props.theme.colors.green};
	margin: 0;
	align-items: center;
`;

export const BoilersInfoPanelsWrapper = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	row-gap: 30px;
	column-gap: 30px;
	flex-flow: wrap row;
	border-radius: 15px;
	padding: 50px;
	justify-content: center;
`;
