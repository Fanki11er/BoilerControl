import {
	NumberFieldInput,
	NumberFieldLabel,
	NumberInputFieldWrapper,
} from "./NumberInputField.styles";

type Props = {
	name: string;
	label: string;
	min: number;
	max: number;
	step: number;
};

const NumberInputField = (props: Props) => {
	const { name, label, min, max, step } = props;
	return (
		<NumberInputFieldWrapper>
			<NumberFieldLabel>{label}</NumberFieldLabel>
			<NumberFieldInput
				type={"number"}
				name={name}
				min={min}
				max={max}
				step={step}
				required={true}
			/>
		</NumberInputFieldWrapper>
	);
};

export default NumberInputField;
