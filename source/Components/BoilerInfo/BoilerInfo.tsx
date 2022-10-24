import React from "react";
import { Box, Text } from "ink";
//@ts-ignore
import figlet from "figlet";

type Props = {
	amount: number;
	label: string;
	scale?: string;
};

const BoilerInfo = (props: Props) => {
	const { amount, label, scale } = props;

	return (
		<Box
			borderStyle={"round"}
			width={28}
			minWidth={28}
			height={12}
			minHeight={12}
			flexDirection={"column"}
			alignItems={"center"}
		>
			<Text>
				{figlet.textSync(`${amount}${scale ? scale : ""}`, {
					width: 40,
				})}
			</Text>
			<Text>{label}</Text>
		</Box>
	);
};

export default BoilerInfo;
