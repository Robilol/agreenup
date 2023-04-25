/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
              custom: '993px'
            },
            colors:
                {
                    'primary-900': '#1d3d31',
                    'primary-800': '#26584a',
                    'primary-700': '#2b6857',
                    'primary-600': '#307765',
                    'primary-500': '#348471',
                    'primary-400': '#429684',
                    'primary-300': '#5ba897',
                    'primary-200': '#85c0b4',
                    'primary-100': '#b4d9d1',
                    'primary-50': '#e0efed',
                    'secondary-300': 'FFF6A7',
                    'blob-2': 'B0C9A7',
                    'blob-3': 'EDD599',
                    'blob-4': '336246'
                },
            fontFamily:
                {
                    'sporting-grotesque': 'Sporting Grotesque',
                    'hk-grotesk': 'HK Grotesk'
                },
            borderRadius:
                {
                    none: '0',
                    xs: '0.125rem',
                    sm: '0.3125rem',
                    default: '2.5rem',
                    full: '9999px'
                },
        },
    },
    plugins: [],
}
