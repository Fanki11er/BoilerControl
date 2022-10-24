import React from "react";
import SelectInput, { Item } from "ink-select-input/build/SelectInput";
import ButtonItem from "../ButtonItem/ButtonItem";
import ButtonsListIndicator from "../ButtonsListIndicator/ButtonsListIndicator";

type Props = {
	handleSelect: (item: Item<string>) => void;
};

const ButtonsList = (props: Props) => {
	const { handleSelect } = props;

	const items: Item<string>[] = [
		{
			label: "Add boiler",
			value: "ADD_BOILER",
		},
		{
			label: "Exit",
			value: "EXIT",
		},
	];
	return (
		<SelectInput
			itemComponent={ButtonItem}
			items={items}
			indicatorComponent={ButtonsListIndicator}
			onSelect={(item) => handleSelect(item)}
		/>
	);
};

export default ButtonsList;
