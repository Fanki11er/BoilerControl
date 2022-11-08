import { Text } from "ink";
import { Form } from "ink-form";
import React, { useCallback, useContext, useState } from "react";
import ReturnWrapper from "../../Components/ReturnWrapper/ReturnWrapper";
import { RoutesContext } from "../../Providers/RoutesProvider/RoutesProvider";
import { UserContext } from "../../Providers/UserProvider/UserProvider";
//@ts-ignore
import { Axios } from "axios";
import { User } from "../../Types/types";
const axios = require("axios") as Axios;

type LoginFormValues = {
	name: string;
	password: string;
};

const LoginForm = () => {
	const { handleSetUser } = useContext(UserContext);
	const { handleChangeRoute } = useContext(RoutesContext);

	const [isError, setIsError] = useState("");

	const login = useCallback((values: LoginFormValues) => {
		axios
			.post("http://localhost:8000/Login", {
				userName: values.name,
				password: values.password,
			})
			.then((response: any) => {
				const user = response.data as User;
				handleSetUser(user);
				handleChangeRoute("/Main");
			})
			.catch(() => setIsError("Sorry we can't log you in"));
	}, []);
	return (
		<ReturnWrapper path={"/"}>
			<Form
				onSubmit={(value) => login(value as LoginFormValues)}
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
