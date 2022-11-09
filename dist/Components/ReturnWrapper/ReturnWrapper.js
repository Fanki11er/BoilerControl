"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ink_1 = require("ink");
const react_1 = __importStar(require("react"));
const RoutesProvider_1 = require("../../Providers/RoutesProvider/RoutesProvider");
const ReturnWrapper = (props) => {
    const { path } = props;
    const { handleChangeRoute } = (0, react_1.useContext)(RoutesProvider_1.RoutesContext);
    (0, ink_1.useInput)((input, key) => {
        if (input === "x" && key.ctrl) {
            if (props.parameters) {
                handleChangeRoute(path, props.parameters);
            }
            else {
                handleChangeRoute(path);
            }
        }
    });
    return (react_1.default.createElement(ink_1.Box, { flexDirection: "column" },
        props.children,
        react_1.default.createElement(ink_1.Newline, null),
        react_1.default.createElement(ink_1.Text, { color: "yellow" }, "Please press ctrl + x for return")));
};
exports.default = ReturnWrapper;
