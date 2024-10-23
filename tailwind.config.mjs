/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				yellow: { 50: '#fcc406' },
				blue: { 50: '#010132' },
				gray: { 50: '#757575' }
			},
		},
		plugins: [],
	}
}
