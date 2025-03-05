// tailwind.config.cjs
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
	theme: {
		extend: {
			colors: {
				// Colores personalizados
				primary: '#D32F2F', // Rojo vibrante para acentos (por ejemplo, botones o enlaces)
				secondary: '#FFC107', // Amarillo para resaltar
				accent: '#FF5722', // Naranja para hover y detalles
				neutral: '#FFFFFF', // Fondo blanco
			},
			fontFamily: {
				// Fuentes personalizadas: puedes elegir las que desees
				sans: ['"Open Sans"', 'ui-sans-serif', 'system-ui'],
				heading: ['"Merriweather"', 'serif'],
			},
		},
	},
	plugins: [],
};
