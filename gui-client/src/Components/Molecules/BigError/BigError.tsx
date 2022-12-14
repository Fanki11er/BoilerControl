import {
	BigErrorContent,
	BigErrorImg,
	BigErrorWrapper,
} from "./BigError.styles";
import ErrorImg from "../../../Assets/Error.svg";

type Props = {
	error: string;
};
const BigError = (props: Props) => {
	const { error } = props;
	return (
		<BigErrorWrapper>
			<BigErrorImg src={ErrorImg} alt={"Error image"} />
			<BigErrorContent>{error}</BigErrorContent>
		</BigErrorWrapper>
	);
};

export default BigError;
