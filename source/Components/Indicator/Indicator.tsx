import React from "react";
import { Box, Text } from "ink";
import Spinner from "ink-spinner";

const Indicator = ({ isSelected = false }) => (
	<Box>
		{isSelected ? (
			<Text backgroundColor={"green"}>
				<Spinner type="simpleDotsScrolling" />
			</Text>
		) : (
			<Text backgroundColor={"gray"}> </Text>
		)}
	</Box>
);

export default Indicator;
