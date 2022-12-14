import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import useBoilers from "../../../Hooks/useBoilers";
import useUser from "../../../Hooks/useUser";
import { routes } from "../../../Routes/routes";
import {
	GreenMediumButton,
	YellowMediumButton,
} from "../../Atoms/Buttons/Buttons";
import {
	DefaultFormHeader,
	DefaultFormWrapper,
} from "../../Atoms/DefaultForm/DefaultForm";
import { DefaultFormError } from "../../Atoms/DefaultFormError/DefaultFormError";
import { FormButtonsWrapper } from "../../Molecules/BasicSettingsForm/BasicSettingsForm..styles";
import Loader from "../../Molecules/Loader/Loader";
import LongInputField from "../../Molecules/LongInputField/LongInputField";

type MyFormValues = {
	boilerId: string;
};

const AddBoilerForm = () => {
	const { boilersList } = routes;
	const navigate = useNavigate();
	const { handleAddBoiler, error, isLoading } = useBoilers();
	const { user } = useUser();

	const initialValues: MyFormValues = {
		boilerId: "",
	};

	const validateForm = (values: MyFormValues) => {
		if (values.boilerId === "") {
		}
	};

	const handleSubmit = (values: MyFormValues) => {
		validateForm(values);

		user && handleAddBoiler(user.userId, values.boilerId);
		if (!error && !isLoading) {
			navigate(boilersList);
		}
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
				<DefaultFormHeader>Register new boiler</DefaultFormHeader>
				{error ? <DefaultFormError>{error}</DefaultFormError> : null}
				<LongInputField
					name={"boilerId"}
					type={"text"}
					placeholder={"Boiler id"}
					label={"Boiler id"}
				/>

				{isLoading ? (
					<Loader />
				) : (
					<FormButtonsWrapper>
						<GreenMediumButton type={"submit"}>Register</GreenMediumButton>
						<YellowMediumButton onClick={() => navigate(boilersList)}>
							Back
						</YellowMediumButton>
					</FormButtonsWrapper>
				)}
			</DefaultFormWrapper>
		</Formik>
	);
};

export default AddBoilerForm;
