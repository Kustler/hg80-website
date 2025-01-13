/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				pianoGray:"#202020",
			},
			backgroundImage: {
				whiteKeyPress: "linear-gradient(180deg, #F7F7F7 0%, #666666 100%)",
				blackKeyPress: "linear-gradient(180deg, #202020 0%, #000000 100%)",
			},
			boxShadow: {
				heroBorder: "4px -4px 12px 0px #FFFFFF99, -4px 4px 12px 0px #FFFFFF99",
				cardHover: "0px 0px 10px 0px #FF0000",
			},
			dropShadow: {
				redGlow: "0 0 10px #ff0000",
			},
		},
	},
	plugins: [],
};
