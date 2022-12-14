import { useContext } from "react";
import { Link } from "react-router-dom";
import { BoilerContext } from "../../../Providers/BoilerProvider/BoilerProvider";
import { routes } from "../../../Routes/routes";
import { BoilerStatus } from "../../../Types/types";
import { MenuPanelButton } from "../../Atoms/Buttons/Buttons";
import { BoilerMenuPanelWrapper } from "./BoilerMenuPanel.styles";
type Props = {
	status: BoilerStatus;
};
const BoilerMenuPanel = (props: Props) => {
	const { status } = props;
	const { settings, boilersList } = routes;
	const { handleBoilerControl } = useContext(BoilerContext);
	return (
		<BoilerMenuPanelWrapper>
			<MenuPanelButton
				tabIndex={0}
				autoFocus={true}
				onClick={() =>
					handleBoilerControl(status === "Stopped" ? "START" : "STOP")
				}
			>
				{status === "Stopped" ? "Start" : "Stop"}
			</MenuPanelButton>
			<MenuPanelButton
				tabIndex={0}
				onClick={() => handleBoilerControl("REFUEL")}
			>
				Refuel
			</MenuPanelButton>
			<MenuPanelButton
				tabIndex={0}
				onClick={() => handleBoilerControl("RESET")}
			>
				Reset
			</MenuPanelButton>
			<MenuPanelButton tabIndex={0} as={Link} to={settings}>
				Settings
			</MenuPanelButton>
			<MenuPanelButton tabIndex={0} as={Link} to={boilersList}>
				Exit
			</MenuPanelButton>
		</BoilerMenuPanelWrapper>
	);
};

export default BoilerMenuPanel;
