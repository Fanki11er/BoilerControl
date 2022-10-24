import React, { PropsWithChildren } from "react";
import { Route, Routes } from "../../Types/types";
export declare const RoutesContext: React.Context<{
    currentRoute: Route;
    handleChangeRoute: (route: Routes, payload?: string) => void;
}>;
declare const RouterProvider: (props: PropsWithChildren) => JSX.Element;
export default RouterProvider;
