import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const BoilersListWrapper = styled.ul`
	width: 350px;
	height: 400px;
	list-style: none;
	padding: 40px;
	border: 2px solid ${(props: StyledTheme) => props.theme.colors.green};
	border-radius: 15px;
	display: grid;
	grid-auto-rows: 50px;
	grid-template-columns: 100%;
	row-gap: 15px;
	justify-items: center;
`;

export const BoilersListElement = styled.li`
	width: 100%;
	height: 100%;
	border: 2px solid ${(props: StyledTheme) => props.theme.colors.lightBlue};
	border-radius: 15px;
	color: ${(props: StyledTheme) => props.theme.colors.lightBlue};
	display: flex;
	padding: 0 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.5s;
	cursor: pointer;
	:hover,
	:focus {
		background-color: ${(props: StyledTheme) => props.theme.colors.lightBlue};
		color: ${(props: StyledTheme) => props.theme.colors.backgroundBlue};
		font-weight: bold;
	}
`;

export const BoilersListHeader = styled.h2`
	font-size: 1.8em;
	color: ${(props: StyledTheme) => props.theme.colors.green};
`;

export const GreenBoilersListElement = styled(BoilersListElement)`
	text-decoration: none;
	border: 2px solid ${(props: StyledTheme) => props.theme.colors.green};
	color: ${(props: StyledTheme) => props.theme.colors.green};
	:hover,
	:focus {
		background-color: ${(props: StyledTheme) => props.theme.colors.green};
		color: ${(props: StyledTheme) => props.theme.colors.backgroundBlue};
		font-weight: bold;
	}
`;
