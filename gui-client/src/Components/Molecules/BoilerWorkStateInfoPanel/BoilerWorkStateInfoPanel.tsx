import { BoilerStatus } from "../../../Types/types";
import {
	BoilerWorkStateInfoPanelWrapper,
	ColorizedBoilerInfoLabel,
} from "./BoilerWorkStateInfoPanel.styles";

type Props = {
	status: BoilerStatus;
};

const BoilerWorkStateInfoPanel = (props: Props) => {
	const { status } = props;
	return (
		<BoilerWorkStateInfoPanelWrapper>
			<ColorizedBoilerInfoLabel status={status}>
				{status}
			</ColorizedBoilerInfoLabel>
		</BoilerWorkStateInfoPanelWrapper>
	);
};

export default BoilerWorkStateInfoPanel;
