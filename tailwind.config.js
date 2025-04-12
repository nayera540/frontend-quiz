/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "red": "#EE5454",
                "navy": "#3B4D66",
                "green": "#26D782",
                "purple": "#A729F5",
                "pure-white": "#FFF",
                "dark-navy": "#313E51",
                "grey-navy": "#626C7F",
                "light-grey": "#F4F6FA",
                "light-bluish": "#ABC1E1",
                
            }
        },
    },
    plugins: [],
}