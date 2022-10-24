import React from "react";
import { Box, Text } from "ink";
import { BoilerStatus } from "../../Types/types";

type Props = {
	status: BoilerStatus;
};

const BoilerStatusInfo = (props: Props) => {
	const { status } = props;

	const setColor = (status: BoilerStatus) => {
		switch (status) {
			case "Working": {
				return "green";
			}
			case "Stopped": {
				return "white";
			}
			case "Idle": {
				return "yellow";
			}
			default: {
				return "white";
			}
		}
	};

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
			borderColor={setColor(status)}
		>
			<Text backgroundColor={setColor(status)}>{status.toUpperCase()}</Text>
		</Box>
	);
};

export default BoilerStatusInfo;
