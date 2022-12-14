import { useContext } from "react";
import { BoilerContext } from "../../../Providers/BoilerProvider/BoilerProvider";
import BigError from "../../Molecules/BigError/BigError";
import BoilerAlarmsStateInfoPanel from "../../Molecules/BoilerAlarmsStatusInfo/BoilerAlarmsStatusInfo";
import BoilerMenuPanel from "../../Molecules/BoilerMenuPanel/BoilerMenuPanel";
import BoilerWorkStateInfoPanel from "../../Molecules/BoilerWorkStateInfoPanel/BoilerWorkStateInfoPanel";
import DefaultBoilerInfoPanel from "../../Molecules/DefaultBoilerInfoPanel/DefaultBoilerInfoPamel";
import LargeLoader from "../../Molecules/LargeLoader/LargeLoader";

import {
	BoilerInfoHeader,
	BoilerInfoWrapper,
	BoilersInfoPanelsWrapper,
} from "./BoilerInfo.styles";

const BoilerInfo = () => {
	const { boilerParameters, selectedBoilerId, error, isLoading } =
		useContext(BoilerContext);

	return (
		<BoilerInfoWrapper>
			{isLoading && <LargeLoader />}
			{error && <BigError error={error} />}

			{boilerParameters && !isLoading && !error && (
				<>
					<BoilerInfoHeader>{`Boiler: ${selectedBoilerId}`}</BoilerInfoHeader>
					<BoilersInfoPanelsWrapper>
						<BoilerWorkStateInfoPanel status={boilerParameters.currentStatus} />
						<DefaultBoilerInfoPanel
							label={"Outside temperature"}
							value={boilerParameters.currentOutsideTemperature}
							units={"C"}
						/>
						<DefaultBoilerInfoPanel
							label={"Boiler temperature"}
							value={boilerParameters.currentTemperature}
							units={"C"}
						/>
						<DefaultBoilerInfoPanel
							label={"Fan speed"}
							value={boilerParameters.currentFanSpeed}
							units={"%"}
						/>
						<DefaultBoilerInfoPanel
							label={"Fuel stream (Kg/h)"}
							value={boilerParameters.currentFuelStream}
						/>
						<DefaultBoilerInfoPanel
							label={"Fuel level"}
							value={boilerParameters.currentFuelLevel}
							units={"%"}
						/>
						<BoilerAlarmsStateInfoPanel alarm={boilerParameters.alarm} />
						<BoilerMenuPanel status={boilerParameters.currentStatus} />
					</BoilersInfoPanelsWrapper>
				</>
			)}
		</BoilerInfoWrapper>
	);
};

export default BoilerInfo;
