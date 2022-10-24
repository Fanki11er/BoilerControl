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
const BoilerInfoView_1 = __importDefault(require("./Components/BoilerInfoView/BoilerInfoView"));
const LoginForm_1 = __importDefault(require("./Components/LoginForm/LoginForm"));
const MainPage_1 = __importDefault(require("./Components/MainPage/MainPage"));
//import LoginForm from "./Components/LoginForm/LoginForm";
const RegisterForm_1 = __importDefault(require("./Components/RegisterForm/RegisterForm"));
const RoutesProvider_1 = require("./Providers/RoutesProvider/RoutesProvider");
const App = () => {
    const { currentRoute } = (0, react_1.useContext)(RoutesProvider_1.RoutesContext);
    const switchComponents = (0, react_1.useCallback)((currentRoute) => {
        switch (currentRoute.currentRoute) {
            case "/Login": {
                return react_1.default.createElement(LoginForm_1.default, null);
            }
            case "/Register": {
                return react_1.default.createElement(RegisterForm_1.default, null);
            }
            case "/Main": {
                return react_1.default.createElement(MainPage_1.default, null);
            }
            case "/BoilerInfo": {
                return react_1.default.createElement(BoilerInfoView_1.default, { id: currentRoute.payload });
            }
            default: {
                return react_1.default.createElement(RegisterForm_1.default, null);
            }
        }
    }, []);
    return switchComponents(currentRoute);
};
exports.default = App;
