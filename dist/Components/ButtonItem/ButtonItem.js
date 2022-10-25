"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const ButtonItem = (props) => {
    const { callback, label } = props;
    const { isFocused } = (0, ink_1.useFocus)();
    (0, ink_1.useInput)((input, key) => {
        input;
        if (isFocused && key.return) {
            callback();
        }
    });
    return (react_1.default.createElement(ink_1.Box, { borderColor: isFocused ? "blue" : "white", borderStyle: "round", width: 10, height: 3, alignItems: "center", alignSelf: "flex-end", justifyContent: "center", marginLeft: 5 },
        react_1.default.createElement(ink_1.Text, { color: isFocused ? "blue" : undefined, underline: isFocused ? true : false, bold: true }, ` ${label} `)));
};
exports.default = ButtonItem;
