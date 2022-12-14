import { useEffect, useState } from "react";
import { DefaultViewWrapper } from "../../Components/Atoms/DefaultViewWrapper/DefaultViewWrapper";
import AdvancedSettingsForm from "../../Components/Molecules/AdvancedSettingsForm/AdvancedSettingsForm";
import BasicSettingsForm from "../../Components/Molecules/BasicSettingsForm/BasicSettingsForm";
import LargeLoader from "../../Components/Molecules/LargeLoader/LargeLoader";
import useBoilers from "../../Hooks/useBoilers";
import { BoilerSettings } from "../../Types/types";

const SettingsView = () => {
	const [isActive, setIsActive] = useState(true);
	const [currentSettings, setCurrentSettings] =
		useState<BoilerSettings | null>();
	const { handleGetBoilerSettings, isLoading, error } = useBoilers();
	useEffect(() => {
		handleGetBoilerSettings()
			?.then((settings) => {
				setCurrentSettings(settings);
			})
			.catch((e) => {
				console.log(e);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const toggleIsActive = () => {
		setIsActive((prev) => !prev);
	};

	return (
		<DefaultViewWrapper>
			{error && <div>Error</div>}
			{isLoading && <LargeLoader />}
			{currentSettings &&
				!error &&
				!isLoading &&
				(isActive ? (
					<BasicSettingsForm
						boilerSettings={currentSettings}
						isActive={isActive}
						handleToggleActive={toggleIsActive}
					/>
				) : (
					<AdvancedSettingsForm
						boilerSettings={currentSettings}
						isActive={!isActive}
						handleToggleActive={toggleIsActive}
					/>
				))}
		</DefaultViewWrapper>
	);
};

export default SettingsView;
