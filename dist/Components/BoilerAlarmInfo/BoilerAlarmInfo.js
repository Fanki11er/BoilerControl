"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const BoilerAlarmInfo = (props) => {
    const { alarmStatus } = props;
    return (react_1.default.createElement(ink_1.Box, { borderStyle: "round", width: 28, minWidth: 28, height: 12, minHeight: 12, flexDirection: "column", alignItems: "center", justifyContent: "center", borderColor: alarmStatus ? "red" : "green" },
        react_1.default.createElement(ink_1.Text, { backgroundColor: alarmStatus ? "red" : "green" }, alarmStatus ? alarmStatus : "NO ALARMS")));
};
exports.default = BoilerAlarmInfo;
