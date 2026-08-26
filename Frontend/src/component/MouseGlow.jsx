import { useEffect, useState } from "react";

const MouseGlow = () => {
  const [position, setPosition] = useState({
    x: -200,
    y: -200,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    >
      <div
        className="absolute w-72 h-72 rounded-full bg-blue-500/20 blur-[120px] transition-transform duration-75"
        style={{
          transform: `translate(${position.x - 144}px, ${
            position.y - 144
          }px)`,
        }}
      />
    </div>
  );
};

export default MouseGlow;