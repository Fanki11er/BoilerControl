import React, {
	createContext,
	PropsWithChildren,
	useCallback,
	useState,
} from "react";
import { User } from "../../Types/types";

export const UserContext = createContext({
	user: null as User | null,
	handleSetUser: (user: User) => {
		user;
	},
});

const UserProvider = (props: PropsWithChildren) => {
	const [user, setUser] = useState<User | null>(null);

	const handleSetUser = useCallback((user: User) => {
		setUser(user);
	}, []);

	const context = {
		user,
		handleSetUser,
	};

	return (
		<UserContext.Provider value={context}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserProvider;
