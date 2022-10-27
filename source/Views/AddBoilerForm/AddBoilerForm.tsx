import React, { useCallback, useContext } from "react";
import { Form } from "ink-form";
import { RoutesContext } from "../../Providers/RoutesProvider/RoutesProvider";
import ReturnWrapper from "../../Components/ReturnWrapper/ReturnWrapper";

type AddBoilerFormValues = {
	boilerId: string;
};

const AddBoilerForm = () => {
	const { handleChangeRoute } = useContext(RoutesContext);

	const handleSubmit = useCallback((values: AddBoilerFormValues) => {
		values;
		handleChangeRoute("/Main");
	}, []);
	return (
		<ReturnWrapper path={"/Main"}>
			<Form
				onSubmit={(values) => handleSubmit(values as AddBoilerFormValues)}
				form={{
					title: "",

					sections: [
						{
							title: "Add boiler form",
							fields: [
								{
									type: "string",
									name: "boilerId",
									label: "Boiler Id",
									required: true,
									initialValue: "",
								},
							],
						},
					],
				}}
			/>
		</ReturnWrapper>
	);
};

export default AddBoilerForm;
