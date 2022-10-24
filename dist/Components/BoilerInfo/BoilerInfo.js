"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
//@ts-ignore
const figlet_1 = __importDefault(require("figlet"));
const BoilerInfo = (props) => {
    const { amount, label, scale } = props;
    return (react_1.default.createElement(ink_1.Box, { borderStyle: "round", width: 28, minWidth: 28, height: 12, minHeight: 12, flexDirection: "column", alignItems: "center" },
        react_1.default.createElement(ink_1.Text, null, figlet_1.default.textSync(`${amount}${scale ? scale : ""}`, {
            width: 40,
        })),
        react_1.default.createElement(ink_1.Text, null, label)));
};
exports.default = BoilerInfo;
