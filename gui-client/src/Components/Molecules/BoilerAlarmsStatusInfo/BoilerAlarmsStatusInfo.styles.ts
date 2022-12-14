import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";
import { BoilerInfoPanelWrapper } from "../../Atoms/BoilerInfoPanelWrapper/BoilerInfoPanelWrapper";
import { BoilerInfoLabel } from "../DefaultBoilerInfoPanel/DefaultBoilerInfoPanel.styles";

type StatusProps = {
	alarm: string;
};

export const BoilerAlarmsStatusPanelWrapper = styled(BoilerInfoPanelWrapper)`
	grid-template-rows: 100%;
	border: 2px solid
		${(props: StyledTheme & StatusProps) =>
			props.alarm ? props.theme.colors.red : props.theme.colors.green};
`;

export const ColorizedAlarmsBoilerInfoLabel = styled(BoilerInfoLabel)`
	border: none;
	font-size: ${(props: StyledTheme) =>
		props.theme.fontSizes.mediumDevices.large};
	color: ${(props: StyledTheme & StatusProps) =>
		props.alarm ? props.theme.colors.red : props.theme.colors.green};
`;
