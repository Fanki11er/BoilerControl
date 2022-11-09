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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const ink_1 = require("ink");
const BoilerInfo_1 = __importDefault(require("../../Components/BoilerInfo/BoilerInfo"));
const BoilerProvider_1 = require("../../Providers/BoilerProvider/BoilerProvider");
const BoilerStatusInfo_1 = __importDefault(require("../../Components/BoilerStatusInfo/BoilerStatusInfo"));
const BoilerAlarmInfo_1 = __importDefault(require("../../Components/BoilerAlarmInfo/BoilerAlarmInfo"));
const BoilerControlsPanel_1 = __importDefault(require("../../Components/BoilerControlsPanel/BoilerControlsPanel"));
const ReturnWrapper_1 = __importDefault(require("../../Components/ReturnWrapper/ReturnWrapper"));
const BoilerInfoView = (props) => {
    const { boilerParameters, handleSelectBoiler, error } = (0, react_1.useContext)(BoilerProvider_1.BoilerContext);
    const { id } = props;
    (0, react_1.useEffect)(() => {
        handleSelectBoiler(id);
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ink_1.Box, { width: 120, height: 30, padding: 2, borderStyle: "round", minWidth: 120, flexDirection: "column" }, boilerParameters ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(ink_1.Box, null,
                react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(BoilerStatusInfo_1.default, { status: boilerParameters?.currentStatus }),
                    react_1.default.createElement(BoilerInfo_1.default, { amount: boilerParameters?.currentOutsideTemperature, scale: "C", label: "Outside temperature" }),
                    react_1.default.createElement(BoilerInfo_1.default, { amount: boilerParameters?.currentTemperature, scale: "C", label: "Boiler temperature" }),
                    react_1.default.createElement(BoilerInfo_1.default, { amount: boilerParameters?.currentFanSpeed, scale: "%", label: "Fan speed" }))),
            react_1.default.createElement(ink_1.Box, null,
                react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(BoilerInfo_1.default, { amount: boilerParameters?.currentFuelStream, label: "Fuel stream (Kg/h)" }),
                    react_1.default.createElement(BoilerInfo_1.default, { amount: boilerParameters?.currentFuelLevel, scale: "%", label: "Fuel level" }),
                    react_1.default.createElement(BoilerAlarmInfo_1.default, { alarmStatus: boilerParameters.alarm }),
                    react_1.default.createElement(BoilerControlsPanel_1.default, { boilerStatus: boilerParameters.currentStatus, id: id }))))) : (react_1.default.createElement(ink_1.Text, { color: error ? "red" : "yellow" }, error ? error : "Loading..."))),
        react_1.default.createElement(ReturnWrapper_1.default, { path: "/Main" })));
};
exports.default = BoilerInfoView;
