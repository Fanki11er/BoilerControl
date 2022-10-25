"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoilerSettings = void 0;
class BoilerSettings {
    constructor() {
        Object.defineProperty(this, "userSettings", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {
                desiredTemperature: 70,
                boilerHysteresis: 5,
            }
        });
        Object.defineProperty(this, "advancedSettings", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {
                fanSpeed: 100,
                fanSpeedInSupervision: 50,
                supervisionWaitingTime: 70,
                fuelStream: 15,
                fuelBreakTime: 30,
                fuelStreamTime: 10,
            }
        });
    }
}
exports.BoilerSettings = BoilerSettings;
