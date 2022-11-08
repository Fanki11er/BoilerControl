import React, { useContext, useEffect } from "react";
import { Box, Text } from "ink";
import BoilerInfo from "../../Components/BoilerInfo/BoilerInfo";
import { BoilerContext } from "../../Providers/BoilerProvider/BoilerProvider";
import BoilerStatusInfo from "../../Components/BoilerStatusInfo/BoilerStatusInfo";
import BoilerAlarmInfo from "../../Components/BoilerAlarmInfo/BoilerAlarmInfo";
import BoilerControlPanel from "../../Components/BoilerControlsPanel/BoilerControlsPanel";
import ReturnWrapper from "../../Components/ReturnWrapper/ReturnWrapper";

type Props = {
	id: string;
};

const BoilerInfoView = (props: Props) => {
	const { boilerParameters, handleSelectBoiler, error } =
		useContext(BoilerContext);
	const { id } = props;
	useEffect(() => {
		handleSelectBoiler(id);
	}, []);

	return (
		<>
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
									id={id}
								/>
							</>
						</Box>
					</>
				) : (
					<Text color={error ? "red" : "yellow"}>
						{error ? error : "Loading..."}
					</Text>
				)}
			</Box>
			<ReturnWrapper path="/Main" />
		</>
	);
};

export default BoilerInfoView;
