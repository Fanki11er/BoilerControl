"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoilerSettings = void 0;
class BoilerSettings {
    userSettings = {
        desiredTemperature: 70,
        boilerHysteresis: 5,
    };
    advancedSettings = {
        fanSpeed: 100,
        fanSpeedInSupervision: 50,
        supervisionWaitingTime: 70,
        fuelStream: 15,
        fuelBreakTime: 30,
        fuelStreamTime: 10,
    };
}
exports.BoilerSettings = BoilerSettings;
