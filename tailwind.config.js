// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#FFFAF0", // Ivory
        "secondary-bg": "#E0E0E0", // Light Gray
        "primary-text": "#1A2A40", // Dark Blue
        "secondary-text": "#757575", // Gray
        "primary-button": "#D32F2F", // Red
        "hover-button": "#FF0000", // Bright Red
        "secondary-button": "#FFD700", // Gold
        "navbar-bg": "#1A2A40", // Dark Blue
        "footer-bg": "#1A2A40", // Dark Blue
      },
      screens: {
        xs: "480px", // Extra small devices
        sm: "640px", // Small devices
        md: "768px", // Medium devices (tablets)
        lg: "1024px", // Large devices (laptops)
        xl: "1280px", // Extra large devices (desktops)
        "2xl": "1536px", // 2X large screens
      },
    },
  },
  plugins: [],
};
