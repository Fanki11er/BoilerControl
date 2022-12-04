import { Link } from "react-router-dom";
import useBoilers from "../../../Hooks/useBoilers";
import { routes } from "../../../Routes/routes";
import Loader from "../../Molecules/Loader/Loader";
import {
	BoilersListElement,
	BoilersListHeader,
	BoilersListWrapper,
	GreenBoilersListElement,
} from "./BoilersList.styles";

const BoilersList = () => {
	const { addBoiler } = routes;
	const { boilersList, isLoading, error } = useBoilers();

	const renderBoilersListElements = (boilersList: string[]) => {
		return boilersList.map((boiler) => {
			return (
				<BoilersListElement
					key={boiler}
					onClick={() => console.log(boiler)}
				>{`Boiler: ${boiler}`}</BoilersListElement>
			);
		});
	};
	return isLoading ? (
		<Loader />
	) : error ? (
		<div>Error</div>
	) : (
		//!!AddError
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
