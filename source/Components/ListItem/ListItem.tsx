import * as React from "react";
import { Newline, Text } from "ink";

const ListItem = ({ isSelected = false, label = "" }) => {
	const setButtonColor = (value: string) => {
		return value.match(/<\s.*\s>/)?.length ? "blueBright" : "gray";
	};
	return (
		<>
			<Text
				color={isSelected ? "blue" : undefined}
				backgroundColor={isSelected ? "green" : setButtonColor(label)}
			>
				{` ${label} `}
			</Text>
			<Newline />
		</>
	);
};

export default ListItem;
