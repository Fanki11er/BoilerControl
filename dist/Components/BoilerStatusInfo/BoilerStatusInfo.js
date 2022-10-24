"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const BoilerStatusInfo = (props) => {
    const { status } = props;
    const setColor = (status) => {
        switch (status) {
            case "Working": {
                return "green";
            }
            case "Stopped": {
                return "white";
            }
            case "Idle": {
                return "yellow";
            }
            default: {
                return "white";
            }
        }
    };
    return (react_1.default.createElement(ink_1.Box, { borderStyle: "round", width: 28, minWidth: 28, height: 12, minHeight: 12, flexDirection: "column", alignItems: "center", justifyContent: "center", borderColor: setColor(status) },
        react_1.default.createElement(ink_1.Text, { backgroundColor: setColor(status) }, status.toUpperCase())));
};
exports.default = BoilerStatusInfo;
