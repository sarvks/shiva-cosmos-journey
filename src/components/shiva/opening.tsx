import { useEffect, useState } from "react";
import { CosmicField } from "./cosmic-field";

export function Opening() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const marks = reduced ? [0, 200, 400, 600, 800] : [900, 2200, 3400, 4600, 6000];
    const timers = marks.map((ms, i) => window.setTimeout(() => setStep(i + 1), ms));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      id="silence"
      aria-label="Silence before form"
      className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden bg-black px-6"
    >
      <div
        className="absolute inset-0 -z-10 transition-opacity duration-[4000ms]"
        style={{
          opacity: step >= 4 ? 1 : 0,
          background: "radial-gradient(70% 55% at 50% 50%, oklch(0.24 0.05 258 / 0.55), transparent 70%)",
        }}
      />
      <div className={`absolute inset-0 transition-opacity duration-[5000ms] ${step >= 4 ? "opacity-100" : "opacity-0"}`}>
        <CosmicField variant="stars" radial />
      </div>

      <div className="relative flex flex-col items-center text-center">
        <div
          className={`spanda-pulse mb-10 rounded-full transition-all duration-[2500ms] ${step >= 1 ? "opacity-100" : "opacity-0"}`}
          style={{
            width: step >= 4 ? 10 : 6,
            height: step >= 4 ? 10 : 6,
            background: "oklch(0.96 0.02 220)",
            boxShadow: "0 0 40px 10px oklch(0.82 0.1 205 / 0.55), 0 0 140px 40px oklch(0.7 0.09 240 / 0.28)",
          }}
        />

        <h1
          className={`deva text-6xl leading-none text-moonlight text-glow transition-all duration-[2500ms] md:text-8xl ${
            step >= 2 ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          शिव
        </h1>

        <p
          className={`mt-6 font-display text-3xl tracking-[0.42em] text-moonlight/90 transition-all duration-[2500ms] md:text-5xl ${
            step >= 3 ? "opacity-100" : "opacity-0"
          }`}
        >
          ŚIVA
        </p>

        <p
          className={`mt-6 text-[11px] tracking-[0.4em] text-ash uppercase transition-opacity duration-[3000ms] md:text-xs ${
            step >= 4 ? "opacity-100" : "opacity-0"
          }`}
        >
          Consciousness • Transformation • Liberation
        </p>

        <a
          href="#what-is-shiva"
          className={`mt-16 inline-flex items-center gap-3 border-b border-moonlight/25 pb-2 text-[11px] uppercase tracking-[0.35em] text-moonlight/80 transition-all duration-[2500ms] hover:border-moonlight/70 hover:text-moonlight ${
            step >= 5 ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          Enter the Silence ↓
        </a>
      </div>
    </section>
  );
}
