import { BoilerInfoPanelWrapper } from "../../Atoms/BoilerInfoPanelWrapper/BoilerInfoPanelWrapper";
import { BigNumber, BoilerInfoLabel } from "./DefaultBoilerInfoPanel.styles";
type Props = {
	label: string;
	value: number;
	units?: string;
};

const DefaultBoilerInfoPanel = (props: Props) => {
	const { label, value, units } = props;
	return (
		<BoilerInfoPanelWrapper>
			<BigNumber>{`${value}${units ? units : ""}`}</BigNumber>
			<BoilerInfoLabel>{label}</BoilerInfoLabel>
		</BoilerInfoPanelWrapper>
	);
};

export default DefaultBoilerInfoPanel;
