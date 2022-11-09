import { Box, Newline, Text, useInput } from "ink";
import React, { PropsWithChildren, useContext } from "react";
import { RoutesContext } from "../../Providers/RoutesProvider/RoutesProvider";
import { Routes } from "../../Types/types";

type Props = {
	path: Routes;
	parameters?: string;
};

const ReturnWrapper = (props: PropsWithChildren & Props) => {
	const { path } = props;

	const { handleChangeRoute } = useContext(RoutesContext);

	useInput((input, key) => {
		if (input === "x" && key.ctrl) {
			if (props.parameters) {
				handleChangeRoute(path, props.parameters);
			} else {
				handleChangeRoute(path);
			}
		}
	});
	return (
		<Box flexDirection={"column"}>
			{props.children}
			<Newline />
			<Text color={"yellow"}>Please press ctrl + x for return</Text>
		</Box>
	);
};

export default ReturnWrapper;
