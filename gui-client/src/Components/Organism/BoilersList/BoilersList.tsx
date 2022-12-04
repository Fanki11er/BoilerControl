import { Link, useNavigate } from "react-router-dom";
import useBoilers from "../../../Hooks/useBoilers";
import { routes } from "../../../Routes/routes";
import Loader from "../../Molecules/Loader/Loader";
import LoadingError from "../../Molecules/LoadingError/LoadingError";
import {
	BoilersListElement,
	BoilersListHeader,
	BoilersListWrapper,
	GreenBoilersListElement,
} from "./BoilersList.styles";

const BoilersList = () => {
	const { addBoiler, controlPanel } = routes;
	const { boilersList, isLoading, error } = useBoilers();
	const navigate = useNavigate();

	const renderBoilersListElements = (boilersList: string[]) => {
		return boilersList.map((boiler) => {
			return (
				<BoilersListElement
					key={boiler}
					onClick={() => navigate(controlPanel)}
				>{`Boiler: ${boiler}`}</BoilersListElement>
			);
		});
	};
	return error ? (
		<LoadingError />
	) : isLoading ? (
		<Loader />
	) : (
		<>
			<BoilersListHeader>Select boiler</BoilersListHeader>
			<BoilersListWrapper>
				<GreenBoilersListElement as={Link} to={addBoiler}>
					Register new
				</GreenBoilersListElement>
				{renderBoilersListElements(boilersList)}
			</BoilersListWrapper>
		</>
	);
};

export default BoilersList;
