#!/usr/bin/env node
import React from "react";
import { render } from "ink";
//import meow from "meow";
import App from "./ui";
import RouterProvider from "./Providers/RoutesProvider/RoutesProvider";
import UserProvider from "./Providers/UserProvider/UserProvider";
import BoilerProvider from "./Providers/BoilerProvider/BoilerProvider";

/*const cli = meow(`
	Usage
	  $ Rt

	Options
		--name  Your name

	Examples
	  $ Rt --name=Jane
	  Hello, Jane
`, {
	flags: {
		name: {
			type: 'string'
		}
	}
});*/

render(
	<RouterProvider>
		<UserProvider>
			<BoilerProvider>
				<App />
			</BoilerProvider>
		</UserProvider>
	</RouterProvider>
);
