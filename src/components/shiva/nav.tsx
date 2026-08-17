import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useMode } from "./mode-context";

const primary = [
  { label: "Śiva", to: "/", hash: "what-is-shiva" },
  { label: "Forms", to: "/atlas" },
  { label: "Philosophy", to: "/", hash: "pratyabhijna" },
  { label: "Tantra", to: "/", hash: "tantra" },
  { label: "Yoga", to: "/", hash: "yoga" },
  { label: "Texts", to: "/texts" },
  { label: "Temples", to: "/geography" },
  { label: "Traditions", to: "/", hash: "siddhanta" },
  { label: "Cosmos", to: "/tattvas" },
] as const;

const mandalaNodes = [
  { label: "Forms", to: "/atlas" },
  { label: "Kailāsa", to: "/", hash: "kailasa" },
  { label: "Naṭarāja", to: "/", hash: "nataraja" },
  { label: "Liṅga", to: "/", hash: "linga" },
  { label: "Śakti", to: "/", hash: "shiva-shakti" },
  { label: "Bhairava", to: "/", hash: "bhairava" },
  { label: "Philosophy", to: "/", hash: "pratyabhijna" },
  { label: "Tantra", to: "/", hash: "tantra" },
  { label: "Yoga", to: "/", hash: "yoga" },
  { label: "Texts", to: "/texts" },
  { label: "Temples", to: "/geography" },
  { label: "Tattvas", to: "/tattvas" },
] as const;

export function SiteNav() {
  const { scholar, setScholar, meditation, setMeditation } = useMode();
  const [mandala, setMandala] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (meditation) {
    return <MeditationOverlay onExit={() => setMeditation(false)} />;
  }

  const linkTo = (n: { to: string; hash?: string }) =>
    n.hash ? { to: n.to, hash: n.hash } : { to: n.to };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${solid ? "glass" : "bg-transparent"}`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8">
          <Link to="/" className="deva text-lg text-moonlight/90 hover:text-moonlight" aria-label="Śiva — home">
            शिव
          </Link>

          <ul className="hidden items-center gap-5 lg:flex">
            {primary.map((n) => (
              <li key={n.label}>
                <Link
                  {...(linkTo(n) as never)}
                  className="text-[11px] uppercase tracking-[0.24em] text-ash transition-colors hover:text-moonlight"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setMandala(true)}
              className="rounded-sm border border-border px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] text-moonlight/85 transition-colors hover:border-gold/60 hover:text-gold"
            >
              Mandala ◉
            </button>
            <button
              onClick={() => setScholar(!scholar)}
              aria-pressed={scholar}
              className={`hidden rounded-sm border px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] transition-colors md:block ${
                scholar ? "border-gold/70 text-gold" : "border-border text-ash hover:text-moonlight"
              }`}
            >
              Scholar {scholar ? "◉" : "◯"}
            </button>
            <button
              onClick={() => setMeditation(true)}
              className="hidden rounded-sm border border-border px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] text-ash transition-colors hover:text-moonlight md:block"
            >
              Meditation ◯
            </button>
            <button
              onClick={() => setDrawer(true)}
              className="rounded-sm border border-border px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] text-ash lg:hidden"
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </nav>
      </header>

      {drawer ? (
        <div className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="flex items-center justify-between px-5 py-3">
            <span className="deva text-lg text-moonlight">शिव</span>
            <button onClick={() => setDrawer(false)} aria-label="Close menu" className="text-ash">
              ✕
            </button>
          </div>
          <ul className="animate-fade-in space-y-1 px-6 py-6">
            {primary.map((n) => (
              <li key={n.label}>
                <Link
                  {...(linkTo(n) as never)}
                  onClick={() => setDrawer(false)}
                  className="block py-3 font-display text-2xl text-moonlight/90"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 px-6">
            <button
              onClick={() => setScholar(!scholar)}
              className={`rounded-sm border px-3 py-2 text-[10px] uppercase tracking-[0.22em] ${scholar ? "border-gold/70 text-gold" : "border-border text-ash"}`}
            >
              Scholar {scholar ? "◉" : "◯"}
            </button>
            <button
              onClick={() => {
                setDrawer(false);
                setMeditation(true);
              }}
              className="rounded-sm border border-border px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-ash"
            >
              Meditation ◯
            </button>
          </div>
        </div>
      ) : null}

      {mandala ? <Mandala onClose={() => setMandala(false)} /> : null}
    </>
  );
}

function Mandala({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-background/92 px-4 backdrop-blur-2xl">
      <button onClick={onClose} className="absolute right-6 top-5 text-sm text-ash hover:text-moonlight" aria-label="Close mandala">
        ✕
      </button>
      <div className="relative aspect-square w-full max-w-[min(88vw,620px)]">
        <div className="absolute inset-[12%] rounded-full border border-border/70" />
        <div className="absolute inset-[26%] rounded-full border border-border/40" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="deva text-3xl text-moonlight text-glow">शिव</p>
          <p className="eyebrow mt-1">Śiva</p>
        </div>
        {mandalaNodes.map((n, i) => {
          const angle = (i / mandalaNodes.length) * Math.PI * 2 - Math.PI / 2;
          const R = 43;
          return (
            <Link
              key={n.label}
              {...({ to: n.to, ...(n.hash ? { hash: n.hash } : {}) } as never)}
              onClick={onClose}
              className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-border/70 bg-card/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-ash transition-all hover:border-gold/70 hover:text-gold"
              style={{ left: `${50 + Math.cos(angle) * R}%`, top: `${50 + Math.sin(angle) * R}%` }}
            >
              {n.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function MeditationOverlay({ onExit }: { onExit: () => void }) {
  const [env, setEnv] = useState("Kailāsa");
  const envs = ["Kailāsa", "Dakṣiṇāmūrti", "Arunachala", "Cosmic Naṭarāja", "Bindu"];
  return (
    <div className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-black/96 px-6 text-center">
      <div
        className="spanda-pulse h-40 w-40 rounded-full"
        style={{
          background: "radial-gradient(circle, oklch(0.9 0.05 210 / 0.5), transparent 70%)",
          animationDuration: "9s",
        }}
      />
      <p className="mt-10 text-[11px] uppercase tracking-[0.4em] text-ash">{env}</p>
      <p className="mt-3 text-xs text-ash/70">Breathe with the light — expanding, resting, releasing.</p>
      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {envs.map((e) => (
          <button
            key={e}
            onClick={() => setEnv(e)}
            className={`rounded-full border px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] transition-colors ${
              env === e ? "border-moonlight/60 text-moonlight" : "border-border/60 text-ash/70 hover:text-ash"
            }`}
          >
            {e}
          </button>
        ))}
      </div>
      <button
        onClick={onExit}
        className="mt-12 border-b border-moonlight/25 pb-1 text-[10px] uppercase tracking-[0.35em] text-ash hover:text-moonlight"
      >
        Leave meditation
      </button>
    </div>
  );
}
