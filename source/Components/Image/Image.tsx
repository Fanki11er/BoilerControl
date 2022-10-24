import React from "react";
import { Box } from "ink";

//import IMG from "../../Assets/Images/Test.png";
//import terminalImage from "terminal-image";
//const omit = require('lodash.omit');
//const terminalImage = require("terminal-image");
require("console-png").attachTo(console);
//@ts-ignore
import c from "console-png";

//const termImg = require('term-img');
type Props = {
	src: string;
	width?: number;
	height?: number;
};

const Image = (props: Props) => {
	const {} = props;
	const setImage = async () => {
		/*const img = await terminalImage.file("../../Assets/Images/Test.png", {
			width: "50%",
			height: "50%",
		});*/
		c("../../Assets/Images/Test.png", (err: any, string: string) => {
			console.log(string);
			if (err) {
				console.log("U+1F9B7");
			}
		});
	};
	return (
		<>
			{setImage()}
			<Box></Box>
		</>
	);
};

export default Image;
