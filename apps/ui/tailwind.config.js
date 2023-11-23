/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        // primary
        "primary-blue": "#2F80ED",
        "primary-gray": {
          DEFAULT: "#828282",
          dark: "#4F4F4F",
          light: "#E0E0E0",
        },
        // indicator
        "indicator-brown": "#F8B76B",
        "indicator-purple": "#8785FF",
        "indicator-red": "#EB5757",
        "indicator-yellow": "F2C94C",
        // chats
        "chats-brown": {
          DEFAULT: "#FCEED3",
          dark: "#E5A443",
        },
        "chats-purple": {
          DEFAULT: "#EEDCFF",
          dark: "#9B51E0",
        },
        "chats-green": {
          DEFAULT: "#D2F2EA",
          dark: "#43B78D",
        },
        // stickers
        "stickers-purple": {
          DEFAULT: "#F9E0FD",
          dark: "#CFCEF9",
          light: "#E9F3FF",
        },
        "stickers-brown": "#FDCFA4",
        "stickers-yellow": "#F9E9C3",
        "stickers-teal": "#AFEBDB",
        "stickers-green": "#CBF1C2",
      },
    },
  },
  plugins: [],
};
