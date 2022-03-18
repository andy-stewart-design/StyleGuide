const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'white': '#ffffff',
			'black': '#000000',
			'magenta': '#FF0096',
			'gray': {
				'900': '#181818'
			}
		},
		fontFamily: {
			'sans': ['Din', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
			],
			'serif': ['Chron', 'ui-serif', 'Georgia'],
		},
		extend: {
			borderWidth: {
				'12': '12px',
				'16': '16px',
				'20': '20px',
			},
			transitionDelay: {
				'0': '0ms',
			},
			transitionTimingFunction: {
				'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
				'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
				'in-quart': 'cubic-bezier(0.5, 0, 0.75, 0)',
				'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
			}
		}
	},

	plugins: []
};

module.exports = config;
