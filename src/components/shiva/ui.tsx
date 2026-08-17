import { useEffect, useRef, useState, type ReactNode } from "react";
import { CosmicField, type FieldVariant } from "./cosmic-field";
import { useMode, type Framing } from "./mode-context";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function Scene({
  id,
  variant,
  radial,
  intensity,
  tint,
  children,
  className = "",
  minH = "min-h-screen",
}: {
  id: string;
  variant: FieldVariant;
  radial?: boolean;
  intensity?: number;
  tint?: string;
  children: ReactNode;
  className?: string;
  minH?: string;
}) {
  const { meditation } = useMode();
  return (
    <section
      id={id}
      className={`relative isolate flex ${minH} w-full flex-col justify-center overflow-hidden px-6 py-28 md:px-12 ${className}`}
    >
      <div
        className="absolute inset-0 -z-10"
        style={{ background: tint ?? "radial-gradient(120% 90% at 50% 20%, oklch(0.2 0.04 262), oklch(0.11 0.014 264) 70%)" }}
      />
      <CosmicField variant={variant} radial={radial ?? false} intensity={(intensity ?? 1) * (meditation ? 0.5 : 1)} />
      <div className="relative mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}

export function Title({
  eyebrow,
  deva,
  title,
  sub,
}: {
  eyebrow?: string;
  deva?: string;
  title: string;
  sub?: string;
}) {
  return (
    <header className="mb-10">
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      {deva ? <p className="deva mb-2 text-3xl text-glow text-moonlight/80 md:text-4xl">{deva}</p> : null}
      <h2 className="text-4xl leading-[1.05] tracking-tight text-moonlight md:text-6xl">{title}</h2>
      {sub ? <p className="mt-4 max-w-2xl text-base text-ash md:text-lg">{sub}</p> : null}
    </header>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="max-w-2xl space-y-4 text-[15px] leading-relaxed text-foreground/85 md:text-base">{children}</div>;
}

export function ScholarNote({ children }: { children: ReactNode }) {
  const { scholar } = useMode();
  if (!scholar) return null;
  return (
    <aside className="glass mt-6 max-w-2xl rounded-sm border-l-2 border-l-gold/60 px-5 py-4 text-sm text-ash">
      <span className="eyebrow mb-2 block text-gold/80">Scholar note</span>
      {children}
    </aside>
  );
}

export function Caution({ children }: { children: ReactNode }) {
  return (
    <p className="mt-6 max-w-2xl border-l-2 border-l-crimson/60 pl-4 text-sm italic text-ash">{children}</p>
  );
}

export function FramingTabs({
  value,
  onChange,
}: {
  value: Framing;
  onChange: (f: Framing) => void;
}) {
  const items: Framing[] = ["devotional", "philosophical", "historical"];
  return (
    <div role="tablist" aria-label="Viewing mode" className="flex flex-wrap gap-1">
      {items.map((i) => (
        <button
          key={i}
          role="tab"
          aria-selected={value === i}
          onClick={() => onChange(i)}
          className={`rounded-sm px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] transition-colors ${
            value === i ? "bg-moonlight/90 text-background" : "text-ash hover:text-moonlight"
          }`}
        >
          {i}
        </button>
      ))}
    </div>
  );
}

export function Meta({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="border-t border-border/60 py-3">
      <dt className="eyebrow mb-1">{label}</dt>
      <dd className="text-sm leading-relaxed text-foreground/85">{value}</dd>
    </div>
  );
}
