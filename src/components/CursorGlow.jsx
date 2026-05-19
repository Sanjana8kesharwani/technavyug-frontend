import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [smooth, setSmooth] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  // 🔥 smooth lag animation
  useEffect(() => {
    const interval = setInterval(() => {
      setSmooth((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
    }, 10);

    return () => clearInterval(interval);
  }, [position]);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{
        transform: `translate(${smooth.x}px, ${smooth.y}px)`,
      }}
    >
      {/* Outer glow (small) */}
      <div className="w-16 h-16 bg-blue-500 opacity-30 blur-2xl rounded-full"></div>

      {/* Inner dot (sharp) */}
      <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

export default CursorGlow;
