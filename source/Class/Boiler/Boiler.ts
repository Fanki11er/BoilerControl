import { BoilerStatus, PanelOptions } from "../../Types/types";

export class Boiler {
	private id;
	private currentTemperature = 16;
	private currentFanSpeed = 0;
	private currentFuelLevel = 100;
	private alarm = "";
	private currentOutsideTemperature = 5;
	private currentFuelStream = 0;
	private currentStatus: BoilerStatus = "Stopped";
	private counter = 0;
	private fuelUsed = 0;

	constructor(id: string) {
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
		} as BoilerInfo;
	}

	setFuelLevel(newFuelLevel: number) {
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
				this.breakUpdate();
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

	private breakUpdate() {}
	private workingUpdate() {
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
