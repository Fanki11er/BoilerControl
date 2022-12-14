import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";
import { BoilerStatus } from "../../../Types/types";
import { BoilerInfoPanelWrapper } from "../../Atoms/BoilerInfoPanelWrapper/BoilerInfoPanelWrapper";
import { BoilerInfoLabel } from "../DefaultBoilerInfoPanel/DefaultBoilerInfoPanel.styles";

type StatusProps = {
	status: BoilerStatus;
};

const figureColor = (
	status: BoilerStatus,
	stopped: string,
	working: string,
	idle: string
) => {
	switch (status) {
		case "Stopped": {
			return stopped;
		}
		case "Working": {
			return working;
		}
		case "Idle": {
			return idle;
		}
		default: {
			return stopped;
		}
	}
};

export const BoilerWorkStateInfoPanelWrapper = styled(BoilerInfoPanelWrapper)`
	grid-template-rows: 100%;
`;

export const ColorizedBoilerInfoLabel = styled(BoilerInfoLabel)`
	border: none;
	font-size: ${(props: StyledTheme) =>
		props.theme.fontSizes.mediumDevices.veryLarge};
	color: ${(props: StyledTheme & StatusProps) =>
		figureColor(
			props.status,
			props.theme.colors.lightBlue,
			props.theme.colors.green,
			props.theme.colors.lightYellow
		)};
`;
