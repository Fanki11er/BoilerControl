export const theme: Theme = {
	colors: {
		backgroundBlue: "rgba(1, 13, 38, 1)",
		lightBlue: "rgba(19, 179, 242, 1)",
		green: "rgba(131, 179, 59, 1)",
		lightYellow: "rgba(225, 210, 30, 1)",
		orange: "rgba(255, 140, 0, 1)",
		red: "rgba(217, 20, 36, 1)",
		blueGray: "rgba(148, 175, 211, 1)",
		darkerBlue: "rgba(2, 40, 115, 1)",
		darkBlue: "rgba(2, 31, 89, 1)",
		transparentGreen: "rgba(131, 179, 59, 0.5)",
	},

	fontSizes: {
		smallDevices: {},
		mediumDevices: {
			normal: "1em",
			medium: "1.2em",
		},
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
	colors: {
		backgroundBlue: string;
		lightBlue: string;
		green: string;
		transparentGreen: string;
		lightYellow: string;
		orange: string;
		red: string;
		blueGray: string;
		darkerBlue: string;
		darkBlue: string;
	};
	fontSizes: {
		smallDevices: {};
		mediumDevices: {
			normal: string;
			medium: string;
		};
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
