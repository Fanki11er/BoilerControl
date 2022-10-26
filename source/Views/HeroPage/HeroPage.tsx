import React, { useContext } from "react";
import { Box, Newline, Text } from "ink";
//@ts-ignore
import Gradient from "ink-gradient";
//@ts-ignore
import BigText from "ink-big-text";
import ButtonItem from "../../Components/ButtonItem/ButtonItem";
import { RoutesContext } from "../../Providers/RoutesProvider/RoutesProvider";

const HeroPage = () => {
	const { handleChangeRoute } = useContext(RoutesContext);
	return (
		<Box
			flexDirection={"column"}
			alignSelf={"center"}
			alignItems={"center"}
			justifyContent={"space-between"}
			height={30}
		>
			<Gradient name={"mind"}>
				<BigText text={`      Boiler`} />
				<BigText text="Controller" />
			</Gradient>
			<Newline />
			<Box flexDirection={"column"} alignItems={"center"}>
				<Text>Press tab to select and enter for accept</Text>
				<Box width={40} alignItems={"center"}>
					<ButtonItem
						label="Sign in"
						callback={() => handleChangeRoute("/Login")}
						width={12}
						autoFocus={true}
					/>
					<ButtonItem
						label="Register"
						callback={() => handleChangeRoute("/Register")}
						width={12}
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default HeroPage;
