import React, { useCallback, useContext } from "react";
import { Box } from "ink";
import SelectInput from "ink-select-input/build/SelectInput";
import { BoilerStatus, PanelOptions } from "../../Types/types";
import { BoilerContext } from "../../Providers/BoilerProvider/BoilerProvider";
import { RoutesContext } from "../../Providers/RoutesProvider/RoutesProvider";

type Props = {
	boilerStatus: BoilerStatus;
};

const BoilerControlPanel = (props: Props) => {
	const { boilerStatus } = props;
	const { handleBoilerControl } = useContext(BoilerContext);
	const { handleChangeRoute } = useContext(RoutesContext);

	type PanelItem = {
		label: PanelOptions;
		value: PanelOptions;
	};
	const options: PanelItem[] = [
		{
			label: boilerStatus === "Stopped" ? "START" : "STOP",
			value: boilerStatus === "Stopped" ? "START" : "STOP",
		},
		{
			label: "REFUEL",
			value: "REFUEL",
		},
		{
			label: "RESET",
			value: "RESET",
		},
		{
			label: "SETTINGS",
			value: "SETTINGS",
		},
		{
			label: "EXIT",
			value: "EXIT",
		},
	];

	const handleSelect = useCallback((value: PanelOptions) => {
		switch (value) {
			case "EXIT": {
				handleChangeRoute("/Main");
				break;
			}
			case "SETTINGS": {
				console.log("Set");
				break;
			}
			default: {
				handleBoilerControl(value);
				break;
			}
		}
	}, []);

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
		>
			<SelectInput
				//itemComponent={ListItem}
				items={options}
				//indicatorComponent={Indicator}
				onSelect={(item) => handleSelect(item.value)}
			/>
		</Box>
	);
};

export default BoilerControlPanel;
