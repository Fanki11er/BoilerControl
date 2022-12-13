import { Formik } from "formik";
import { BoilerSettings, FlatBoilerSettings } from "../../../Types/types";
import NumberInputField from "../NumberInputField/NumberInputField";
import useBoilers from "../../../Hooks/useBoilers";
import Loader from "../Loader/Loader";

import {
	GreenMediumButton,
	YellowMediumButton,
} from "../../Atoms/Buttons/Buttons";
import { routes } from "../../../Routes/routes";
import { useNavigate } from "react-router-dom";
import {
	ActiveHeader,
	FormButtonsWrapper,
	InactiveHeader,
	StyledFormWrapper,
} from "./BasicSettingsForm..styles";

type MyFormValues = {
	desiredTemperature: number;
	boilerHysteresis: number;
};

type Props = {
	boilerSettings: BoilerSettings;
	isActive: boolean;
	handleToggleActive: () => void;
};

const BasicSettingsForm = (props: Props) => {
	const { controlPanel } = routes;
	const navigate = useNavigate();
	const { handleSettingsChange, isLoading } = useBoilers();
	const {
		isActive,
		handleToggleActive,
		boilerSettings: { userSettings, advancedSettings },
	} = props;
	const initialValues: MyFormValues = {
		desiredTemperature: userSettings.desiredTemperature,
		boilerHysteresis: userSettings.boilerHysteresis,
	};

	const validate = (values: MyFormValues) => {
		return (
			values.boilerHysteresis !== userSettings.boilerHysteresis ||
			values.desiredTemperature !== userSettings.desiredTemperature
		);
	};

	const handleSubmit = (values: MyFormValues) => {
		if (validate(values)) {
			const newSettings: FlatBoilerSettings = {
				...values,

				...advancedSettings,
			};
			handleSettingsChange(newSettings);
			if (!isLoading) {
				navigate(controlPanel);
			}
		}
	};
	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
			<StyledFormWrapper>
				<ActiveHeader isActive={isActive} onClick={handleToggleActive}>
					Basic settings
				</ActiveHeader>
				<InactiveHeader isActive={!isActive} onClick={handleToggleActive}>
					Advanced Settings
				</InactiveHeader>
				<NumberInputField
					name={"desiredTemperature"}
					label={"Desired temperature"}
					min={40}
					max={85}
					step={1}
				/>
				<NumberInputField
					name={"boilerHysteresis"}
					label={"Boiler hysteresis"}
					min={2}
					max={10}
					step={1}
				/>

				{isLoading ? (
					<Loader />
				) : (
					<FormButtonsWrapper>
						<GreenMediumButton type={"submit"}>Change</GreenMediumButton>
						<YellowMediumButton onClick={() => navigate(controlPanel)}>
							Back
						</YellowMediumButton>
					</FormButtonsWrapper>
				)}
			</StyledFormWrapper>
		</Formik>
	);
};

export default BasicSettingsForm;
