import SelectInput, { Item } from "ink-select-input/build/SelectInput";
import React, { useContext, useEffect, useState } from "react";
import { RoutesContext } from "../../Providers/RoutesProvider/RoutesProvider";
import { UserContext } from "../../Providers/UserProvider/UserProvider";
import Indicator from "../../Components/Indicator/Indicator";
import ListItem from "../../Components/ListItem/ListItem";
import { Box, Text } from "ink";
import { BoilerContext } from "../../Providers/BoilerProvider/BoilerProvider";

const MainPage = () => {
	const [boilersList, setBoilersList] = useState<string[]>([]);
	const { handleChangeRoute } = useContext(RoutesContext);
	const { user } = useContext(UserContext);
	const { handleGetBoilersList } = useContext(BoilerContext);

	useEffect(() => {
		if (!user) {
			handleChangeRoute("/Login");
		}
	}, [user]);

	useEffect(() => {
		user &&
			handleGetBoilersList(user?.userId)
				?.then((data) => {
					setBoilersList([...data]);
				})
				.catch((e) => {
					console.log(e);
					//!! Set error
				});
	}, []);

	const convertToItems = (boilersList: string[]) => {
		return boilersList.map((item) => {
			return {
				label: `Boiler: ${item}`,
				value: item,
			};
		});
	};

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
					items={[...convertToItems(boilersList), ...buttons]}
					indicatorComponent={Indicator}
					onSelect={(item) => handleSelect(item)}
				/>
			</Box>
		</Box>
	);
};

export default MainPage;
