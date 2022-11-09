import {
	BoilerCurrentParameters,
	BoilerSnapshot,
	BoilerStatus,
	PanelOptions,
} from "../../Types/Types";
import { BoilerParameters } from "../BoilerSettings/BoilerParameters/BoilerParameters";
import { BoilerSettings } from "../BoilerSettings/BoilerSettings";

export class Boiler {
	private id;
	private counter = 0;
	private fuelUsed = 0;

	private boilerSettings!: BoilerSettings;
	private boilerParameters!: BoilerCurrentParameters;

	constructor(id: string, snapshot?: BoilerSnapshot) {
		if (snapshot) {
			this.reCreateFromSnapshot(snapshot);
		} else {
			this.id = id;
			this.createNewParams();
		}

		setInterval(() => {
			this.updateCounter();
			this.update();
		}, 1000);
	}

	private reCreateFromSnapshot = (snapshot: BoilerSnapshot) => {
		this.boilerSettings = new BoilerSettings(
			snapshot.boilerSettings.userSettings,
			snapshot.boilerSettings.advancedSettings
		);
		this.boilerParameters = snapshot.boilerCurrentParameters;
		this.id = snapshot.boilerId;
	};

	private createNewParams = () => {
		this.boilerParameters = new BoilerParameters();
		this.boilerSettings = new BoilerSettings();
	};

	getId() {
		return this.id;
	}

	getAlarm() {
		return this.boilerParameters.alarm;
	}

	getBoilerInfo() {
		return {
			currentFanSpeed: this.boilerParameters.currentFanSpeed,
			currentFuelLevel: this.boilerParameters.currentFuelLevel,
			currentOutsideTemperature:
				this.boilerParameters.currentOutsideTemperature,
			currentTemperature: this.boilerParameters.currentTemperature,
			currentFuelStream: this.boilerParameters.currentFuelStream,
			currentStatus: this.boilerParameters.currentStatus,
			alarm: this.boilerParameters.alarm,
		} as BoilerInfo;
	}

	getBoilerSettings() {
		return this.boilerSettings;
	}
	setBoilerSettings(settings: any) {
		const { desiredTemperature, boilerHysteresis } = settings;
		const {
			fanSpeed,
			fanSpeedInSupervision,
			supervisionWaitingTime,
			fuelStream,
			fuelBreakTime,
			fuelStreamTime,
		} = settings;

		this.boilerSettings.setUserSettings(desiredTemperature, boilerHysteresis);
		this.boilerSettings.setAdvancedSettings(
			fanSpeed,
			fanSpeedInSupervision,
			supervisionWaitingTime,
			fuelStream,
			fuelBreakTime,
			fuelStreamTime
		);
		const status = this.boilerParameters.currentStatus as PanelOptions;
		this.stopBoiler();
		this.changeStatus(status);
	}

	setFuelLevel(newFuelLevel: number) {
		this.boilerParameters.currentFuelLevel = newFuelLevel;
	}

	startBoiler() {
		if (this.boilerParameters.alarm === "") {
			this.boilerParameters.currentStatus = "Working";
			this.boilerParameters.currentFanSpeed =
				this.boilerSettings.advancedSettings.fanSpeed;
		}
	}

	stopBoiler() {
		this.boilerParameters.currentStatus = "Stopped";
		this.boilerParameters.currentFanSpeed = 0;
		this.boilerParameters.currentFuelStream = 0;
	}

	resetAlarms() {
		this.boilerParameters.alarm = "";
	}

	private updateCounter() {
		if (this.counter <= 260) {
			this.counter++;
		} else {
			this.counter = 0;
		}
	}

	private update() {
		switch (this.boilerParameters.currentStatus) {
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
		if (this.boilerParameters.currentOutsideTemperature < 0) {
			return 10;
		} else if (this.boilerParameters.currentOutsideTemperature < 10) {
			return 5;
			//!!
		} else {
			return 30;
		}
	}

	private stopUpdate() {
		if (
			this.boilerParameters.currentTemperature >
				this.boilerParameters.currentOutsideTemperature &&
			this.boilerParameters.currentTemperature >= 8
		) {
			if (this.counter % this.figureSpeedOfTempFalling() === 0) {
				this.boilerParameters.currentTemperature -= 1;
			}
		}
	}

	private superviseUpdate() {
		const { fanSpeedInSupervision, supervisionWaitingTime } =
			this.boilerSettings.advancedSettings;
		const { desiredTemperature, boilerHysteresis } =
			this.boilerSettings.userSettings;
		if (this.counter % supervisionWaitingTime === 0) {
			this.boilerParameters.currentFanSpeed = fanSpeedInSupervision;
		}
		if ((this.counter % supervisionWaitingTime) + 5 === 0) {
			this.boilerParameters.currentFanSpeed = 0;
		}
		if (
			this.boilerParameters.currentTemperature <
			desiredTemperature - boilerHysteresis
		) {
			this.boilerParameters.currentStatus = "Working";
		}
		if (this.counter % this.figureSpeedOfTempFalling() === 0) {
			this.boilerParameters.currentTemperature -= 1;
		}
	}
	private workingUpdate() {
		const { fuelBreakTime, fuelStream, fuelStreamTime } =
			this.boilerSettings.advancedSettings;
		const { desiredTemperature } = this.boilerSettings.userSettings;
		if (this.boilerParameters.currentTemperature < desiredTemperature) {
			if (this.counter % this.figureSpeedOfTempFalling() === 0) {
				this.boilerParameters.currentTemperature += 1;
			}
			if (this.counter % fuelBreakTime === 0) {
				this.boilerParameters.currentFuelStream = fuelStream;
				this.fuelUsed += fuelStream / (fuelStreamTime / 10);
			}
			if (this.counter % (fuelBreakTime + fuelStreamTime) === 0) {
				this.boilerParameters.currentFuelStream = 0;
			}

			if (this.fuelUsed >= 15) {
				this.fuelUsed = 0;
				this.boilerParameters.currentFuelLevel -= 1;
			}

			if (this.boilerParameters.currentFuelLevel <= 0) {
				this.stopBoiler();
				this.boilerParameters.alarm = "No fuel!";
			}
		} else {
			this.boilerParameters.currentStatus = "Idle";
			this.boilerParameters.currentFanSpeed = 0;
			this.boilerParameters.currentFuelStream = 0;
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
			case "RESET": {
				this.resetAlarms();
			}
			default: {
				break;
			}
		}
	}

	exportSnapshot = () => {
		return {
			boilerId: this.id,
			boilerCurrentParameters: this.boilerParameters,
			boilerSettings: this.boilerSettings,
		} as BoilerSnapshot;
	};
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
