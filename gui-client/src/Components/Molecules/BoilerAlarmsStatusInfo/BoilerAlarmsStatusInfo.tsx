import {
	BoilerAlarmsStatusPanelWrapper,
	ColorizedAlarmsBoilerInfoLabel,
} from "./BoilerAlarmsStatusInfo.styles";

type Props = {
	alarm: string;
};

const BoilerAlarmsStateInfoPanel = (props: Props) => {
	const { alarm } = props;
	return (
		<BoilerAlarmsStatusPanelWrapper alarm={alarm}>
			<ColorizedAlarmsBoilerInfoLabel alarm={alarm}>
				{alarm ? alarm : "NO ALARMS"}
			</ColorizedAlarmsBoilerInfoLabel>
		</BoilerAlarmsStatusPanelWrapper>
	);
};

export default BoilerAlarmsStateInfoPanel;
