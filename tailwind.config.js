module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        hurricane: ['Inter', 'sans-serif'],
      },
      colors: {
        dark: {
          DEFAULT: '#101828',
        },
        yellow: {
          DEFAULT: '#ffc531',
        },
        red: {
          DEFAULT: '#e44848',
          hover: '#d84343',
        },
        grey: {
          text: '#475467',
          lightGrey: '#f2f4f7',
          lightGreyInput: '#f7f7f7',
          lightGreyTextForm: 'rgba(229, 231, 235, 0.6)',
          lightGreyTextPlaceholder: 'rgba(229, 231, 235, 0.8)',
        },
      },
    },
  },
  plugins: [],
};
