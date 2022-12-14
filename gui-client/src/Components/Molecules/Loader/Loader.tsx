import LoaderImage from "../../../Assets/Earth.svg";
import {
	LoaderImg,
	LoaderWrapper,
} from "../../Atoms/LoaderWrapper/LoaderWrapper";

const Loader = () => {
	return (
		<LoaderWrapper>
			<LoaderImg src={LoaderImage} alt={"Loader image"} />
		</LoaderWrapper>
	);
};

export default Loader;
