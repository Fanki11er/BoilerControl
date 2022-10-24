"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boiler = void 0;
class Boiler {
    constructor(id) {
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "currentTemperature", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 16
        });
        Object.defineProperty(this, "currentFanSpeed", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "currentFuelLevel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 100
        });
        Object.defineProperty(this, "alarm", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ""
        });
        Object.defineProperty(this, "currentOutsideTemperature", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 5
        });
        Object.defineProperty(this, "currentFuelStream", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "currentStatus", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "Stopped"
        });
        Object.defineProperty(this, "counter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "fuelUsed", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        this.id = id;
        setInterval(() => {
            this.updateCounter();
            this.update();
        }, 1000);
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
    setFuelLevel(newFuelLevel) {
        this.currentFuelLevel = newFuelLevel;
    }
    startBoiler() {
        this.currentStatus = "Working";
        this.currentFanSpeed = 100;
    }
    stopBoiler() {
        this.currentStatus = "Stopped";
        this.currentFanSpeed = 0;
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
                this.breakUpdate();
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
    breakUpdate() { }
    workingUpdate() {
        if (this.currentTemperature < 70) {
            if (this.counter % this.figureSpeedOfTempFalling() === 0) {
                this.currentTemperature += 1;
            }
            if (this.counter % 30 === 0) {
                this.currentFuelStream = 15;
                this.fuelUsed += 5;
            }
            if (this.counter % 40 === 0) {
                this.currentFuelStream = 0;
            }
            if (this.fuelUsed === 20) {
                this.fuelUsed = 0;
                this.currentFuelLevel -= 1;
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
            //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            default: {
                break;
            }
        }
    }
}
exports.Boiler = Boiler;
