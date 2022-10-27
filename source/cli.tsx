#!/usr/bin/env node
import React from "react";
import { render } from "ink";
import App from "./ui";
import RouterProvider from "./Providers/RoutesProvider/RoutesProvider";
import UserProvider from "./Providers/UserProvider/UserProvider";
import BoilerProvider from "./Providers/BoilerProvider/BoilerProvider";

render(
	<RouterProvider>
		<UserProvider>
			<BoilerProvider>
				<App />
			</BoilerProvider>
		</UserProvider>
	</RouterProvider>
);
