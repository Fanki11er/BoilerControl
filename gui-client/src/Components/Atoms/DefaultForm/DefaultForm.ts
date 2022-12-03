import styled from "styled-components";
import { Form } from "formik";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const DefaultFormWrapper = styled(Form)`
	width: 600px;
	padding: 50px 80px;
	border: 2px solid ${(props: StyledTheme) => props.theme.colors.green};
	display: grid;
	grid-template-columns: 100%;
	grid-auto-rows: auto;
	row-gap: 45px;
	justify-items: center;
	border-radius: 15px;
`;

export const DefaultFormHeader = styled.h2`
	width: fit-content;
	color: ${(props: StyledTheme) => props.theme.colors.lightBlue};
	margin: 0;
	font-size: 1.8em;
	margin-bottom: 20px;
`;
