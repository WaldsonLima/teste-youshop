/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./error.vue",
	],
	theme: {
		extend: {
			colors: {
				"white": "#FFFFFF",
				"black": "#000000",
				"title-red": "#C41740",
				"title-yellow": "#EA9C28",
				"dark-gray-text": "#1D2939",
				"light-gray-text": "#475467",
				"date-gray-text": "#667085",
				"background-content": "#F2F4F7",
				"dark-gray-stroke": "#D0D5DD",
				"light-gray-stroke": "#E4E7EC"
			},
		},
	},
	plugins: [],
	prefix: "tw-"
};

