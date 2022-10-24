import * as React from "react";
import type { FC } from "react";
import { Box, Text } from "ink";

export interface Props {
	isSelected?: boolean;
	label: string;
}

const ButtonItem: FC<Props> = ({ isSelected = false, label }) => (
	<Box borderColor={isSelected ? "green" : "gray"} padding={2} marginRight={5}>
		<Text
			color={isSelected ? "blue" : undefined}
			backgroundColor={isSelected ? "green" : "gray"}
		>
			{` ${label} `}
		</Text>
	</Box>
);

export default ButtonItem;
