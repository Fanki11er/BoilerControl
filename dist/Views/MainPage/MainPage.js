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
const SelectInput_1 = __importDefault(require("ink-select-input/build/SelectInput"));
const react_1 = __importStar(require("react"));
const RoutesProvider_1 = require("../../Providers/RoutesProvider/RoutesProvider");
const UserProvider_1 = require("../../Providers/UserProvider/UserProvider");
const Indicator_1 = __importDefault(require("../../Components/Indicator/Indicator"));
const ListItem_1 = __importDefault(require("../../Components/ListItem/ListItem"));
const ink_1 = require("ink");
const BoilerProvider_1 = require("../../Providers/BoilerProvider/BoilerProvider");
const MainPage = () => {
    const [boilersList, setBoilersList] = (0, react_1.useState)([]);
    const { handleChangeRoute } = (0, react_1.useContext)(RoutesProvider_1.RoutesContext);
    const { user } = (0, react_1.useContext)(UserProvider_1.UserContext);
    const { handleGetBoilersList } = (0, react_1.useContext)(BoilerProvider_1.BoilerContext);
    (0, react_1.useEffect)(() => {
        if (!user) {
            handleChangeRoute("/Login");
        }
    }, [user]);
    (0, react_1.useEffect)(() => {
        user &&
            handleGetBoilersList(user?.userId)
                ?.then((data) => {
                setBoilersList([...data]);
            })
                .catch((e) => {
                console.log(e);
                //!! Set error
            });
    }, []);
    const convertToItems = (boilersList) => {
        return boilersList.map((item) => {
            return {
                label: `Boiler: ${item}`,
                value: item,
            };
        });
    };
    const handleSelect = (item) => {
        if (item.value.match(/B\d/)) {
            handleChangeRoute("/BoilerInfo", item.value);
        }
        if (item.value.includes("EXIT")) {
            handleChangeRoute("/");
        }
        if (item.value.includes("ADD")) {
            handleChangeRoute("/AddBoiler");
        }
    };
    const buttons = [
        {
            label: "< Add new boiler >",
            value: "BTN_ADD",
        },
        {
            label: "< Exit >",
            value: "BTN_EXIT",
        },
    ];
    return (react_1.default.createElement(ink_1.Box, { alignItems: "center", flexDirection: "column" },
        react_1.default.createElement(ink_1.Text, { color: "greenBright" }, "Select boiler"),
        react_1.default.createElement(ink_1.Box, { borderColor: "white", borderStyle: "round", padding: 2, width: 100 },
            react_1.default.createElement(SelectInput_1.default, { itemComponent: ListItem_1.default, items: [...convertToItems(boilersList), ...buttons], indicatorComponent: Indicator_1.default, onSelect: (item) => handleSelect(item) }))));
};
exports.default = MainPage;
