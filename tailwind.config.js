/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false,
    theme: {
        extend: {
            fontFamily: {
                inter: ['"Inter"', ...defaultTheme.fontFamily.sans]
            },
            colors: {
                blue: {
                    DEFAULT: '#2E32BE'
                }
            }
        }
    },
    plugins: []
};
