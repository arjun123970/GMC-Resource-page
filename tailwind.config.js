export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#172238",
        ink: "#fff9ec",
        brass: "#786d5d",
        bullion: "#c49a3a",
        field: "#f2e7d2",
        parchment: "#1d2430"
      },
      boxShadow: {
        gold: "0 1px 2px rgba(29, 36, 48, 0.08), 0 14px 34px rgba(29, 36, 48, 0.08)",
        glow: "0 12px 28px rgba(29, 36, 48, 0.12)"
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        sweep: "sweep 7s linear infinite",
        pulseGold: "pulseGold 2.7s ease-in-out infinite",
        rise: "rise 700ms ease both"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" }
        },
        sweep: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" }
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(214, 178, 94, 0.24)" },
          "50%": { boxShadow: "0 0 0 10px rgba(214, 178, 94, 0)" }
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      }
    }
  },
  plugins: []
}
