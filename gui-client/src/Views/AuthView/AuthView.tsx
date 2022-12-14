import { Navigate, Outlet } from "react-router-dom";
import useUser from "../../Hooks/useUser";
import BoilerProvider from "../../Providers/BoilerProvider/BoilerProvider";
import { routes } from "../../Routes/routes";

const AuthView = () => {
	const { user } = useUser();
	const { index } = routes;
	return user ? (
		<BoilerProvider>
			<Outlet />
		</BoilerProvider>
	) : (
		<Navigate to={index} />
	);
};

export default AuthView;
