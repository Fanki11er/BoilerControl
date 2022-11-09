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
const axios = require("axios");
exports.BoilerContext = (0, react_1.createContext)({
    boilerParameters: null,
    handleBoilerControl: (status) => {
        status;
    },
    handleSettingsChange: (settings) => {
        settings;
    },
    handleGetBoilerSettings: () => {
        return null;
    },
    handleSelectBoiler: (boilerId) => {
        boilerId;
    },
    handleGetBoilersList: (userId) => {
        userId;
        return null;
    },
    handleAddBoiler: (userId, boilerId) => {
        userId;
        boilerId;
    },
    error: "",
});
const BoilerProvider = (props) => {
    const [selectedBoilerId, setSelectedBoilerId] = (0, react_1.useState)(null);
    const [boilerParameters, setBoilerParameters] = (0, react_1.useState)(null);
    const [error, setError] = (0, react_1.useState)("");
    const handleSelectBoiler = (boilerId) => {
        setBoilerParameters(null);
        setSelectedBoilerId(boilerId);
    };
    const handleChangeParameters = () => {
        if (selectedBoilerId) {
            axios
                .post("http://localhost:8000/GetParams", {
                id: selectedBoilerId,
            })
                .then((response) => {
                const boilerParameters = response.data;
                setBoilerParameters(boilerParameters);
            })
                .catch(() => setError("Error loading params"));
            //! Add Error info
        }
    };
    const handleBoilerControl = (status) => {
        axios
            .post("http://localhost:8000/SetStatus", {
            status,
            id: selectedBoilerId,
        })
            .then(() => { })
            .catch(() => setError("Error setting status"));
        //! Add Error info
    };
    const handleSettingsChange = (settings) => {
        //boiler.setBoilerSettings(settings);
        axios
            .post("http://localhost:8000/SetSettings", {
            id: selectedBoilerId,
            settings,
        })
            .then(() => { })
            .catch(() => setError("Setting new settings error"));
        //! Add Error info
    };
    const handleGetBoilerSettings = async () => {
        return await axios
            .post("http://localhost:8000/GetSettings", {
            id: selectedBoilerId,
        })
            .then((response) => {
            return response.data;
        })
            .catch(() => {
            setError("Get settings error");
        });
    };
    const handleGetBoilersList = async (userId) => {
        return await axios
            .post("http://localhost:8000/GetBoilersList", {
            id: userId,
        })
            .then((response) => {
            return response.data;
        })
            .catch(() => {
            setError("Get boilers list error");
        });
    };
    const handleAddBoiler = (userId, boilerId) => {
        axios
            .post("http://localhost:8000/AddBoiler", {
            id: userId,
            boilerId,
        })
            .catch(() => {
            setError("Get boilers list error");
        });
    };
    (0, react_1.useEffect)(() => {
        let interval;
        if (selectedBoilerId) {
            interval = setInterval(() => {
                handleChangeParameters();
            }, 500);
        }
        return () => {
            return clearInterval(interval);
        };
    }, [selectedBoilerId]);
    const context = {
        boilerParameters,
        handleSettingsChange,
        handleBoilerControl,
        handleGetBoilerSettings,
        handleSelectBoiler,
        handleGetBoilersList,
        handleAddBoiler,
        error,
    };
    return (react_1.default.createElement(exports.BoilerContext.Provider, { value: context }, props.children));
};
exports.default = BoilerProvider;
