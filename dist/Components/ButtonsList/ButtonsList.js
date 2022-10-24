"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SelectInput_1 = __importDefault(require("ink-select-input/build/SelectInput"));
const ButtonItem_1 = __importDefault(require("../ButtonItem/ButtonItem"));
const ButtonsListIndicator_1 = __importDefault(require("../ButtonsListIndicator/ButtonsListIndicator"));
const ButtonsList = (props) => {
    const { handleSelect } = props;
    const items = [
        {
            label: "Add boiler",
            value: "ADD_BOILER",
        },
        {
            label: "Exit",
            value: "EXIT",
        },
    ];
    return (react_1.default.createElement(SelectInput_1.default, { itemComponent: ButtonItem_1.default, items: items, indicatorComponent: ButtonsListIndicator_1.default, onSelect: (item) => handleSelect(item) }));
};
exports.default = ButtonsList;
