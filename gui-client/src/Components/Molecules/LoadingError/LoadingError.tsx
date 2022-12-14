import ErrorImage from "../../../Assets/Error.svg";
import { LoaderImg } from "../../Atoms/LoaderWrapper/LoaderWrapper";
import { StyledLoader } from "./LoadingError.styles";

const LoadingError = () => {
	return (
		<StyledLoader>
			<LoaderImg src={ErrorImage} alt={"Loader image"} />
		</StyledLoader>
	);
};

export default LoadingError;
