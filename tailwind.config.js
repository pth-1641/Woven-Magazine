module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
            serif: ['Averia Serif Libre', 'cursive'],
        },
        extend: {
            maxWidth: {
                'screen-2lg': '1120px',
                '2md': '480px',
            },
            backgroundColor: {
                'white-0.9': 'rgba(255,255,255,0.9)',
            },
        },
    },
    plugins: [],
};
