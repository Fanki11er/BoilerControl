import SelectInput, { Item } from "ink-select-input/build/SelectInput";
import React, { useContext, useEffect } from "react";
import { RoutesContext } from "../../Providers/RoutesProvider/RoutesProvider";
import { UserContext } from "../../Providers/UserProvider/UserProvider";
import Indicator from "../../Components/Indicator/Indicator";
import ListItem from "../../Components/ListItem/ListItem";
import { items } from "../../FakeData/fakeData";
import { Box, Text } from "ink";

const MainPage = () => {
	const { handleChangeRoute } = useContext(RoutesContext);
	const { user } = useContext(UserContext);

	useEffect(() => {
		if (!user) {
			handleChangeRoute("/Login");
			//return null;
		}
	});

	const handleSelect = (item: Item<string>) => {
		if (item.value.match(/B\d/)) {
			handleChangeRoute("/BoilerInfo", item.value);
		}
		if (item.value.includes("EXIT")) {
			handleChangeRoute("/");
		}
		if (item.value.includes("ADD")) {
			handleChangeRoute("/AddBoiler");
		}
	};
	const buttons: Item<string>[] = [
		{
			label: "< Add new boiler >",
			value: "BTN_ADD",
		},
		{
			label: "< Exit >",
			value: "BTN_EXIT",
		},
	];

	return (
		<Box alignItems={"center"} flexDirection={"column"}>
			<Text color={"greenBright"}>Select boiler</Text>
			<Box borderColor={"white"} borderStyle={"round"} padding={2} width={100}>
				<SelectInput
					itemComponent={ListItem}
					items={[...items, ...buttons]}
					indicatorComponent={Indicator}
					onSelect={(item) => handleSelect(item)}
				/>
			</Box>
		</Box>
	);
};

export default MainPage;
