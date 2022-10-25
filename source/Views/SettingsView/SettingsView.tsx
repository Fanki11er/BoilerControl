import { Form } from "ink-form";
import React, { useContext } from "react";
import { BoilerContext } from "../../Providers/BoilerProvider/BoilerProvider";
import { RoutesContext } from "../../Providers/RoutesProvider/RoutesProvider";

type Props = {
	id: string;
};
const SettingsView = (props: Props) => {
	const { id } = props;

	const { handleGetBoilerSettings, handleSettingsChange } =
		useContext(BoilerContext);
	const { handleChangeRoute } = useContext(RoutesContext);
	const currentSettings = handleGetBoilerSettings();
	const { desiredTemperature, boilerHysteresis } = currentSettings.userSettings;
	const {
		fanSpeed,
		fanSpeedInSupervision,
		fuelBreakTime,
		fuelStream,
		fuelStreamTime,
		supervisionWaitingTime,
	} = currentSettings.advancedSettings;

	//!!Add function for searching boiler by Id or sending request with Id
	return (
		<Form
			onSubmit={(value) => {
				handleSettingsChange(value);
				handleChangeRoute("/BoilerInfo", id);
			}}
			form={{
				title: "Settings",
				sections: [
					{
						title: "UserSettings",
						fields: [
							{
								type: "integer",
								name: "desiredTemperature",
								label: "Desired temperature",
								min: 40,
								max: 85,
								initialValue: desiredTemperature,
								required: true,
							},
							{
								type: "integer",
								name: "hysteresis",
								label: "Hysteresis",
								min: 2,
								max: 10,
								initialValue: boilerHysteresis,
								required: true,
							},
						],
					},
					{
						title: "Advanced settings",
						fields: [
							{
								type: "integer",
								name: "fanSpeed",
								label: "Fan speed",
								min: 30,
								max: 100,
								initialValue: fanSpeed,
								required: true,
							},
							{
								type: "integer",
								name: "fanSpeedInSupervision",
								label: "Fan Speed In Supervision",
								min: 0,
								max: 50,
								initialValue: fanSpeedInSupervision,
								required: true,
							},
							{
								type: "integer",
								name: "supervisionWaitingTime",
								label: "Supervision Waiting Time",
								min: 30,
								max: 120,
								initialValue: supervisionWaitingTime,
								required: true,
							},
							{
								type: "integer",
								name: "fuelStream",
								label: "Fuel Stream",
								min: 2,
								max: 50,
								initialValue: fuelStream,
								required: true,
							},
							{
								type: "integer",
								name: "fuelBreakTime",
								label: "Fuel Break Time",
								min: 5,
								max: 50,
								initialValue: fuelBreakTime,
								required: true,
							},
							{
								type: "integer",
								name: "fuelStreamTime",
								label: "Fuel Stream Time",
								min: 5,
								max: 50,
								initialValue: fuelStreamTime,
								required: true,
							},
						],
					},
				],
			}}
		/>
	);
};

export default SettingsView;

//);
