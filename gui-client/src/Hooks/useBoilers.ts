import { useContext } from "react";
import { BoilerContext } from "../Providers/BoilerProvider/BoilerProvider";

const useBoilers = () => {
	return useContext(BoilerContext);
};

export default useBoilers;
