import React, {
	createContext,
	PropsWithChildren,
	useCallback,
	useState,
} from "react";

export const UserContext = createContext({
	user: null as string | null,
	handleSetUser: (user: string) => {
		user;
	},
});

const UserProvider = (props: PropsWithChildren) => {
	const [user, setUser] = useState<string | null>(null);

	const handleSetUser = useCallback((user: string) => {
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
