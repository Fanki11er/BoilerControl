import { createContext, PropsWithChildren, useCallback, useState } from "react";
import { User } from "../../Types/types";

export const UserContext = createContext({
	user: null as User | null,
	handleSetUser: (user: User) => {},
	handleLogout: () => {},
});

const UserProvider = (props: PropsWithChildren) => {
	const [user, setUser] = useState<User | null>(null);

	const handleSetUser = useCallback((user: User) => {
		setUser(user);
	}, []);

	const handleLogout = () => {
		setUser(null);
	};

	const context = {
		user,
		handleSetUser,
		handleLogout,
	};

	return (
		<UserContext.Provider value={context}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserProvider;
