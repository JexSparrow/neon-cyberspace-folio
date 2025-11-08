import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  direction: "diagonal-up" | "diagonal-down" | "horizontal" | "vertical";
}

interface ParticlesBackgroundProps {
  count?: number;
  speed?: "slow" | "medium" | "fast";
}

const ParticlesBackground = ({ count = 50, speed = "medium" }: ParticlesBackgroundProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  const speedMap = {
    slow: { min: 20, max: 40 },
    medium: { min: 15, max: 30 },
    fast: { min: 8, max: 20 },
  };

  useEffect(() => {
    const directions: Particle["direction"][] = [
      "diagonal-up",
      "diagonal-down",
      "horizontal",
      "vertical",
    ];

    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration:
        Math.random() * (speedMap[speed].max - speedMap[speed].min) +
        speedMap[speed].min,
      delay: Math.random() * 5,
      direction: directions[Math.floor(Math.random() * directions.length)],
    }));

    setParticles(newParticles);
  }, [count, speed]);

  const getAnimationStyle = (particle: Particle) => {
    const animations = {
      "diagonal-up": "move-diagonal-up",
      "diagonal-down": "move-diagonal-down",
      horizontal: "move-horizontal",
      vertical: "move-vertical",
    };

    return {
      left: `${particle.x}%`,
      top: `${particle.y}%`,
      width: `${particle.size}px`,
      height: `${particle.size}px`,
      animation: `${animations[particle.direction]} ${particle.duration}s linear ${particle.delay}s infinite`,
    };
  };

  return (
    <>
      <style>{`
        @keyframes move-diagonal-up {
          0% {
            transform: translate(0, 0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(-100vw, -100vh);
            opacity: 0;
          }
        }

        @keyframes move-diagonal-down {
          0% {
            transform: translate(0, 0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(100vw, 100vh);
            opacity: 0;
          }
        }

        @keyframes move-horizontal {
          0% {
            transform: translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(100vw);
            opacity: 0;
          }
        }

        @keyframes move-vertical {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        .particle {
          filter: blur(0.5px);
        }
      `}</style>
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle absolute rounded-full bg-white/40 shadow-[0_0_4px_rgba(255,255,255,0.8)]"
            style={getAnimationStyle(particle)}
          />
        ))}
      </div>
    </>
  );
};

export default ParticlesBackground;
