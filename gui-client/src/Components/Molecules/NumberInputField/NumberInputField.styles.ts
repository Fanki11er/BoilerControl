import { Field } from "formik";
import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const NumberInputFieldWrapper = styled.div`
	width: 100%;
	height: auto;
	display: grid;
	grid-template-columns: 250px 100px;
	grid-template-rows: 100%;
	column-gap: 10px;
	align-items: center;
`;

export const NumberFieldLabel = styled.label`
	display: flex;
	justify-self: flex-start;
	color: ${(props: StyledTheme) => props.theme.colors.green};
	font-size: ${(props: StyledTheme) =>
		props.theme.fontSizes.mediumDevices.medium};
`;

export const NumberFieldInput = styled(Field)`
	width: 100px;
	outline: none;
	border: 2px solid ${(props: StyledTheme) => props.theme.colors.lightBlue};
	border-radius: 10px;
	padding: 10px 20px;
	background-color: transparent;
	font-size: ${(props: StyledTheme) =>
		props.theme.fontSizes.mediumDevices.normal};
	caret-color: ${(props: StyledTheme) => props.theme.colors.orange};
	color: ${(props: StyledTheme) => props.theme.colors.green};
	transition: all 0.5s;
	::placeholder {
		color: ${(props: StyledTheme) => props.theme.colors.transparentGreen};
	}
	:hover,
	:focus {
		box-shadow: 0px 0px 5px 5px
			${(props: StyledTheme) => props.theme.colors.transparentGreen};
	}
`;
