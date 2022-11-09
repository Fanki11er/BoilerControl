import { PropsWithChildren } from "react";
import { Routes } from "../../Types/types";
declare type Props = {
    path: Routes;
    parameters?: string;
};
declare const ReturnWrapper: (props: PropsWithChildren & Props) => JSX.Element;
export default ReturnWrapper;
