"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
//import IMG from "../../Assets/Images/Test.png";
//import terminalImage from "terminal-image";
//const omit = require('lodash.omit');
//const terminalImage = require("terminal-image");
require("console-png").attachTo(console);
//@ts-ignore
const console_png_1 = __importDefault(require("console-png"));
const Image = (props) => {
    const {} = props;
    const setImage = async () => {
        /*const img = await terminalImage.file("../../Assets/Images/Test.png", {
            width: "50%",
            height: "50%",
        });*/
        (0, console_png_1.default)("../../Assets/Images/Test.png", (err, string) => {
            console.log(string);
            if (err) {
                console.log("U+1F9B7");
            }
        });
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        setImage(),
        react_1.default.createElement(ink_1.Box, null)));
};
exports.default = Image;
