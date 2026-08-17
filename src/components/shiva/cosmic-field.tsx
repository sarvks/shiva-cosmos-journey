import { useEffect, useRef } from "react";

export type FieldVariant =
  | "silence"
  | "stars"
  | "snow"
  | "fire"
  | "ash"
  | "water"
  | "mirror"
  | "column"
  | "sound";

type Params = {
  count: number;
  colors: string[];
  size: [number, number];
  speed: number;
  gravity: number;
  swirl: number;
  glow: number;
};

const PRESETS: Record<FieldVariant, Params> = {
  silence: { count: 160, colors: ["#dfe8f5", "#9fc6dc"], size: [0.4, 1.1], speed: 0.06, gravity: 0, swirl: 0, glow: 6 },
  stars: { count: 420, colors: ["#e8eefb", "#a9c8e8", "#c9b48a"], size: [0.4, 1.5], speed: 0.08, gravity: 0, swirl: 0.02, glow: 8 },
  snow: { count: 260, colors: ["#ffffff", "#cfe4f2"], size: [0.7, 2.2], speed: 0.28, gravity: 0.22, swirl: 0.5, glow: 4 },
  fire: { count: 300, colors: ["#f5a04a", "#e2662a", "#c9432c", "#f0d08a"], size: [0.8, 2.4], speed: 0.5, gravity: -0.5, swirl: 0.9, glow: 14 },
  ash: { count: 220, colors: ["#9a9a99", "#6f6f70", "#c8c3b8"], size: [0.6, 2], speed: 0.14, gravity: -0.08, swirl: 0.35, glow: 3 },
  water: { count: 300, colors: ["#8fd0e6", "#cfeaf5", "#4f8fae"], size: [0.5, 1.8], speed: 0.55, gravity: 0.7, swirl: 0.2, glow: 8 },
  mirror: { count: 240, colors: ["#e6f2ff", "#9ec9e6", "#d8c79a"], size: [0.5, 1.6], speed: 0.2, gravity: 0, swirl: 0, glow: 12 },
  column: { count: 260, colors: ["#f4e6bd", "#d8b978", "#fff8e6"], size: [0.5, 1.8], speed: 0.35, gravity: -0.3, swirl: 0.06, glow: 12 },
  sound: { count: 200, colors: ["#cfe0f0", "#b48ec6", "#e0c58a"], size: [0.5, 1.6], speed: 0.12, gravity: 0, swirl: 0, glow: 10 },
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  c: string;
  a: number;
  seed: number;
};

export function CosmicField({
  variant = "stars",
  className = "",
  intensity = 1,
  radial = false,
}: {
  variant?: FieldVariant;
  className?: string;
  intensity?: number;
  radial?: boolean;
}) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const lowPower = window.innerWidth < 720;
    const preset = PRESETS[variant];
    const dpr = Math.min(window.devicePixelRatio || 1, lowPower ? 1.5 : 2);
    const density = (lowPower ? 0.45 : 1) * intensity;
    const count = Math.round(preset.count * density);

    let w = 0;
    let h = 0;
    let particles: Particle[] = [];

    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    const spawn = (initial: boolean): Particle => {
      const angle = Math.random() * Math.PI * 2;
      const rad = Math.random() ** 0.6 * Math.min(w, h) * 0.55;
      const base = radial
        ? { x: w / 2 + Math.cos(angle) * rad, y: h / 2 + Math.sin(angle) * rad }
        : { x: Math.random() * w, y: initial ? Math.random() * h : variant === "fire" || variant === "ash" || variant === "column" ? h + 10 : -10 };
      return {
        x: base.x,
        y: base.y,
        vx: rand(-0.2, 0.2) * preset.speed,
        vy: rand(-0.2, 0.2) * preset.speed,
        r: rand(preset.size[0], preset.size[1]),
        c: preset.colors[Math.floor(Math.random() * preset.colors.length)]!,
        a: rand(0.25, 0.95),
        seed: Math.random() * 1000,
      };
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = Array.from({ length: count }, () => spawn(true));
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let raf = 0;
    let t = 0;
    let running = true;

    const draw = () => {
      t += reduced ? 0.002 : 0.01;
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";

      for (const p of particles) {
        if (!reduced) {
          const sway = Math.sin(t * 0.8 + p.seed) * preset.swirl * 0.35;
          p.x += p.vx + sway * 0.4;
          p.y += p.vy + preset.gravity * 0.35 * preset.speed * 3;

          if (radial) {
            const dx = p.x - w / 2;
            const dy = p.y - h / 2;
            const ang = 0.0016 * preset.swirl * 8;
            p.x = w / 2 + dx * Math.cos(ang) - dy * Math.sin(ang);
            p.y = h / 2 + dx * Math.sin(ang) + dy * Math.cos(ang);
          }
        }

        if (p.x < -20 || p.x > w + 20 || p.y < -20 || p.y > h + 20) {
          Object.assign(p, spawn(false));
        }

        const twinkle = reduced ? 1 : 0.72 + 0.28 * Math.sin(t * 1.6 + p.seed);
        ctx.globalAlpha = Math.max(0, Math.min(1, p.a * twinkle));
        ctx.beginPath();
        ctx.fillStyle = p.c;
        ctx.shadowBlur = preset.glow;
        ctx.shadowColor = p.c;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      ctx.globalCompositeOperation = "source-over";

      if (running) raf = requestAnimationFrame(draw);
    };

    draw();

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!running) {
        running = true;
        draw();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [variant, intensity, radial]);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
