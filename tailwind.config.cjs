/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    mode: 'jit',
    theme: {
        screens: {
            tablet: '640px',
            desktop: '1000px',
            large: '1280px'
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '0.9rem',
                tablet: '2rem',
                desktop: '2rem',
            },
        },
        extend: {
            fontFamily: {
                sans: ['Bayon', 'Helvetica', ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: {
                'contact-bg': `url(${process.env.BASE_URL}images/contsct-bg.webp)`,
                'contact-map-bg': `url(${process.env.BASE_URL}images/contact-map-bg.webp")`,
            },
            colors: {
                white: {
                    DEFAULT: 'var(--white)',
                },
                blue: {
                    light: 'var(--blue-light)',
                    dark: 'var(--blue-dark)',
                },
                black: {
                    DEFAULT: 'var(--black)',
                    light: 'var(--black-light)',
                    dark: 'var(--black-dark)',
                },
                red: {
                    DEFAULT: 'var(--red)',
                },
            },
            maxWidth: {
                container: '1442px',
            },
        },
    },
    plugins: [],
};
