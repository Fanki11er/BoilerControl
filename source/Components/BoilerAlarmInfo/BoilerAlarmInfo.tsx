import React from "react";
import { Box, Text } from "ink";

type Props = {
	alarmStatus: string;
};

const BoilerAlarmInfo = (props: Props) => {
	const { alarmStatus } = props;

	return (
		<Box
			borderStyle={"round"}
			width={28}
			minWidth={28}
			height={12}
			minHeight={12}
			flexDirection={"column"}
			alignItems={"center"}
			justifyContent={"center"}
			borderColor={alarmStatus ? "red" : "green"}
		>
			<Text backgroundColor={alarmStatus ? "red" : "green"}>
				{alarmStatus ? alarmStatus : "NO ALARMS"}
			</Text>
		</Box>
	);
};

export default BoilerAlarmInfo;
