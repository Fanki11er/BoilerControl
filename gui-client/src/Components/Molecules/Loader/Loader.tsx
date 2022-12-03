import { LoaderImg, LoaderWrapper } from "./Loader.styles";
import LoaderImage from "../../../Assets/Earth.svg";

const Loader = () => {
	return (
		<LoaderWrapper>
			<LoaderImg src={LoaderImage} alt={"Loader image"} />
		</LoaderWrapper>
	);
};

export default Loader;
