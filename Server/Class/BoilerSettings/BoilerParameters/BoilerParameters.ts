import { BoilerStatus } from "../../../Types/Types";

export class BoilerParameters {
	currentTemperature: number;
	currentFanSpeed = 0;
	currentFuelLevel: number;
	alarm = "";
	currentOutsideTemperature: number;
	currentFuelStream = 0;
	currentStatus: BoilerStatus = "Stopped";
	constructor() {
		this.currentOutsideTemperature = this.randomSetOutsideTemperature();
		this.currentFuelLevel = this.randomSetFuelLevel();
		this.currentTemperature = this.currentOutsideTemperature + 10;
	}

	private randomSetOutsideTemperature() {
		return Math.random() < 0.5 ? -1 : 1 * Math.floor(Math.random() * 30);
	}

	private randomSetFuelLevel() {
		return Math.floor(Math.random() * 100);
	}
}
