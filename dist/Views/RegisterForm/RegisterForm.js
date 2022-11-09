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
const ink_form_1 = require("ink-form");
const react_1 = __importStar(require("react"));
const RoutesProvider_1 = require("../../Providers/RoutesProvider/RoutesProvider");
const ink_1 = require("ink");
const UserProvider_1 = require("../../Providers/UserProvider/UserProvider");
const ReturnWrapper_1 = __importDefault(require("../../Components/ReturnWrapper/ReturnWrapper"));
const axios = require("axios");
const RegisterForm = () => {
    const { handleChangeRoute } = (0, react_1.useContext)(RoutesProvider_1.RoutesContext);
    const { handleSetUser } = (0, react_1.useContext)(UserProvider_1.UserContext);
    const [isError, setIsError] = (0, react_1.useState)("");
    const validate = (0, react_1.useCallback)((values) => {
        if (values.password !== values.repeatedPassword) {
            setIsError("Both passwords must be the same");
        }
        else {
            register(values);
        }
    }, []);
    const register = (0, react_1.useCallback)((values) => {
        axios
            .post("http://localhost:8000/Register", {
            userName: values.userName,
            password: values.password,
        })
            .then((response) => {
            const user = response.data;
            handleSetUser(user);
            handleChangeRoute("/Main");
        })
            .catch(() => setIsError("Error"));
    }, []);
    return (react_1.default.createElement(ReturnWrapper_1.default, { path: "/" },
        react_1.default.createElement(ink_form_1.Form, { onSubmit: (values) => validate(values), onChange: () => {
                isError && setIsError("");
            }, form: {
                title: "",
                sections: [
                    {
                        title: "Register form",
                        fields: [
                            {
                                type: "string",
                                name: "userName",
                                label: "User name",
                                required: true,
                                initialValue: "",
                            },
                            {
                                type: "string",
                                name: "password",
                                label: "Password",
                                required: true,
                                mask: "*",
                            },
                            {
                                type: "string",
                                name: "repeatedPassword",
                                label: "Repeated Password",
                                required: true,
                                mask: "*",
                            },
                        ],
                    },
                ],
            } }),
        !!isError && react_1.default.createElement(ink_1.Text, { color: "red" }, isError)));
};
exports.default = RegisterForm;
