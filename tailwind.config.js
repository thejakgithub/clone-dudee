module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        "dudee-green": "#8ad0c5",
      },
      fontFamily: {
        "maven-pro": ["Maven Pro", "Noto Sans Thai"],
        "noto-santhai": ["Noto Sans Thai"],
      },
      backgroundImage: {
        "header-home": "url('/src/assets/img/bg-header.jpeg')",
        work: "url('/src/assets/img/bg-work.jpeg')",
      },
    },
  },

  plugins: [require("tailwind-scrollbar-hide")],
};
