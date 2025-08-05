// const { createGlobPatternsForDependencies } = require('@nx/next/tailwind');

// The above utility import will not work if you are using Next.js' --turbo.
// Instead you will have to manually add the dependent paths to be included.
// For example
// ../libs/buttons/**/*.{ts,tsx,js,jsx,html}',                 <--- Adding a shared lib
// !../libs/buttons/**/*.{stories,spec}.{ts,tsx,js,jsx,html}', <--- Skip adding spec/stories files from shared lib

// If you are **not** using `--turbo` you can uncomment both lines 1 & 19.
// A discussion of the issue can be found: https://github.com/nrwl/nx/issues/26510

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './{src,pages,components,app}/**/*.{ts,tsx,js,jsx,html}',
    '!./{src,pages,components,app}/**/*.{stories,spec}.{ts,tsx,js,jsx,html}',
    //     ...createGlobPatternsForDependencies(__dirname)
  ],
  theme: {
		extend: {
			fontFamily: {
				custom: [
					'Goo'
				]
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				mBlue: {
					50: '#e6eff8',
					100: '#cce0f2',
					200: '#99c2e5',
					300: '#66a3d9',
					400: '#3385cc',
					500: '#073c83',
					600: '#06336f',
					700: '#052a5c',
					800: '#042148',
					900: '#031835',
					950: '#020e21',
				    },
				    mMaroon: {
					50: '#f4e9ef',
					100: '#e9d4e0',
					200: '#d3a9c1',
					300: '#bd7ea1',
					400: '#a75382',
					500: '#7a2357',
					600: '#681e4a',
					700: '#56193d',
					800: '#441430',
					900: '#320f23',
					950: '#200a16',
				    },
				    mCrimson: {
					50: '#fde8eb',
					100: '#fbd1d7',
					200: '#f7a3af',
					300: '#f37587',
					400: '#ef475f',
					500: '#d20f35',
					600: '#b10d2e',
					700: '#900b26',
					800: '#6f091e',
					900: '#4e0616',
					950: '#2d040e',
				    },
			},
			backgroundImage: {
				'maind': 'linear-gradient(180deg, #073C83, #7A2357, #D20F35)',
				'mainda': 'linear-gradient(180deg, #073C83 0%, #7A2357 50%, #D20F35 100%)',
				'maindb': 'linear-gradient(135deg, #073C83 0%, #D20F35 100%)',
				'maindc': 'linear-gradient(90deg, #073C83 0%, #7A2357 50%, #D20F35 100%)',
				'maindd': 'linear-gradient(225deg, #0a2f66 0%, #7A2357 60%, #8c162f 100%)',
				'mainde': 'linear-gradient(90deg, #073C83 0%, #b83262 50%, #D20F35 100%)',
			    },
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			maxHeight: {
				'200': '200px'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fadeIn 0.2s ease-in-out',
			}
		}
	},
  plugins: [],
};
