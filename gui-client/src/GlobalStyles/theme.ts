export const theme: Theme = {
	colors: {},
	fontSizes: {
		smallDevices: {},
		mediumDevices: {},
		largeDevices: {},
	},

	devices: {
		small: `min-width: 600px`,
		medium: `min-width: 800px`,
		large: `min-width: 1440px`,
		veryLarge: "min-width: 2500px",
	},
	fontFamilies: {},
};

export type Theme = {
	colors: {};
	fontSizes: {
		smallDevices: {};
		mediumDevices: {};
		largeDevices: {};
	};

	devices: {
		small: string;
		medium: string;
		large: string;
		veryLarge: string;
	};
	fontFamilies: {};
};

export type StyledTheme = {
	theme: Theme;
};
