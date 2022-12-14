import styled from "styled-components";
import { BoilerInfoPanelWrapper } from "../../Atoms/BoilerInfoPanelWrapper/BoilerInfoPanelWrapper";

export const BoilerMenuPanelWrapper = styled(BoilerInfoPanelWrapper)`
	display: grid;
	grid-template-rows: none;
	grid-auto-rows: auto;
	row-gap: 5px;
`;
