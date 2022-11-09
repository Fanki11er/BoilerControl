import { Text } from "ink";
import { Form } from "ink-form";
import React, { useContext, useEffect, useState } from "react";
import ReturnWrapper from "../../Components/ReturnWrapper/ReturnWrapper";
import { BoilerContext } from "../../Providers/BoilerProvider/BoilerProvider";
import { RoutesContext } from "../../Providers/RoutesProvider/RoutesProvider";
import { BoilerSettings } from "../../Types/types";

type Props = {
	id: string;
};
const SettingsView = (props: Props) => {
	const { id } = props;

	const [currentSettings, setCurrentSettings] = useState<BoilerSettings | null>(
		null
	);

	const { handleGetBoilerSettings, handleSettingsChange } =
		useContext(BoilerContext);

	useEffect(() => {
		handleGetBoilerSettings()
			?.then((settings) => {
				setCurrentSettings(settings);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	const { handleChangeRoute } = useContext(RoutesContext);

	return (
		<ReturnWrapper path={"/BoilerInfo"} parameters={id}>
			{currentSettings ? (
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
										initialValue:
											currentSettings?.userSettings.desiredTemperature,
										required: true,
									},
									{
										type: "integer",
										name: "boilerHysteresis",
										label: "Hysteresis",
										min: 2,
										max: 10,
										initialValue:
											currentSettings?.userSettings.boilerHysteresis,
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
										initialValue: currentSettings?.advancedSettings.fanSpeed,
										required: true,
									},
									{
										type: "integer",
										name: "fanSpeedInSupervision",
										label: "Fan Speed In Supervision",
										min: 0,
										max: 50,
										initialValue:
											currentSettings?.advancedSettings.fanSpeedInSupervision,
										required: true,
									},
									{
										type: "integer",
										name: "supervisionWaitingTime",
										label: "Supervision Waiting Time",
										min: 30,
										max: 120,
										initialValue:
											currentSettings?.advancedSettings.supervisionWaitingTime,
										required: true,
									},
									{
										type: "integer",
										name: "fuelStream",
										label: "Fuel Stream",
										min: 2,
										max: 50,
										initialValue: currentSettings?.advancedSettings.fuelStream,
										required: true,
									},
									{
										type: "integer",
										name: "fuelBreakTime",
										label: "Fuel Break Time",
										min: 5,
										max: 50,
										initialValue:
											currentSettings?.advancedSettings.fuelBreakTime,
										required: true,
									},
									{
										type: "integer",
										name: "fuelStreamTime",
										label: "Fuel Stream Time",
										min: 5,
										max: 50,
										initialValue:
											currentSettings?.advancedSettings.fuelStreamTime,
										required: true,
									},
								],
							},
						],
					}}
				/>
			) : (
				<Text color={"blue"}>Loading...</Text>
			)}
		</ReturnWrapper>
	);
};

export default SettingsView;
