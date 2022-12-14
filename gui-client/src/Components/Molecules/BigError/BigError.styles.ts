import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const BigErrorWrapper = styled.div`
	width: fit-content;
	padding: 20px;
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: 250px 40px;
	row-gap: 50px;
	justify-items: center;
	align-items: center;
`;

export const BigErrorImg = styled.img`
	width: 100%;
	height: 100%;
`;

export const BigErrorContent = styled.span`
	width: fit-content;
	height: 100%;
	padding: 0 25px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props: StyledTheme) => props.theme.colors.pink};
	color: ${(props: StyledTheme) => props.theme.colors.red};
	border-radius: 10px;
	font-size: ${(props: StyledTheme) =>
		props.theme.fontSizes.mediumDevices.medium};
`;
