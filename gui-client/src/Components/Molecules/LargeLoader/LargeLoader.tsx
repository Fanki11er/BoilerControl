import { LargeLoaderWrapper } from "./LargeLoader.styles";
import LoaderImage from "../../../Assets/Earth.svg";
import { LoaderImg } from "../../Atoms/LoaderWrapper/LoaderWrapper";

const LargeLoader = () => {
	return (
		<LargeLoaderWrapper>
			<LoaderImg src={LoaderImage} alt={"Loader image"} />
		</LargeLoaderWrapper>
	);
};

export default LargeLoader;
