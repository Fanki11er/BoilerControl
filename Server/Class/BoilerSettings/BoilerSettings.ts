export class BoilerSettings {
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

	constructor(userSettings?: any, advancedSettings?: any) {
		if (userSettings && advancedSettings) {
			this.userSettings = userSettings;
			this.advancedSettings = advancedSettings;
		}
	}

	setUserSettings(desiredTemperature: number, boilerHysteresis: number) {
		this.userSettings.desiredTemperature = desiredTemperature;
		this.userSettings.boilerHysteresis = boilerHysteresis;
	}

	setAdvancedSettings(
		fanSpeed: number,
		fanSpeedInSupervision: number,
		supervisionWaitingTime: number,
		fuelStream: number,
		fuelBreakTime: number,
		fuelStreamTime: number
	) {
		(this.advancedSettings.fanSpeed = fanSpeed),
			(this.advancedSettings.fanSpeedInSupervision = fanSpeedInSupervision),
			(this.advancedSettings.supervisionWaitingTime = supervisionWaitingTime),
			(this.advancedSettings.fuelStream = fuelStream),
			(this.advancedSettings.fuelBreakTime = fuelBreakTime),
			(this.advancedSettings.fuelStreamTime = fuelStreamTime);
	}
}
