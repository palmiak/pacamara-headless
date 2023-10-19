/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		backgroundSize: {
			'gradient-dashed': '20px 2px, 100% 2px',
		},
		extend: {
			boxShadow: {
				'pacamara-shadow': '0px 25px 50px -12px rgba(0, 0, 0, 0.3)',
			},
			fontFamily: {
				'pacamara-inter': ['"Inter"', 'sans-serif'],
				'pacamara-space': ['"Space Grotesk"', 'sans-serif'],
			},
			colors: {
				'pacamara-primary': '#003049',
				'pacamara-secondary': '#B2A4FF',
				'pacamara-accent': '#FFB4B4',
				'pacamara-dark': '#000E14',
				'pacamara-white': '#ffffff',
			},
			aspectRatio: {
				'9/10': '9 / 16',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
