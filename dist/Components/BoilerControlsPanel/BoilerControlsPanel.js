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
const SelectInput_1 = __importDefault(require("ink-select-input/build/SelectInput"));
const BoilerProvider_1 = require("../../Providers/BoilerProvider/BoilerProvider");
const RoutesProvider_1 = require("../../Providers/RoutesProvider/RoutesProvider");
const BoilerControlPanel = (props) => {
    const { boilerStatus, id } = props;
    const { handleBoilerControl } = (0, react_1.useContext)(BoilerProvider_1.BoilerContext);
    const { handleChangeRoute } = (0, react_1.useContext)(RoutesProvider_1.RoutesContext);
    const options = [
        {
            label: boilerStatus === "Stopped" ? "START" : "STOP",
            value: boilerStatus === "Stopped" ? "START" : "STOP",
        },
        {
            label: "REFUEL",
            value: "REFUEL",
        },
        {
            label: "RESET",
            value: "RESET",
        },
        {
            label: "SETTINGS",
            value: "SETTINGS",
        },
        {
            label: "EXIT",
            value: "EXIT",
        },
    ];
    const handleSelect = (0, react_1.useCallback)((value) => {
        switch (value) {
            case "EXIT": {
                handleChangeRoute("/Main");
                break;
            }
            case "SETTINGS": {
                handleChangeRoute("/Settings", id);
                break;
            }
            default: {
                handleBoilerControl(value);
                break;
            }
        }
    }, []);
    return (react_1.default.createElement(ink_1.Box, { borderStyle: "round", width: 28, minWidth: 28, height: 12, minHeight: 12, flexDirection: "column", alignItems: "center", justifyContent: "center" },
        react_1.default.createElement(SelectInput_1.default
        //itemComponent={ListItem}
        , { 
            //itemComponent={ListItem}
            items: options, 
            //indicatorComponent={Indicator}
            onSelect: (item) => handleSelect(item.value) })));
};
exports.default = BoilerControlPanel;
