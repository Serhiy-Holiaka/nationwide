/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Bayon', 'Helvetica', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                white: {
                    DEFAULT: 'var(--white)'
                },
                blue: {
                    light: 'var(--blue-light)'
                },
                black: {
                    DEFAULT: 'var(--black)',
                    light: 'var(--black-light)',
                    dark: 'var(--black-dark)'
                },
                red: {
                    DEFAULT: 'var(--red)'
                },
            },
        },
    },
    plugins: [],
};
