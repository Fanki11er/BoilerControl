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
    /*const handleBoilerControl = useCallback((status: PanelOptions) => {
        if (boiler && status === "RESET") {
            boiler.resetAlarms();
        } else if (boiler) {
            boiler.changeStatus(status);
        }
    }, []);*/
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
        error,
    };
    return (react_1.default.createElement(exports.BoilerContext.Provider, { value: context }, props.children));
};
exports.default = BoilerProvider;
/*

const BoilerProvider = (props: PropsWithChildren) => {
    const [boilerParameters, setBoilerParameters] = useState<BoilerStatus>(null);

    const { current: boiler } = useRef(new Boiler("B1"));

    const handleChangeParameters = useCallback(() => {
        setBoilerParameters(boiler.getBoilerParameters());
    }, []);

    const handleBoilerControl = useCallback((status: PanelOptions) => {
        if (boiler && status === "RESET") {
            boiler.resetAlarms();
        } else if (boiler) {
            boiler.changeStatus(status);
        }
    }, []);

    const handleSettingsChange = useCallback((settings: any) => {
        boiler.setBoilerSettings(settings);
    }, []);

    const handleGetBoilerSettings = useCallback(() => {
        return boiler.getBoilerSettings();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            handleChangeParameters();
        }, 500);

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

    return (
        <BoilerContext.Provider value={context}>
            {props.children}
        </BoilerContext.Provider>
    );
};*/
