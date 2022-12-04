import { AxiosError, AxiosResponse } from "axios";
import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../Api/axios";
import { apiEndpoints } from "../../../Api/endpoints";
import useUser from "../../../Hooks/useUser";
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
import { FormButtonsWrapper } from "./LoginForm.styles";

type MyFormValues = {
	userName: string;
	password: string;
};

const LoginForm = () => {
	const navigate = useNavigate();
	const { handleSetUser, user } = useUser();
	const { boilersList } = routes;
	const { loginEndpoint } = apiEndpoints;
	if (user) {
		navigate(boilersList);
	}
	const initialValues: MyFormValues = {
		userName: "",
		password: "",
	};

	const [isError, setError] = useState("");
	const [isConnecting, setIsConnecting] = useState(false);

	const handleSubmit = (values: MyFormValues) => {
		axios
			.post(loginEndpoint, {
				userName: values.userName,
				password: values.password,
			})
			.then((response: AxiosResponse) => {
				const user = response.data as User;
				handleSetUser(user);

				navigate(boilersList);
			})
			.catch((e: AxiosError) => {
				setError(e.message);
			});
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

				{isConnecting ? (
					<Loader />
				) : (
					<FormButtonsWrapper>
						<GreenMediumButton type={"submit"}>Login</GreenMediumButton>
					</FormButtonsWrapper>
				)}
			</DefaultFormWrapper>
		</Formik>
	);
};

export default LoginForm;
