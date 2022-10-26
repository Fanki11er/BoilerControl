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
const ButtonItem_1 = __importDefault(require("../../Components/ButtonItem/ButtonItem"));
const RoutesProvider_1 = require("../../Providers/RoutesProvider/RoutesProvider");
const UserProvider_1 = require("../../Providers/UserProvider/UserProvider");
const LoginForm = () => {
    const { handleSetUser } = (0, react_1.useContext)(UserProvider_1.UserContext);
    const { handleChangeRoute } = (0, react_1.useContext)(RoutesProvider_1.RoutesContext);
    const [isError, setIsError] = (0, react_1.useState)("");
    const backToHeroPage = (0, react_1.useCallback)(() => {
        handleChangeRoute("/");
    }, []);
    const validate = (0, react_1.useCallback)((values) => {
        if (values.name === "") {
            setIsError("Name can't be empty");
        }
        else {
            handleSetUser(values.name);
            handleChangeRoute("/Main");
        }
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ink_form_1.Form, { onSubmit: (value) => validate(value), onChange: () => {
                setIsError("");
            }, form: {
                title: "TT",
                sections: [
                    {
                        title: "Sign in",
                        fields: [
                            {
                                type: "string",
                                name: "name",
                                label: "User name",
                                initialValue: "",
                            },
                            {
                                type: "string",
                                name: "password",
                                label: "User password",
                                mask: "*",
                            },
                        ],
                    },
                ],
            } }),
        !!isError && react_1.default.createElement(ink_1.Text, { color: "red" }, isError),
        react_1.default.createElement(ink_1.Box, { alignSelf: "flex-end", justifyContent: "center", alignItems: "center" },
            react_1.default.createElement(ink_1.Text, null, "Press enter for return."),
            react_1.default.createElement(ButtonItem_1.default, { label: "Return", callback: backToHeroPage, id: "10" }))));
};
exports.default = LoginForm;
