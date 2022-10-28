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
exports.BoilerContext = void 0;
const react_1 = __importStar(require("react"));
const Boiler_1 = require("../../Class/Boiler/Boiler");
exports.BoilerContext = (0, react_1.createContext)({
    boilerParameters: null,
    handleBoilerControl: (status) => {
        status;
    },
    handleSettingsChange: (settings) => {
        settings;
    },
    handleGetBoilerSettings: () => {
        return {};
    },
});
const BoilerProvider = (props) => {
    const [boilerParameters, setBoilerParameters] = (0, react_1.useState)(null);
    const { current: boiler } = (0, react_1.useRef)(new Boiler_1.Boiler("B1"));
    const handleChangeParameters = (0, react_1.useCallback)(() => {
        setBoilerParameters(boiler.getBoilerParameters());
    }, []);
    const handleBoilerControl = (0, react_1.useCallback)((status) => {
        boiler && boiler.changeStatus(status);
    }, []);
    const handleSettingsChange = (0, react_1.useCallback)((settings) => {
        boiler.setBoilerSettings(settings);
    }, []);
    const handleGetBoilerSettings = (0, react_1.useCallback)(() => {
        return boiler.getBoilerSettings();
    }, []);
    (0, react_1.useEffect)(() => {
        const interval = setInterval(() => {
            handleChangeParameters();
        }, 1000);
        return () => {
            return clearInterval(interval);
        };
    }, []);
    const context = {
        boilerParameters,
        handleSettingsChange,
        handleBoilerControl,
        handleGetBoilerSettings,
    };
    return (react_1.default.createElement(exports.BoilerContext.Provider, { value: context }, props.children));
};
exports.default = BoilerProvider;
