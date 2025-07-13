/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
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
      fontFamily: {
        heading: ['Clash Display', 'sans-serif'],
        body: ['Cabinet Grotesk', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        accent: "hsl(var(--primary))",
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        card: "hsl(var(--secondary))",
        "card-foreground": "hsl(var(--secondary-foreground))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(180deg, var(--black-deep) 0%, var(--dark-grey) 100%)',
        'gradient-overlay': 'linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(20, 20, 22, 0.95) 100%)',
        'hero-pattern': 'url("/assets/hero-background.jpg")', // Placeholder for the gritty black and yellow striped image
      },
      boxShadow: {
        'premium': '0 4px 30px rgba(0, 0, 0, 0.15)',
        'yellow-glow': '0 0 15px rgba(255, 234, 0, 0.6)', // Subtle yellow glow
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
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        },
        'fade-in': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'typewriter': {
          'to': { width: '100%' },
        },
        'blink-caret': {
          '50%': { 'border-color': 'transparent' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
        'fade-in': 'fade-in 1s ease-out forwards',
        'typewriter': 'typewriter 4s steps(44) forwards, blink-caret .75s step-end infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
