import type { Config } from "tailwindcss";

const config = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          deep: "var(--brand-deep)",
          1: "var(--brand-1)",
          2: "var(--brand-2)",
          3: "var(--brand-3)",
        },
        fg: {
          DEFAULT: "var(--fg)",
          soft: "var(--fg-soft)",
          mute: "var(--fg-mute)",
        },
        line: {
          DEFAULT: "var(--line)",
          strong: "var(--line-strong)",
        },
        navy: {
          950: "#030B1A",
          900: "#0A1E3D",
          800: "#0F2D5E",
          700: "#163D7A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "pf-sm": "var(--radius-sm)",
        "pf-md": "var(--radius)",
        "pf-lg": "var(--radius-lg)",
        "pf-xl": "var(--radius-xl)",
      },
      keyframes: {
        drift: {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "100%": { transform: "translate(40px, -30px) scale(1.1)" },
        },
        shimmer: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        spin: { to: { transform: "rotate(360deg)" } },
        revealUp: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        drift: "drift 18s ease-in-out infinite alternate",
        shimmer: "shimmer 6s ease-in-out infinite",
        spin: "spin 30s linear infinite",
        revealUp: "revealUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
