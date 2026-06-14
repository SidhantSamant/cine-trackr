/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/app/**/*.{js,ts,tsx}',
        './src/components/**/*.{js,ts,tsx}',
        './src/context/**/*.{js,ts,tsx}',
    ],

    presets: [require('nativewind/preset')],
    theme: {
        extend: {
            colors: {
                primary: '#ff964f',
                background: '#121212',
            },
        },
    },
    plugins: [],
};
