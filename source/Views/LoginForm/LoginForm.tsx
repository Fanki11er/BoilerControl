import { Box, Text } from "ink";
import { Form } from "ink-form";
import React, { useCallback, useContext, useState } from "react";
import ButtonItem from "../../Components/ButtonItem/ButtonItem";
import { RoutesContext } from "../../Providers/RoutesProvider/RoutesProvider";
import { UserContext } from "../../Providers/UserProvider/UserProvider";

type LoginFormValues = {
	name: string;
	password: string;
};

const LoginForm = () => {
	const { handleSetUser } = useContext(UserContext);
	const { handleChangeRoute } = useContext(RoutesContext);

	const [isError, setIsError] = useState("");

	const backToHeroPage = useCallback(() => {
		handleChangeRoute("/");
	}, []);

	const validate = useCallback((values: LoginFormValues) => {
		if (values.name === "") {
			setIsError("Name can't be empty");
		} else {
			handleSetUser(values.name);
			handleChangeRoute("/Main");
		}
	}, []);
	return (
		<>
			<Form
				onSubmit={(value) => validate(value as LoginFormValues)}
				onChange={() => {
					setIsError("");
				}}
				form={{
					sections: [
						{
							title: "Sign in",
							fields: [
								{
									type: "string",
									name: "name",
									label: "User name",
									initialValue: "",
								},
								{
									type: "string",
									name: "password",
									label: "User password",
									mask: "*",
								},
							],
						},
					],
				}}
			/>
			{!!isError && <Text color={"red"}>{isError}</Text>}

			<Box
				alignSelf={"flex-end"}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<Text>Press enter for return.</Text>
				<ButtonItem label={"Return"} callback={backToHeroPage} id={"10"} />
			</Box>
		</>
	);
};

export default LoginForm;
