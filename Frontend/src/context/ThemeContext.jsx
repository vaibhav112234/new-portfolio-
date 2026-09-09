import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

const themes = {
  ocean: {
    name: "Ocean",
    primary: "#3b82f6",
    primaryHover: "#2563eb",
    secondary: "#06b6d4",
    accent: "#60a5fa",
    glow: "rgba(59, 130, 246, 0.35)",
    glowSoft: "rgba(59, 130, 246, 0.12)",
  },

  purple: {
    name: "Purple",
    primary: "#8b5cf6",
    primaryHover: "#7c3aed",
    secondary: "#ec4899",
    accent: "#a78bfa",
    glow: "rgba(139, 92, 246, 0.35)",
    glowSoft: "rgba(139, 92, 246, 0.12)",
  },

  emerald: {
    name: "Emerald",
    primary: "#10b981",
    primaryHover: "#059669",
    secondary: "#14b8a6",
    accent: "#34d399",
    glow: "rgba(16, 185, 129, 0.35)",
    glowSoft: "rgba(16, 185, 129, 0.12)",
  },

  sunset: {
    name: "Sunset",
    primary: "#f97316",
    primaryHover: "#ea580c",
    secondary: "#f43f5e",
    accent: "#fb923c",
    glow: "rgba(249, 115, 22, 0.35)",
    glowSoft: "rgba(249, 115, 22, 0.12)",
  },

  rose: {
    name: "Rose",
    primary: "#f43f5e",
    primaryHover: "#e11d48",
    secondary: "#ec4899",
    accent: "#fb7185",
    glow: "rgba(244, 63, 94, 0.35)",
    glowSoft: "rgba(244, 63, 94, 0.12)",
  },

  gold: {
    name: "Gold",
    primary: "#f59e0b",
    primaryHover: "#d97706",
    secondary: "#facc15",
    accent: "#fbbf24",
    glow: "rgba(245, 158, 11, 0.40)",
    glowSoft: "rgba(245, 158, 11, 0.14)",
  },

  neon: {
    name: "Neon",
    primary: "#a3e635",
    primaryHover: "#84cc16",
    secondary: "#22d3ee",
    accent: "#bef264",
    glow: "rgba(163, 230, 53, 0.40)",
    glowSoft: "rgba(34, 211, 238, 0.14)",
  },

  red: {
    name: "Red",
    primary: "#ef4444",
    primaryHover: "#dc2626",
    secondary: "#f43f5e",
    accent: "#f87171",
    glow: "rgba(239, 68, 68, 0.40)",
    glowSoft: "rgba(239, 68, 68, 0.14)",
  },

  yellow: {
    name: "Yellow",
    primary: "#eab308",
    primaryHover: "#ca8a04",
    secondary: "#f59e0b",
    accent: "#fde047",
    glow: "rgba(234, 179, 8, 0.40)",
    glowSoft: "rgba(234, 179, 8, 0.14)",
  },

  white: {
    name: "White",
    primary: "#f8fafc",
    primaryHover: "#e2e8f0",
    secondary: "#cbd5e1",
    accent: "#ffffff",
    glow: "rgba(248, 250, 252, 0.35)",
    glowSoft: "rgba(248, 250, 252, 0.12)",
  },
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "ocean";
  });

  useEffect(() => {
    const selectedTheme = themes[theme];

    if (!selectedTheme) return;

    const root = document.documentElement;

    root.style.setProperty("--theme-primary", selectedTheme.primary);
    root.style.setProperty(
      "--theme-primary-hover",
      selectedTheme.primaryHover
    );
    root.style.setProperty("--theme-secondary", selectedTheme.secondary);
    root.style.setProperty("--theme-accent", selectedTheme.accent);
    root.style.setProperty("--theme-glow", selectedTheme.glow);
    root.style.setProperty("--theme-glow-soft", selectedTheme.glowSoft);

    root.setAttribute("data-theme", theme);

    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        themes,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
};