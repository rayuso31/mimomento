/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#2A9D8F', // Clean Teal/Turquoise
                secondary: '#EDF6F5', // Very light mint/white
                accent: '#264653', // Dark Blue/Green for text/contrast
                text: {
                    DEFAULT: '#2C3E50', // Dark Slate Blue
                    light: '#7F8C8D' // Grey
                }
            },
            fontFamily: {
                serif: ['Playfair Display', 'serif'],
                sans: ['Montserrat', 'sans-serif'],
                heading: ['Montserrat', 'sans-serif'], // More modern/clinical look
            }
        },
        container: {
            center: true,
            padding: '2rem',
        },
    },
    plugins: [],
}
