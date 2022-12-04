import DefaultBoilerInfoPanel from "../../Molecules/DefaultBoilerInfoPanel/DefaultBoilerInfoPamel";
import {
	BoilerInfoHeader,
	BoilerInfoWrapper,
	BoilersInfoPanelsWrapper,
} from "./BoilerInfo.styles";

const BoilerInfo = () => {
	return (
		<BoilerInfoWrapper>
			<BoilerInfoHeader>Boiler: B1</BoilerInfoHeader>
			<BoilersInfoPanelsWrapper>
				<DefaultBoilerInfoPanel
					label={"Outside temperature"}
					value={-1}
					units={"C"}
				/>
				<DefaultBoilerInfoPanel
					label={"Boiler temperature"}
					value={7}
					units={"C"}
				/>
				<DefaultBoilerInfoPanel label={"Fan speed"} value={100} units={"%"} />
				<DefaultBoilerInfoPanel label={"Fuel stream (Kg/h)"} value={0} />
				<DefaultBoilerInfoPanel label={"Fuel level"} value={100} units={"%"} />
			</BoilersInfoPanelsWrapper>
		</BoilerInfoWrapper>
	);
};

export default BoilerInfo;
