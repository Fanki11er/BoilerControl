import { Text } from "ink";
import { Form } from "ink-form";
import React, { useCallback, useContext, useState } from "react";
import ReturnWrapper from "../../Components/ReturnWrapper/ReturnWrapper";
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

	const validate = useCallback((values: LoginFormValues) => {
		if (values.name === "") {
			setIsError("Name can't be empty");
		} else {
			handleSetUser(values.name);
			handleChangeRoute("/Main");
		}
	}, []);
	return (
		<ReturnWrapper path={"/"}>
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
		</ReturnWrapper>
	);
};

export default LoginForm;
