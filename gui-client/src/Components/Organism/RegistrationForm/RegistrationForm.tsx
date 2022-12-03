import { AxiosError, AxiosResponse } from "axios";
import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../Api/axios";
import { apiEndpoints } from "../../../Api/endpoints";
import { routes } from "../../../Routes/routes";
import { User } from "../../../Types/types";
import { GreenMediumButton } from "../../Atoms/Buttons/Buttons";
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
	const { boilersList } = routes;
	const { registerEndpoint } = apiEndpoints;
	const navigate = useNavigate();
	const initialValues: MyFormValues = {
		userName: "",
		password: "",
		repeatedPassword: "",
	};
	const [isError, setError] = useState("");
	const [isConnecting, setIsConnecting] = useState(false);

	const validateForm = (values: MyFormValues) => {
		const entries = Object.values(values);
		for (let i = 0; i < entries.length; i++) {
			if (!entries[i]) {
				setError("All fields are required");
			}
		}
		if (values.password !== values.repeatedPassword) {
			setError("Different passwords");
		}
	};

	const handleSubmit = (values: MyFormValues) => {
		setError("");
		setIsConnecting(true);
		validateForm(values);
		if (!isError) {
			axios
				.post(registerEndpoint, {
					userName: values.userName,
					password: values.password,
				})
				.then((response: AxiosResponse) => {
					const user = response.data as User;
					//handleSetUser(user);
					console.log(user);

					navigate(boilersList);
				})
				.catch((e: AxiosError) => {
					setError(e.message);
				});
		}
		setIsConnecting(false);
	};
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={(values, action) => {
				handleSubmit(values);
				action.setSubmitting(false);
			}}
		>
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
				{isConnecting ? (
					<Loader />
				) : (
					<FormButtonsWrapper>
						<GreenMediumButton type={"submit"}>Register</GreenMediumButton>
					</FormButtonsWrapper>
				)}
			</DefaultFormWrapper>
		</Formik>
	);
};

export default RegistrationForm;
