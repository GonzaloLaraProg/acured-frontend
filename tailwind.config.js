/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
    extend: {
      colors: {
        neutralswhite: "var(--neutralswhite)",
        "primary-50": "var(--primary-50)",
        "primary-100": "var(--primary-100)",
        "primary-200": "var(--primary-200)",
        "primary-400": "var(--primary-400)",
        "primary-500": "var(--primary-500)",
        "primary-600": "var(--primary-600)", // <- NUEVO
        "primary-700": "var(--primary-700)",
        "primary-800": "var(--primary-800)",
        "primary-900": "var(--primary-900)",
        "shadow-50": "var(--shadow-50)",
        "shadow-100": "var(--shadow-100)",
        "shadow-600": "var(--shadow-600)",
        "shadow-800": "var(--shadow-800)",
        "shadow-900": "var(--shadow-900)",

        "terciary-50": "var(--terciary-50)",
        "terciary-600": "var(--terciary-600)",
        "otherswhite": "var(--otherswhite)",

        // shadow white
        "shadow-white-sm": "var(--shadow-white-sm)",

        // tokens hsl del theme base
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
      },
      fontFamily: {
        "heading-h3": "var(--heading-h3-font-family)",
        "heading-h6": "var(--heading-h6-font-family)",
        "heading-h7": "var(--heading-h7-font-family)",
        "paragraph-p2-semi-bold": "var(--paragraph-p2-semi-bold-font-family)",
        "paragraph-p3": "var(--paragraph-p3-font-family)",
        "subtitle-1": "var(--subtitle-1-font-family)",
        "text-text-sm-text-sm-font-normal":
          "var(--text-text-sm-text-sm-font-normal-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: {
        "shadow-base": "var(--shadow-base)",
        "shadow-sm": "var(--shadow-sm)",
        "shadow-xs": "var(--shadow-xs)", // <- NUEVO (lo usas en la UI)
        "shadow-md": "var(--shadow-md)", // <- NUEVO (lo usas en la UI)
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
