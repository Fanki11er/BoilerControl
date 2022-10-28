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
//@ts-ignore
const ink_gradient_1 = __importDefault(require("ink-gradient"));
//@ts-ignore
const ink_big_text_1 = __importDefault(require("ink-big-text"));
const ButtonItem_1 = __importDefault(require("../../Components/ButtonItem/ButtonItem"));
const RoutesProvider_1 = require("../../Providers/RoutesProvider/RoutesProvider");
const HeroPage = () => {
    const { handleChangeRoute } = (0, react_1.useContext)(RoutesProvider_1.RoutesContext);
    const { exit } = (0, ink_1.useApp)();
    const { focusNext, focusPrevious } = (0, ink_1.useFocusManager)();
    (0, ink_1.useInput)((input, key) => {
        input;
        if (key.leftArrow) {
            focusPrevious();
        }
        if (key.rightArrow) {
            focusNext();
        }
    });
    const handleAppExit = (0, react_1.useCallback)(() => {
        exit();
        console.log("Application terminated");
    }, []);
    return (react_1.default.createElement(ink_1.Box, { flexDirection: "column", alignSelf: "center", alignItems: "center", justifyContent: "space-between", height: 30 },
        react_1.default.createElement(ink_gradient_1.default, { name: "mind" },
            react_1.default.createElement(ink_big_text_1.default, { text: `      Boiler` }),
            react_1.default.createElement(ink_big_text_1.default, { text: "Controller" })),
        react_1.default.createElement(ink_1.Newline, null),
        react_1.default.createElement(ink_1.Box, { flexDirection: "column", alignItems: "center" },
            react_1.default.createElement(ink_1.Text, null, "Use arrows for select button and enter for accept"),
            react_1.default.createElement(ink_1.Box, { width: 60, alignItems: "center" },
                react_1.default.createElement(ButtonItem_1.default, { label: "Sign in", callback: () => handleChangeRoute("/Login"), width: 12, autoFocus: true }),
                react_1.default.createElement(ButtonItem_1.default, { label: "Register", callback: () => handleChangeRoute("/Register"), width: 12 }),
                react_1.default.createElement(ButtonItem_1.default, { label: "Exit", callback: () => handleAppExit(), width: 12 })))));
};
exports.default = HeroPage;
