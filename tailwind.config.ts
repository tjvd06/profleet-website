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
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
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
          950: '#030B1A',
          900: '#0A1E3D',
          800: '#0F2D5E',
          700: '#163D7A',
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Geist", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
        sans: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "pf-sm": "var(--radius-sm)",
        "pf-md": "var(--radius)",
        "pf-lg": "var(--radius-lg)",
        "pf-xl": "var(--radius-xl)",
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
        drift: {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "100%": { transform: "translate(40px, -30px) scale(1.1)" },
        },
        "pf-pulse": {
          "0%, 100%": { boxShadow: "0 0 0 3px oklch(0.65 0.18 145 / 0.25)" },
          "50%": { boxShadow: "0 0 0 8px oklch(0.65 0.18 145 / 0)" },
        },
        shimmer: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        floatUp: {
          "0%": { transform: "rotateX(8deg) rotateY(-4deg) translateY(0)" },
          "100%": { transform: "rotateX(8deg) rotateY(-4deg) translateY(-10px)" },
        },
        spin: { to: { transform: "rotate(360deg)" } },
        revealUp: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        drift: "drift 18s ease-in-out infinite alternate",
        "pf-pulse": "pf-pulse 2.4s ease-in-out infinite",
        shimmer: "shimmer 6s ease-in-out infinite",
        floatUp: "floatUp 5s ease-in-out infinite alternate",
        spin: "spin 30s linear infinite",
        revealUp: "revealUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss/plugin")(function ({ addVariant }: { addVariant: any }) {
      addVariant("data-checked", ["&[data-state=checked]", "&[data-checked]"]);
      addVariant("data-unchecked", ["&[data-state=unchecked]", "&[data-unchecked]"]);
      addVariant("data-disabled", ["&[data-disabled]", "&[disabled]"]);
    }),
  ],
} satisfies Config;

export default config;
