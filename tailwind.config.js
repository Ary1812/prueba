/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js,php}", "./public/**/*.php"],
    safelist: [
        'text-indigo-600',
      ],
    theme: {
        extend: {
            colors: {
                gray_light: "#C3C3C3",
                grayf: "#777676",
                gray1: "#2E2E2E",
                yellowf: "#F4D03F",
                yellowf1: "#ffb701",
                greenf: "#4CAF50",
                greenf1: "#8BC34A",
                greenf2: "#38FF88",
                redf: "#FF2A30",
                ok: "#4CAF50",
                orangef: "#E95B23",
                tr: "#aa0000",
                bluef1: "#297fb8",
                bluef2: "#589dc7",
            },
            fontFamily: {
                titulo: ["Parisienne", "cursive"],
                roboto: ["Roboto", "sans-serif"],
            },
        },
    },
    plugins: [],
};