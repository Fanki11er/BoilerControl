import { Form } from "formik";
import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

type ActiveProps = {
	isActive: boolean;
};

export const FormButtonsWrapper = styled.div`
	margin-top: 20px;
	width: 100%;
	display: grid;
	grid-template-columns: auto auto;
	column-gap: 40px;
	justify-content: center;
`;

export const StyledFormWrapper = styled(Form)`
	width: 600px;
	padding: 70px 80px 50px 80px;
	border: 2px solid ${(props: StyledTheme) => props.theme.colors.lightBlue};
	display: grid;
	grid-template-columns: 100%;
	grid-auto-rows: auto;
	row-gap: 30px;
	justify-items: center;
	border-radius: 15px;
	position: relative;
	border-top: none;
	border-top-right-radius: 0;
	border-top-left-radius: 0;
`;

export const ActiveHeader = styled.div`
	width: ${(props: StyledTheme & ActiveProps) =>
		props.isActive ? "300px" : "312px"};
	height: 60px;
	color: ${(props: StyledTheme) => props.theme.colors.lightBlue};
	margin: 0;
	font-size: 1.8em;
	position: absolute;
	left: -2px;
	top: -60px;
	border: 2px solid ${(props: StyledTheme) => props.theme.colors.lightBlue};
	border-bottom: 2px solid
		${(props: StyledTheme & ActiveProps) =>
			props.isActive ? "transparent" : props.theme.colors.lightBlue};
	border-top-right-radius: ${(props: StyledTheme & ActiveProps) =>
		props.isActive ? "15px" : 0};
	border-top-left-radius: 15px;
	padding: 20px 30px 0px 30px;
	text-align: center;
	z-index: ${(props: StyledTheme & ActiveProps) => (props.isActive ? 2 : 1)};
	background-color: ${(props: StyledTheme) =>
		props.theme.colors.backgroundBlue};
	font-size: 20px;
	transition: all 0.5s;
	pointer-events: ${(props: StyledTheme & ActiveProps) =>
		props.isActive ? "none" : "initial"};

	:hover {
		background-color: ${(props: StyledTheme) =>
			props.theme.colors.transparentGreen};
		color: ${(props: StyledTheme) => props.theme.colors.backgroundBlue};
		font-weight: bold;
		cursor: pointer;
	}
`;

export const InactiveHeader = styled.div`
	width: ${(props: StyledTheme & ActiveProps) =>
		props.isActive ? "300px" : "312px"};
	height: 60px;
	color: ${(props: StyledTheme & ActiveProps) =>
		props.isActive
			? props.theme.colors.lightBlue
			: props.theme.colors.blueGray};
	background-color: ${(props: StyledTheme & ActiveProps) =>
		props.isActive
			? props.theme.colors.backgroundBlue
			: props.theme.colors.darkerBlue};
	margin: 0;
	font-size: 1.8em;
	position: absolute;
	right: -2px;
	top: -60px;
	border: 2px solid ${(props: StyledTheme) => props.theme.colors.lightBlue};
	border-bottom: 2px solid
		${(props: StyledTheme & ActiveProps) =>
			props.isActive ? "transparent" : props.theme.colors.lightBlue};

	border-left: 2px solid
		${(props: StyledTheme & ActiveProps) =>
			props.isActive ? props.theme.colors.lightBlue : "transparent"};
	border-top-right-radius: 15px;
	border-top-left-radius: ${(props: StyledTheme & ActiveProps) =>
		props.isActive ? "15px" : 0};
	border-bottom-left-radius: ${(props: StyledTheme & ActiveProps) =>
		props.isActive ? 0 : "15px"};
	padding: 20px 60px 20px 30px;
	font-size: 20px;
	z-index: ${(props: StyledTheme & ActiveProps) => (props.isActive ? 2 : 1)};
	text-align: end;
	transition: all 0.5s;
	pointer-events: ${(props: StyledTheme & ActiveProps) =>
		props.isActive ? "none" : "initial"};
	:hover {
		background-color: ${(props: StyledTheme) =>
			props.theme.colors.transparentGreen};
		color: ${(props: StyledTheme) => props.theme.colors.backgroundBlue};
		font-weight: bold;
		cursor: pointer;
	}
`;
