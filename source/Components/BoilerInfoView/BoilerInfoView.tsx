import React, { useContext } from "react";
import { Box, Text } from "ink";
import BoilerInfo from "../BoilerInfo/BoilerInfo";
import { BoilerContext } from "../../Providers/BoilerProvider/BoilerProvider";
import BoilerStatusInfo from "../BoilerStatusInfo/BoilerStatusInfo";
import BoilerAlarmInfo from "../BoilerAlarmInfo/BoilerAlarmInfo";
import BoilerControlPanel from "../BoilerControlsPanel/BoilerControlsPanel";

type Props = {
	id: string;
};

const BoilerInfoView = (props: Props) => {
	const { boilerParameters } = useContext(BoilerContext);
	const {} = props;
	return (
		<Box
			width={120}
			height={30}
			padding={2}
			borderStyle={"round"}
			minWidth={120}
			flexDirection={"column"}
		>
			{boilerParameters ? (
				<>
					<Box>
						<>
							<BoilerStatusInfo status={boilerParameters?.currentStatus} />
							<BoilerInfo
								amount={boilerParameters?.currentOutsideTemperature!}
								scale={"C"}
								label={"Outside temperature"}
							/>
							<BoilerInfo
								amount={boilerParameters?.currentTemperature!}
								scale={"C"}
								label={"Boiler temperature"}
							/>
							<BoilerInfo
								amount={boilerParameters?.currentFanSpeed!}
								scale={"%"}
								label={"Fan speed"}
							/>
						</>
					</Box>
					<Box>
						<>
							<BoilerInfo
								amount={boilerParameters?.currentFuelStream!}
								label={"Fuel stream (Kg/h)"}
							/>
							<BoilerInfo
								amount={boilerParameters?.currentFuelLevel!}
								scale={"%"}
								label={"Fuel level"}
							/>
							<BoilerAlarmInfo alarmStatus={boilerParameters.alarm} />
							<BoilerControlPanel
								boilerStatus={boilerParameters.currentStatus}
							/>
						</>
					</Box>
				</>
			) : (
				<Text color={"yellow"}>Loading...</Text>
			)}
		</Box>
	);
};

export default BoilerInfoView;
