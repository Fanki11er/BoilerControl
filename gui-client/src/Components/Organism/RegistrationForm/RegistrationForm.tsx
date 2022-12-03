import { Formik } from "formik";
import { GreenMediumButton } from "../../Atoms/Buttons/Buttons";
import {
	DefaultFormHeader,
	DefaultFormWrapper,
} from "../../Atoms/DefaultForm/DefaultForm";
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

	const handleSubmit = (values: MyFormValues) => {};
	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
			<DefaultFormWrapper>
				<DefaultFormHeader>Registration</DefaultFormHeader>
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
				<FormButtonsWrapper>
					<GreenMediumButton>Register</GreenMediumButton>
					<GreenMediumButton>Login</GreenMediumButton>
				</FormButtonsWrapper>
			</DefaultFormWrapper>
		</Formik>
	);
};

export default RegistrationForm;
