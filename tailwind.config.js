/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        midnight: {
          950: "#030611",
          900: "#060a1a",
          850: "#091026",
          800: "#0c1533",
          700: "#13204a",
          600: "#1d2e68",
        },
        electric: {
          blue: "#0062ff",
          cyan: "#00d4ff",
          indigo: "#4f46e5",
          purple: "#8b5cf6",
        },
        accent: {
          orange: "#ff5e14",
          amber: "#f59e0b",
          coral: "#ff7a45",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'glow-blue': '0 0 25px -5px rgba(0, 102, 255, 0.4)',
        'glow-cyan': '0 0 25px -5px rgba(0, 212, 255, 0.4)',
        'glow-orange': '0 0 25px -5px rgba(255, 94, 20, 0.4)',
        'glow-subtle': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}

