import * as React from "react";
import type { FC } from "react";
import { Box, Text } from "ink";
import Spinner from "ink-spinner";

export interface Props {
	isSelected?: boolean;
}

const ButtonsListIndicator: FC<Props> = ({ isSelected = false }) => (
	<Box borderColor={isSelected ? "green" : "gray"} padding={2} marginRight={5}>
		{isSelected ? (
			<Text backgroundColor={"green"}>
				<Spinner type="simpleDotsScrolling" />
			</Text>
		) : (
			<Text backgroundColor={"gray"}> </Text>
		)}
	</Box>
);

export default ButtonsListIndicator;
