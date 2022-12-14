import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useBoilers from "../../../Hooks/useBoilers";
import { routes } from "../../../Routes/routes";
import BigError from "../../Molecules/BigError/BigError";
import Loader from "../../Molecules/Loader/Loader";
import {
	BoilersListElement,
	BoilersListHeader,
	BoilersListWrapper,
	GreenBoilersListElement,
} from "./BoilersList.styles";

const BoilersList = () => {
	const { addBoiler, controlPanel } = routes;
	const { boilersList, isLoading, error, handleSelectBoiler } = useBoilers();
	const navigate = useNavigate();

	useEffect(() => {
		handleSelectBoiler(null);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const renderBoilersListElements = (boilersList: string[]) => {
		return boilersList.map((boiler) => {
			return (
				<BoilersListElement
					key={boiler}
					onClick={() => {
						handleSelectBoiler(boiler);
						navigate(controlPanel);
					}}
				>{`Boiler: ${boiler}`}</BoilersListElement>
			);
		});
	};
	return error ? (
		<BigError error={error} />
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
