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
} from "../BasicSettingsForm/BasicSettingsForm..styles";

type MyFormValues = {
	fanSpeed: number;
	fanSpeedInSupervision: number;
	supervisionWaitingTime: number;
	fuelStream: number;
	fuelBreakTime: number;
	fuelStreamTime: number;
};

type Props = {
	boilerSettings: BoilerSettings;
	isActive: boolean;
	handleToggleActive: () => void;
};

const AdvancedSettingsForm = (props: Props) => {
	const { controlPanel } = routes;
	const navigate = useNavigate();
	const { handleSettingsChange, isLoading } = useBoilers();
	const {
		isActive,
		handleToggleActive,
		boilerSettings: { userSettings, advancedSettings },
	} = props;
	const initialValues: MyFormValues = {
		fanSpeed: advancedSettings.fanSpeed,
		fanSpeedInSupervision: advancedSettings.fanSpeedInSupervision,
		supervisionWaitingTime: advancedSettings.supervisionWaitingTime,
		fuelStream: advancedSettings.fuelStream,
		fuelBreakTime: advancedSettings.fuelBreakTime,
		fuelStreamTime: advancedSettings.fuelStreamTime,
	};

	const validate = (values: MyFormValues) => {
		return (
			values.fanSpeed !== advancedSettings.fanSpeed ||
			values.fanSpeedInSupervision !== advancedSettings.fanSpeedInSupervision ||
			values.supervisionWaitingTime !==
				advancedSettings.supervisionWaitingTime ||
			values.fuelStream !== advancedSettings.fuelStream ||
			values.fuelBreakTime !== advancedSettings.fuelBreakTime ||
			values.fuelStreamTime !== advancedSettings.fuelStreamTime
		);
	};

	const handleSubmit = (values: MyFormValues) => {
		if (validate(values)) {
			const newSettings: FlatBoilerSettings = {
				...userSettings,

				...values,
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
				<ActiveHeader isActive={!isActive} onClick={handleToggleActive}>
					Basic settings
				</ActiveHeader>
				<InactiveHeader isActive={isActive} onClick={handleToggleActive}>
					Advanced Settings
				</InactiveHeader>
				<NumberInputField
					name={"fanSpeed"}
					label={"Fan speed"}
					min={30}
					max={100}
					step={1}
				/>
				<NumberInputField
					name={"fanSpeedInSupervision"}
					label={"Fan speed in supervision"}
					min={0}
					max={50}
					step={1}
				/>

				<NumberInputField
					name={"supervisionWaitingTime"}
					label={"Supervision in waiting time"}
					min={30}
					max={120}
					step={1}
				/>

				<NumberInputField
					name={"fuelStream"}
					label={"Fuel stream"}
					min={2}
					max={50}
					step={1}
				/>

				<NumberInputField
					name={"fuelBreakTime"}
					label={"Fuel break time"}
					min={5}
					max={50}
					step={1}
				/>

				<NumberInputField
					name={"fuelStreamTime"}
					label={"Fuel stream time"}
					min={5}
					max={50}
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

export default AdvancedSettingsForm;
