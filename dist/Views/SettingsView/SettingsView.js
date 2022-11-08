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
const ink_1 = require("ink");
const ink_form_1 = require("ink-form");
const react_1 = __importStar(require("react"));
const ReturnWrapper_1 = __importDefault(require("../../Components/ReturnWrapper/ReturnWrapper"));
const BoilerProvider_1 = require("../../Providers/BoilerProvider/BoilerProvider");
const RoutesProvider_1 = require("../../Providers/RoutesProvider/RoutesProvider");
const SettingsView = (props) => {
    const { id } = props;
    const [currentSettings, setCurrentSettings] = (0, react_1.useState)(null);
    const { handleGetBoilerSettings, handleSettingsChange } = (0, react_1.useContext)(BoilerProvider_1.BoilerContext);
    (0, react_1.useEffect)(() => {
        handleGetBoilerSettings()
            ?.then((settings) => {
            setCurrentSettings(settings);
        })
            .catch((e) => {
            console.log(e);
        });
    }, []);
    const { handleChangeRoute } = (0, react_1.useContext)(RoutesProvider_1.RoutesContext);
    //!!Add function for searching boiler by Id or sending request with Id
    return (react_1.default.createElement(ReturnWrapper_1.default, { path: "/BoilerInfo" }, currentSettings ? (react_1.default.createElement(ink_form_1.Form, { onSubmit: (value) => {
            handleSettingsChange(value);
            handleChangeRoute("/BoilerInfo", id);
        }, form: {
            title: "Settings",
            sections: [
                {
                    title: "UserSettings",
                    fields: [
                        {
                            type: "integer",
                            name: "desiredTemperature",
                            label: "Desired temperature",
                            min: 40,
                            max: 85,
                            initialValue: currentSettings?.userSettings.desiredTemperature,
                            required: true,
                        },
                        {
                            type: "integer",
                            name: "hysteresis",
                            label: "Hysteresis",
                            min: 2,
                            max: 10,
                            initialValue: currentSettings?.userSettings.boilerHysteresis,
                            required: true,
                        },
                    ],
                },
                {
                    title: "Advanced settings",
                    fields: [
                        {
                            type: "integer",
                            name: "fanSpeed",
                            label: "Fan speed",
                            min: 30,
                            max: 100,
                            initialValue: currentSettings?.advancedSettings.fanSpeed,
                            required: true,
                        },
                        {
                            type: "integer",
                            name: "fanSpeedInSupervision",
                            label: "Fan Speed In Supervision",
                            min: 0,
                            max: 50,
                            initialValue: currentSettings?.advancedSettings.fanSpeedInSupervision,
                            required: true,
                        },
                        {
                            type: "integer",
                            name: "supervisionWaitingTime",
                            label: "Supervision Waiting Time",
                            min: 30,
                            max: 120,
                            initialValue: currentSettings?.advancedSettings.supervisionWaitingTime,
                            required: true,
                        },
                        {
                            type: "integer",
                            name: "fuelStream",
                            label: "Fuel Stream",
                            min: 2,
                            max: 50,
                            initialValue: currentSettings?.advancedSettings.fuelStream,
                            required: true,
                        },
                        {
                            type: "integer",
                            name: "fuelBreakTime",
                            label: "Fuel Break Time",
                            min: 5,
                            max: 50,
                            initialValue: currentSettings?.advancedSettings.fuelBreakTime,
                            required: true,
                        },
                        {
                            type: "integer",
                            name: "fuelStreamTime",
                            label: "Fuel Stream Time",
                            min: 5,
                            max: 50,
                            initialValue: currentSettings?.advancedSettings.fuelStreamTime,
                            required: true,
                        },
                    ],
                },
            ],
        } })) : (react_1.default.createElement(ink_1.Text, { color: "blue" }, "Loading..."))));
};
exports.default = SettingsView;
