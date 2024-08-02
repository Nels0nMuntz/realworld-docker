const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        xxs: "375px",
        xs: "390px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1024px",
        "2xl": "1200px",
        "3xl": "1600px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "off-white": "var(--off-white)",
        "white-muted": "var(--white-muted)",
        blue: "var(--blue)",
        "blue-light": "var(--blue-light)",
        grays: "var(--grays)",
        "grays-dark": "var(--grays-dark)",
        "grays-muted": "var(--grays-muted)",
        red: "var(--red)",
        snowbank: "var(--snowbank)",
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      width: {
        sidebar: "var(--sidebar-width)",
      },
      height: {
        header: "var(--header-height)",
        "horizontal-scrollbar": "var(--horizontal-scrollbar-height)",
      },
      boxShadow: {
        popup: "0 6px 30px 0 rgba(123, 127, 145, 0.07)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".next-hide-after": {
            "& + *:after": {
              display: "none",
            },
          },
        },
        ["responsive", "hover"],
      );
    },
  ],
};
