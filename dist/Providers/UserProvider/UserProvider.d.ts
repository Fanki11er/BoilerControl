import React, { PropsWithChildren } from "react";
export declare const UserContext: React.Context<{
    user: string | null;
    handleSetUser: (user: string) => void;
}>;
declare const UserProvider: (props: PropsWithChildren) => JSX.Element;
export default UserProvider;
