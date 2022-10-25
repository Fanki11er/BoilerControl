import { BoilerStatus, PanelOptions } from "../../Types/types";
import { BoilerSettings } from "../BoilerSettings/BoilerSettings";

export class Boiler {
	private id;
	private currentTemperature: number;
	private currentFanSpeed = 0;
	private currentFuelLevel = 100;
	private alarm = "";
	private currentOutsideTemperature: number;
	private currentFuelStream = 0;
	private currentStatus: BoilerStatus = "Stopped";
	private counter = 0;
	private fuelUsed = 0;

	private boilerSettings: BoilerSettings;

	constructor(id: string) {
		this.id = id;
		this.currentOutsideTemperature = this.setOutsideTemperature();
		this.currentTemperature = this.currentOutsideTemperature + 10;
		this.boilerSettings = new BoilerSettings();

		setInterval(() => {
			this.updateCounter();
			this.update();
		}, 1000);
	}

	private setOutsideTemperature() {
		return Math.random() < 0.5 ? -1 : 1 * Math.floor(Math.random() * 30);
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
		} as BoilerInfo;
	}

	getBoilerSettings() {
		return this.boilerSettings;
	}
	setBoilerSettings(settings: BoilerSettings) {
		console.log(settings);
	}

	setFuelLevel(newFuelLevel: number) {
		this.currentFuelLevel = newFuelLevel;
	}

	startBoiler() {
		this.currentStatus = "Working";
		this.currentFanSpeed = this.boilerSettings.advancedSettings.fanSpeed;
	}

	stopBoiler() {
		this.currentStatus = "Stopped";
		this.currentFanSpeed = 0;
		this.currentFuelStream = 0;
	}

	private updateCounter() {
		if (this.counter <= 260) {
			this.counter++;
		} else {
			this.counter = 0;
		}
	}

	private update() {
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

	private figureSpeedOfTempFalling() {
		if (this.currentOutsideTemperature < 0) {
			return 10;
		} else if (this.currentOutsideTemperature < 10) {
			return 5;
			//!!
		} else {
			return 30;
		}
	}

	private stopUpdate() {
		if (
			this.currentTemperature > this.currentOutsideTemperature &&
			this.currentTemperature >= 8
		) {
			if (this.counter % this.figureSpeedOfTempFalling() === 0) {
				this.currentTemperature -= 1;
			}
		}
	}

	private superviseUpdate() {
		const { fanSpeedInSupervision, supervisionWaitingTime } =
			this.boilerSettings.advancedSettings;
		const { desiredTemperature, boilerHysteresis } =
			this.boilerSettings.userSettings;
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
	private workingUpdate() {
		const { fuelBreakTime, fuelStream, fuelStreamTime } =
			this.boilerSettings.advancedSettings;
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
		} else {
			this.currentStatus = "Idle";
			this.currentFanSpeed = 0;
			this.currentFuelStream = 0;
		}
	}

	getBoilerParameters() {
		return this.getBoilerInfo();
	}

	changeStatus(status: PanelOptions) {
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

export type BoilerInfo = {
	currentTemperature: number;
	currentFanSpeed: number;
	currentFuelLevel: number;
	currentOutsideTemperature: number;
	currentFuelStream: number;
	alarm: string;
	currentStatus: BoilerStatus;
};
