#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const ui_1 = __importDefault(require("./ui"));
const RoutesProvider_1 = __importDefault(require("./Providers/RoutesProvider/RoutesProvider"));
const UserProvider_1 = __importDefault(require("./Providers/UserProvider/UserProvider"));
const BoilerProvider_1 = __importDefault(require("./Providers/BoilerProvider/BoilerProvider"));
(0, ink_1.render)(react_1.default.createElement(RoutesProvider_1.default, null,
    react_1.default.createElement(UserProvider_1.default, null,
        react_1.default.createElement(BoilerProvider_1.default, null,
            react_1.default.createElement(ui_1.default, null)))));
