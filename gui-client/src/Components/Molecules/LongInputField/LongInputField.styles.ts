import { Field } from "formik";
import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const LongInputFieldWrapper = styled.div`
	width: 100%;
	height: auto;
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: auto auto;
	row-gap: 10px;
`;

export const LongFieldLabel = styled.label`
	display: flex;
	justify-self: flex-start;
	color: ${(props: StyledTheme) => props.theme.colors.lightBlue};
	font-size: ${(props: StyledTheme) =>
		props.theme.fontSizes.mediumDevices.medium};
`;

export const LongFieldInput = styled(Field)`
	outline: none;
	border: 2px solid ${(props: StyledTheme) => props.theme.colors.green};
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
