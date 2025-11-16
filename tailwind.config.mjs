// tailwind.config.mjs

/** @type {import('tailwindcss').Config} */
export default {
	// Tells Tailwind where to look for class names to build the CSS bundle
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'], 
	theme: {
		extend: {
			colors: {
				// Your custom professional red color
				'drop-red': '#B91C1C', 
				'drop-light': '#F9FAFB', 
			},
			// Define custom animation utilities (e.g., animate-fade-in)
			animation: {
				'fade-in': 'fadeIn 1s ease-out forwards',
				'fade-in-down': 'fadeInDown 0.8s ease-out forwards',
				'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
			},
			// Define the actual CSS keyframes for the animations
			keyframes: {
				fadeIn: {
					'from': { opacity: 0 },
					'to': { opacity: 1 },
				},
				fadeInDown: {
					'from': { opacity: 0, transform: 'translateY(-20px)' },
					'to': { opacity: 1, transform: 'translateY(0)' },
				},
				fadeInUp: {
					'from': { opacity: 0, transform: 'translateY(20px)' },
					'to': { opacity: 1, transform: 'translateY(0)' },
				},
			},
		},
	},
	plugins: [],
};