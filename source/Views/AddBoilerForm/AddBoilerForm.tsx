import React, { useContext } from "react";
import { Form } from "ink-form";
import { RoutesContext } from "../../Providers/RoutesProvider/RoutesProvider";
import ReturnWrapper from "../../Components/ReturnWrapper/ReturnWrapper";
import { BoilerContext } from "../../Providers/BoilerProvider/BoilerProvider";
import { UserContext } from "../../Providers/UserProvider/UserProvider";

type AddBoilerFormValues = {
	boilerId: string;
};

const AddBoilerForm = () => {
	const { handleChangeRoute } = useContext(RoutesContext);
	const { handleAddBoiler } = useContext(BoilerContext);
	const { user } = useContext(UserContext);

	const handleSubmit = (values: AddBoilerFormValues) => {
		user && handleAddBoiler(user.userId, values.boilerId);
		handleChangeRoute("/Main");
	};
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
