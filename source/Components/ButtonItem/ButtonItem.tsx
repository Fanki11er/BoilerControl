import React from "react";
import { Box, Text, useFocus, useInput } from "ink";

export interface Props {
	label: string;
	callback: () => void;
	width?: number;
	id?: string;
	autoFocus?: boolean;
}

const ButtonItem = (props: Props) => {
	const { callback, label } = props;
	const { isFocused } = useFocus({
		id: props.id ? props.id : undefined,
		autoFocus: props.autoFocus ? true : false,
	});
	useInput((input, key) => {
		input;

		if (isFocused && key.return) {
			callback();
		}
	});

	return (
		<Box
			borderColor={isFocused ? "blue" : "white"}
			borderStyle={"round"}
			width={props.width ? props.width : 10}
			height={3}
			alignItems={"center"}
			alignSelf={"flex-end"}
			justifyContent={"center"}
			marginLeft={5}
		>
			<Text
				color={isFocused ? "blue" : undefined}
				underline={isFocused ? true : false}
				bold={true}
			>
				{` ${label} `}
			</Text>
		</Box>
	);
};

export default ButtonItem;
