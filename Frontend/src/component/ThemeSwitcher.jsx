import { useState } from "react";
import { Palette, Check, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, setTheme, themes } = useTheme();

  const [open, setOpen] = useState(false);

 const themeColors = {
  ocean: {
    primary: "#3b82f6",
    secondary: "#06b6d4",
  },

  purple: {
    primary: "#8b5cf6",
    secondary: "#ec4899",
  },

  emerald: {
    primary: "#10b981",
    secondary: "#14b8a6",
  },

  sunset: {
    primary: "#f97316",
    secondary: "#f43f5e",
  },

  rose: {
    primary: "#f43f5e",
    secondary: "#ec4899",
  },

  gold: {
    primary: "#f59e0b",
    secondary: "#facc15",
  },

  neon: {
    primary: "#a3e635",
    secondary: "#22d3ee",
  },

  red: {
    primary: "#ef4444",
    secondary: "#f43f5e",
  },

  yellow: {
    primary: "#eab308",
    secondary: "#f59e0b",
  },

  white: {
    primary: "#f8fafc",
    secondary: "#cbd5e1",
  },
};

  const selectTheme = (themeName) => {
    setTheme(themeName);
    setOpen(false);
  };

  return (
    <div className="fixed right-6 bottom-6 z-[100]">
      {/* Theme Panel */}

      {open && (
        <div className="absolute right-0 bottom-16 w-64 rounded-2xl border border-white/10 bg-slate-950/95 backdrop-blur-xl p-4 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-white font-semibold">
                Choose Theme
              </p>

              <p className="text-slate-400 text-xs mt-1">
                Change portfolio colors
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-slate-400 hover:text-white transition"
              aria-label="Close theme selector"
            >
              <X size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-2">
            {Object.entries(themes).map(([key, value]) => {
              const colors = themeColors[key];
              const active = theme === key;

              return (
                <button
                  key={key}
                  onClick={() => selectTheme(key)}
                  className={`w-full flex items-center justify-between rounded-xl px-3 py-3 border transition duration-300 ${
                    active
                      ? "border-white/30 bg-white/10"
                      : "border-white/10 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-full"
                      style={{
                        background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                      }}
                    />

                    <span className="text-sm text-slate-200">
                      {value.name}
                    </span>
                  </div>

                  {active && (
                    <Check
                      size={18}
                      style={{
                        color: "var(--theme-accent)",
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Floating Button */}

      <button
        onClick={() => setOpen(!open)}
        aria-label="Open theme selector"
        className="group relative w-14 h-14 rounded-full bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center justify-center transition duration-300 hover:scale-110"
        style={{
          boxShadow: `0 0 25px var(--theme-glow)`,
        }}
      >
        <Palette
          size={24}
          className="text-white transition-transform duration-300 group-hover:rotate-12"
        />

        <span
          className="absolute inset-0 rounded-full opacity-30 blur-xl"
          style={{
            background: "var(--theme-primary)",
          }}
        />
      </button>
    </div>
  );
};

export default ThemeSwitcher;