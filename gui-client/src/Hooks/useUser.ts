import { useContext } from "react";
import { UserContext } from "../Providers/UserProvider/UserProvider";

const useUser = () => {
	return useContext(UserContext);
};

export default useUser;
