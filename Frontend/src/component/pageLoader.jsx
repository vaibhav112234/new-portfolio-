import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PageLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const duration = 1200;
    const intervalTime = 20;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + increment, 100);

        if (next >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            setLoading(false);

            setTimeout(() => {
              onComplete?.();
            }, 500);
          }, 150);
        }

        return next;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            filter: "blur(8px)",
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-slate-950"
        >
          {/* Background glow */}
          <div
            className="absolute w-[500px] h-[500px] rounded-full blur-[140px] opacity-20"
            style={{
              background: "var(--theme-primary)",
            }}
          />

          {/* Secondary glow */}
          <div
            className="absolute w-[300px] h-[300px] rounded-full blur-[120px] opacity-10 translate-x-40 translate-y-32"
            style={{
              background: "var(--theme-secondary)",
            }}
          />

          {/* Main content */}
          <div className="relative z-10 w-[280px] sm:w-[360px] text-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h1
                className="text-4xl sm:text-5xl font-black tracking-[0.25em] text-white"
                style={{
                  textShadow: "0 0 30px var(--theme-glow)",
                }}
              >
                VAIBHAV
              </h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: "easeInOut",
                }}
                className="h-[1px] mt-3 mx-auto"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, var(--theme-primary), transparent)",
                }}
              />
            </motion.div>

            {/* Loading text */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                Initializing experience
              </span>

              <span
                className="text-xs font-mono font-semibold"
                style={{
                  color: "var(--theme-primary)",
                }}
              >
                {Math.round(progress)}%
              </span>
            </div>

            {/* Progress bar */}
            <div className="relative h-[3px] w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="absolute left-0 top-0 h-full rounded-full"
                style={{
                  width: `${progress}%`,
                  background:
                    "linear-gradient(90deg, var(--theme-primary), var(--theme-secondary))",
                  boxShadow: "0 0 12px var(--theme-glow)",
                }}
              />

              {/* Moving shine */}
              <motion.div
                animate={{ x: ["-100%", "400%"] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-0 h-full w-20"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
                }}
              />
            </div>

            {/* Bottom status */}
            <div className="mt-5 flex items-center justify-center gap-2">
              <motion.span
                animate={{
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: "var(--theme-primary)",
                  boxShadow: "0 0 8px var(--theme-primary)",
                }}
              />

              <span className="text-[10px] uppercase tracking-[0.25em] text-slate-600">
                Preparing portfolio
              </span>
            </div>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-8 left-8 w-12 h-12 border-l border-t border-white/10" />
          <div className="absolute top-8 right-8 w-12 h-12 border-r border-t border-white/10" />
          <div className="absolute bottom-8 left-8 w-12 h-12 border-l border-b border-white/10" />
          <div className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-white/10" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;