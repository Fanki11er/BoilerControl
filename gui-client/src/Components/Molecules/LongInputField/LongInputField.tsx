import {
	LongFieldInput,
	LongFieldLabel,
	LongInputFieldWrapper,
} from "./LongInputField.styles";
type Props = {
	name: string;
	type: string;
	label: string;
	placeholder: string;
};

const LongInputField = (props: Props) => {
	const { name, type, label, placeholder } = props;
	return (
		<LongInputFieldWrapper>
			<LongFieldLabel>{label}</LongFieldLabel>
			<LongFieldInput type={type} name={name} placeholder={placeholder} />
		</LongInputFieldWrapper>
	);
};

export default LongInputField;
