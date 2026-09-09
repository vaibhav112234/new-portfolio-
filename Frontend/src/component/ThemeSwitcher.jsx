import { useEffect, useState } from "react";
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

  // Close selector when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".theme-switcher")) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Close selector with Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const selectTheme = (themeName) => {
    setTheme(themeName);
  };

  const activeColors =
    themeColors[theme] || themeColors.ocean;

  return (
    <div className="theme-switcher fixed right-6 bottom-6 z-[100]">
      {/* =====================================================
          THEME MENU
      ====================================================== */}

      <div
        className={`absolute right-0 bottom-20 w-[280px] transition-all duration-500 ease-out origin-bottom-right ${
          open
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-4 scale-90 pointer-events-none"
        }`}
      >
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/95 backdrop-blur-2xl shadow-2xl">
          {/* Decorative glow */}

          <div
            className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{
              background: activeColors.primary,
            }}
          />

          <div
            className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full blur-3xl opacity-10 pointer-events-none"
            style={{
              background: activeColors.secondary,
            }}
          />

          <div className="relative p-5">
            {/* Header */}

            <div className="flex items-center justify-between mb-5">
              <div>
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{
                      background: activeColors.primary,
                      boxShadow: `0 0 10px ${activeColors.primary}`,
                    }}
                  />

                  <p className="text-white font-semibold text-sm">
                    Portfolio Theme
                  </p>
                </div>

                <p className="text-slate-500 text-xs mt-1">
                  Choose your accent color
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition duration-300"
                aria-label="Close theme selector"
              >
                <X size={16} />
              </button>
            </div>

            {/* Theme Grid */}

            <div className="grid grid-cols-2 gap-2">
              {Object.entries(themes).map(([key, value]) => {
                const colors =
                  themeColors[key];

                const active =
                  theme === key;

                return (
                  <button
                    key={key}
                    onClick={() => selectTheme(key)}
                    className={`group relative overflow-hidden flex items-center gap-3 rounded-2xl px-3 py-3 border transition-all duration-300 ${
                      active
                        ? "border-white/30 bg-white/10"
                        : "border-white/5 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/15"
                    }`}
                  >
                    {/* Color Circle */}

                    <div className="relative flex-shrink-0">
                      {active && (
                        <div
                          className="absolute -inset-1 rounded-full blur-md opacity-60 animate-pulse"
                          style={{
                            background:
                              colors.primary,
                          }}
                        />
                      )}

                      <div
                        className="relative w-8 h-8 rounded-full border border-white/20 transition-transform duration-300 group-hover:scale-110"
                        style={{
                          background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                        }}
                      >
                        {active && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Check
                              size={14}
                              strokeWidth={3}
                              className="text-white drop-shadow-lg"
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Theme Name */}

                    <span
                      className={`text-xs font-medium transition-colors duration-300 ${
                        active
                          ? "text-white"
                          : "text-slate-400 group-hover:text-slate-200"
                      }`}
                    >
                      {value.name}
                    </span>

                    {/* Active indicator */}

                    {active && (
                      <span
                        className="absolute right-2 w-1.5 h-1.5 rounded-full"
                        style={{
                          background:
                            colors.primary,
                          boxShadow: `0 0 8px ${colors.primary}`,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Current Theme */}

            {/* <div className="mt-5 pt-4 border-t border-white/5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider text-slate-500">
                  Active
                </span>

                <span
                  className="text-xs font-semibold"
                  style={{
                    color: activeColors.primary,
                  }}
                >
                  {themes[theme]?.name || "Ocean"}
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* =====================================================
          FLOATING PALETTE BUTTON
      ====================================================== */}

      <div className="relative flex items-center justify-center">
        {/* Outer rotating ring */}

        <div
          className="absolute w-[72px] h-[72px] rounded-full opacity-70"
          style={{
            background: `conic-gradient(
              from 0deg,
              ${activeColors.primary},
              ${activeColors.secondary},
              transparent,
              ${activeColors.primary}
            )`,
            animation: "themeRingSpin 5s linear infinite",
          }}
        />

        {/* Inner ring */}

        <div
          className="absolute w-[66px] h-[66px] rounded-full opacity-40 blur-sm"
          style={{
            background: `conic-gradient(
              from 180deg,
              transparent,
              ${activeColors.primary},
              transparent,
              ${activeColors.secondary},
              transparent
            )`,
            animation: "themeRingSpinReverse 3s linear infinite",
          }}
        />

        {/* Glow */}

        <div
          className="absolute w-16 h-16 rounded-full blur-2xl opacity-40 transition-all duration-500"
          style={{
            background: activeColors.primary,
          }}
        />

        {/* Main Button */}

        <button
          onClick={() => setOpen(!open)}
          aria-label="Open theme selector"
          aria-expanded={open}
          className="relative w-14 h-14 rounded-full bg-slate-950 border border-white/20 backdrop-blur-xl flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 group"
          style={{
            boxShadow: open
              ? `0 0 35px ${activeColors.primary}80`
              : `0 0 20px ${activeColors.primary}40`,
          }}
        >
          {/* Icon */}

          <Palette
            size={23}
            strokeWidth={1.8}
            className={`text-white transition-all duration-500 ${
              open
                ? "rotate-180 scale-90"
                : "group-hover:rotate-12"
            }`}
          />

          {/* Tiny active color dot */}

          <span
            className="absolute top-1 right-1 w-3 h-3 rounded-full border-2 border-slate-950"
            style={{
              background: activeColors.primary,
              boxShadow: `0 0 10px ${activeColors.primary}`,
            }}
          />
        </button>
      </div>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>
        {`
          @keyframes themeRingSpin {
            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(360deg);
            }
          }

          @keyframes themeRingSpinReverse {
            from {
              transform: rotate(360deg);
            }

            to {
              transform: rotate(0deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default ThemeSwitcher;