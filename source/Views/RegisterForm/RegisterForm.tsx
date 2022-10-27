import { Form } from "ink-form";
import React, { useCallback, useContext, useState } from "react";
import { RoutesContext } from "../../Providers/RoutesProvider/RoutesProvider";
import { Text } from "ink";
import { UserContext } from "../../Providers/UserProvider/UserProvider";

import ReturnWrapper from "../../Components/ReturnWrapper/ReturnWrapper";

type RegisterFormValues = {
	userName: string;
	password: string;
	repeatedPassword: string;
};
const RegisterForm = () => {
	const { handleChangeRoute } = useContext(RoutesContext);
	const { handleSetUser } = useContext(UserContext);

	const [isError, setIsError] = useState("");
	const validate = useCallback((values: RegisterFormValues) => {
		if (values.password !== values.repeatedPassword) {
			setIsError("Both passwords must be the same");
		} else {
			handleSetUser(values.userName);
			handleChangeRoute("/Main");
		}
	}, []);

	return (
		<ReturnWrapper path={"/"}>
			<Form
				onSubmit={(values) => validate(values as RegisterFormValues)}
				onChange={() => {
					isError && setIsError("");
				}}
				form={{
					title: "",

					sections: [
						{
							title: "Register form",
							fields: [
								{
									type: "string",
									name: "userName",
									label: "User name",
									required: true,
									initialValue: "",
								},
								{
									type: "string",
									name: "password",
									label: "Password",
									required: true,
									mask: "*",
								},
								{
									type: "string",
									name: "repeatedPassword",
									label: "Repeated Password",
									required: true,
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

export default RegisterForm;
