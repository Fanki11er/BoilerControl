import { Formik } from "formik";
import { useState } from "react";
import {
	GreenMediumButton,
	YellowMediumButton,
} from "../../Atoms/Buttons/Buttons";
import {
	DefaultFormHeader,
	DefaultFormWrapper,
} from "../../Atoms/DefaultForm/DefaultForm";
import { DefaultFormError } from "../../Atoms/DefaultFormError/DefaultFormError";
import Loader from "../../Molecules/Loader/Loader";
import LongInputField from "../../Molecules/LongInputField/LongInputField";
import { FormButtonsWrapper } from "./LoginForm.styles";

type MyFormValues = {
	userName: string;
	password: string;
};

const LoginForm = () => {
	const initialValues: MyFormValues = {
		userName: "",
		password: "",
	};

	const [isError, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = (values: MyFormValues) => {};
	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
			<DefaultFormWrapper>
				<DefaultFormHeader>Login</DefaultFormHeader>
				{isError ? <DefaultFormError>{isError}</DefaultFormError> : null}
				<LongInputField
					name={"userName"}
					type={"text"}
					placeholder={"User name"}
					label={"Name"}
				/>

				<LongInputField
					name={"password"}
					type={"password"}
					placeholder={"Password"}
					label={"Password"}
				/>

				{isLoading ? (
					<Loader />
				) : (
					<FormButtonsWrapper>
						<GreenMediumButton>Register</GreenMediumButton>
						<YellowMediumButton>Login</YellowMediumButton>
					</FormButtonsWrapper>
				)}
			</DefaultFormWrapper>
		</Formik>
	);
};

export default LoginForm;
