"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boiler = void 0;
const BoilerSettings_1 = require("../BoilerSettings/BoilerSettings");
class Boiler {
    id;
    currentTemperature;
    currentFanSpeed = 0;
    currentFuelLevel;
    alarm = "";
    currentOutsideTemperature;
    currentFuelStream = 0;
    currentStatus = "Stopped";
    counter = 0;
    fuelUsed = 0;
    boilerSettings;
    constructor(id) {
        this.id = id;
        this.currentOutsideTemperature = this.randomSetOutsideTemperature();
        this.currentFuelLevel = this.randomSetFuelLevel();
        this.currentTemperature = this.currentOutsideTemperature + 10;
        this.boilerSettings = new BoilerSettings_1.BoilerSettings();
        setInterval(() => {
            this.updateCounter();
            this.update();
        }, 1000);
    }
    randomSetOutsideTemperature() {
        return Math.random() < 0.5 ? -1 : 1 * Math.floor(Math.random() * 30);
    }
    randomSetFuelLevel() {
        return Math.floor(Math.random() * 100);
    }
    getId() {
        return this.id;
    }
    getAlarm() {
        return this.alarm;
    }
    getBoilerInfo() {
        return {
            currentFanSpeed: this.currentFanSpeed,
            currentFuelLevel: this.currentFuelLevel,
            currentOutsideTemperature: this.currentOutsideTemperature,
            currentTemperature: this.currentTemperature,
            currentFuelStream: this.currentFuelStream,
            currentStatus: this.currentStatus,
            alarm: this.alarm,
        };
    }
    getBoilerSettings() {
        return this.boilerSettings;
    }
    setBoilerSettings(settings) {
        console.log(settings);
    }
    setFuelLevel(newFuelLevel) {
        this.currentFuelLevel = newFuelLevel;
    }
    startBoiler() {
        if (this.alarm === "") {
            this.currentStatus = "Working";
            this.currentFanSpeed = this.boilerSettings.advancedSettings.fanSpeed;
        }
    }
    stopBoiler() {
        this.currentStatus = "Stopped";
        this.currentFanSpeed = 0;
        this.currentFuelStream = 0;
    }
    resetAlarms() {
        this.alarm = "";
    }
    updateCounter() {
        if (this.counter <= 260) {
            this.counter++;
        }
        else {
            this.counter = 0;
        }
    }
    update() {
        switch (this.currentStatus) {
            case "Stopped": {
                this.stopUpdate();
                break;
            }
            case "Working": {
                this.workingUpdate();
                break;
            }
            case "Idle": {
                this.superviseUpdate();
                break;
            }
            default: {
                break;
            }
        }
    }
    figureSpeedOfTempFalling() {
        if (this.currentOutsideTemperature < 0) {
            return 10;
        }
        else if (this.currentOutsideTemperature < 10) {
            return 5;
            //!!
        }
        else {
            return 30;
        }
    }
    stopUpdate() {
        if (this.currentTemperature > this.currentOutsideTemperature &&
            this.currentTemperature >= 8) {
            if (this.counter % this.figureSpeedOfTempFalling() === 0) {
                this.currentTemperature -= 1;
            }
        }
    }
    superviseUpdate() {
        const { fanSpeedInSupervision, supervisionWaitingTime } = this.boilerSettings.advancedSettings;
        const { desiredTemperature, boilerHysteresis } = this.boilerSettings.userSettings;
        if (this.counter % supervisionWaitingTime === 0) {
            this.currentFanSpeed = fanSpeedInSupervision;
        }
        if ((this.counter % supervisionWaitingTime) + 5 === 0) {
            this.currentFanSpeed = 0;
        }
        if (this.currentTemperature < desiredTemperature - boilerHysteresis) {
            this.currentStatus = "Working";
        }
        if (this.counter % this.figureSpeedOfTempFalling() === 0) {
            this.currentTemperature -= 1;
        }
    }
    workingUpdate() {
        const { fuelBreakTime, fuelStream, fuelStreamTime } = this.boilerSettings.advancedSettings;
        const { desiredTemperature } = this.boilerSettings.userSettings;
        if (this.currentTemperature < desiredTemperature) {
            if (this.counter % this.figureSpeedOfTempFalling() === 0) {
                this.currentTemperature += 1;
            }
            if (this.counter % fuelBreakTime === 0) {
                this.currentFuelStream = fuelStream;
                this.fuelUsed += fuelStream / (fuelStreamTime / 10);
            }
            if (this.counter % (fuelBreakTime + fuelStreamTime) === 0) {
                this.currentFuelStream = 0;
            }
            if (this.fuelUsed >= 15) {
                this.fuelUsed = 0;
                this.currentFuelLevel -= 1;
            }
            if (this.currentFuelLevel <= 0) {
                this.stopBoiler();
                this.alarm = "No fuel!";
            }
        }
        else {
            this.currentStatus = "Idle";
            this.currentFanSpeed = 0;
            this.currentFuelStream = 0;
        }
    }
    getBoilerParameters() {
        return this.getBoilerInfo();
    }
    changeStatus(status) {
        switch (status) {
            case "START": {
                this.startBoiler();
                break;
            }
            case "STOP": {
                this.stopBoiler();
                break;
            }
            case "REFUEL": {
                this.setFuelLevel(100);
                break;
            }
            default: {
                break;
            }
        }
    }
}
exports.Boiler = Boiler;
