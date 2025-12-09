/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#C5A059', // Elegant Bronze/Gold
                secondary: '#FAF6F0', // Warm Cream
                accent: '#D4AF37', // Gold Accent
                text: {
                    DEFAULT: '#2C2C2C',
                    light: '#666666'
                }
            },
            fontFamily: {
                serif: ['Playfair Display', 'serif'],
                sans: ['Montserrat', 'sans-serif'],
                heading: ['Cormorant Garamond', 'serif'], // Adding a more "classic" heading font if desired, or stick to Playfair
            }
        },
        container: {
            center: true,
            padding: '2rem',
        },
    },
    plugins: [],
}
