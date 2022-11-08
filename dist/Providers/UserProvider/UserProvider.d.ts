import React, { PropsWithChildren } from "react";
import { User } from "../../Types/types";
export declare const UserContext: React.Context<{
    user: User | null;
    handleSetUser: (user: User) => void;
}>;
declare const UserProvider: (props: PropsWithChildren) => JSX.Element;
export default UserProvider;
