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
import { FormButtonsWrapper } from "./RegistrationForm.styles";

type MyFormValues = {
	userName: string;
	password: string;
	repeatedPassword: string;
};

const RegistrationForm = () => {
	const initialValues: MyFormValues = {
		userName: "",
		password: "",
		repeatedPassword: "",
	};
	const [isError, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = (values: MyFormValues) => {};
	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
			<DefaultFormWrapper>
				<DefaultFormHeader>Registration</DefaultFormHeader>
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
				<LongInputField
					name={"repeatedPassword"}
					type={"password"}
					placeholder={"Repeated password"}
					label={"Repeated password"}
				/>
				{isLoading ? (
					<Loader />
				) : (
					<FormButtonsWrapper>
						<GreenMediumButton>Login</GreenMediumButton>
						<YellowMediumButton>Register</YellowMediumButton>
					</FormButtonsWrapper>
				)}
			</DefaultFormWrapper>
		</Formik>
	);
};

export default RegistrationForm;
