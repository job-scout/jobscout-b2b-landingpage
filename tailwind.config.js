/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#080E4B",

				black: "#403D4E",
				text: "#3F468F",
				btnbackground: "#D5D5EC",
			},
		},
	},
	plugins: [],
};
