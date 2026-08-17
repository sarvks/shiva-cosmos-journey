import { useEffect, useState } from "react";
import { pancakritya, paradoxes, tattvas } from "@/lib/shiva-data";

export function PancakrityaWheel() {
  const [active, setActive] = useState(0);
  const node = pancakritya[active]!;
  const tints = [
    "oklch(0.28 0.06 250)",
    "oklch(0.28 0.05 150)",
    "oklch(0.26 0.08 30)",
    "oklch(0.19 0.03 280)",
    "oklch(0.32 0.07 90)",
  ];

  return (
    <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <div
        className="relative mx-auto aspect-square w-full max-w-[380px] rounded-full transition-colors duration-1000"
        style={{ background: `radial-gradient(circle, ${tints[active]}, transparent 68%)` }}
      >
        <div className="absolute inset-[16%] rounded-full border border-border/60" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="eyebrow">Pañcakṛtya</p>
          <p className="deva mt-1 text-2xl text-moonlight">पञ्चकृत्य</p>
        </div>
        {pancakritya.map((p, i) => {
          const a = (i / pancakritya.length) * Math.PI * 2 - Math.PI / 2;
          return (
            <button
              key={p.id}
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] transition-all ${
                active === i
                  ? "border-gold/80 bg-background/80 text-gold"
                  : "border-border/70 bg-background/50 text-ash hover:text-moonlight"
              }`}
              style={{ left: `${50 + Math.cos(a) * 44}%`, top: `${50 + Math.sin(a) * 44}%` }}
            >
              {p.name}
            </button>
          );
        })}
      </div>

      <div>
        <p className="deva text-3xl text-moonlight">{node.deva}</p>
        <h3 className="mt-2 text-3xl text-moonlight">
          {node.name} <span className="text-ash">— {node.gloss}</span>
        </h3>
        <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-foreground/85">{node.body}</p>
      </div>
    </div>
  );
}

export function PatiPasuPasa() {
  const [loosened, setLoosened] = useState(false);
  const nodes = [
    { k: "Pati", d: "पति", t: "The Lord — Śiva, eternally free, the efficient cause of liberation." },
    { k: "Paśu", d: "पशु", t: "The bound soul — eternally real, never annihilated, but obscured." },
    { k: "Pāśa", d: "पाश", t: "Bondage — āṇava (limitation), karma (action) and māyā (materiality)." },
  ];
  return (
    <div className="glass rounded-sm p-6 md:p-8">
      <div className="relative mx-auto h-[260px] w-full max-w-md">
        <Node label="PATI" sub="Śiva" style={{ left: "50%", top: "6%" }} tone="gold" />
        <Node label="PAŚU" sub="Soul" style={{ left: "78%", top: "76%" }} tone="moon" />
        <Node label="PĀŚA" sub="Bondage" style={{ left: "22%", top: "76%" }} tone="ash" />
        <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
          <line x1="50%" y1="18%" x2="78%" y2="72%" stroke="oklch(0.85 0.11 88 / 0.55)" strokeWidth="1" />
          <line
            x1="22%"
            y1="80%"
            x2="78%"
            y2="80%"
            stroke="oklch(0.62 0.008 250 / 0.6)"
            strokeWidth="1"
            strokeDasharray="4 4"
            style={{ opacity: loosened ? 0.15 : 1, transition: "opacity 1.2s" }}
          />
        </svg>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {nodes.map((n) => (
          <div key={n.k}>
            <p className="deva text-lg text-moonlight/90">{n.d}</p>
            <p className="eyebrow mt-1">{n.k}</p>
            <p className="mt-2 text-sm text-foreground/80">{n.t}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() => setLoosened(!loosened)}
        className="mt-6 rounded-sm border border-border px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-ash hover:text-moonlight"
      >
        {loosened ? "Restore the bonds" : "Loosen the bonds"}
      </button>
      <p className="mt-4 text-sm text-ash">
        In classical Śaiva Siddhānta the three remain ontologically distinct even in liberation: the soul becomes like Śiva
        (śivasama) rather than dissolving into him. This dualist-realist position differs sharply from the non-dual
        Kashmirian reading.
      </p>
    </div>
  );
}

function Node({
  label,
  sub,
  style,
  tone,
}: {
  label: string;
  sub: string;
  style: React.CSSProperties;
  tone: "gold" | "moon" | "ash";
}) {
  const tones = {
    gold: "border-gold/70 text-gold",
    moon: "border-moonlight/50 text-moonlight",
    ash: "border-border text-ash",
  } as const;
  return (
    <div
      className={`absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border bg-background/85 px-4 py-3 text-center ${tones[tone]}`}
      style={style}
    >
      <p className="text-[11px] uppercase tracking-[0.22em]">{label}</p>
      <p className="text-[10px] text-ash">{sub}</p>
    </div>
  );
}

export function ParadoxGrid() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border/60 border-y border-border/60">
      {paradoxes.map((p, i) => (
        <div key={p.a}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="flex w-full items-center justify-between gap-6 py-5 text-left"
          >
            <span className="font-display text-xl text-moonlight md:text-2xl">
              {p.a} <span className="px-2 text-ash">↔</span> {p.b}
            </span>
            <span className="text-ash">{open === i ? "−" : "+"}</span>
          </button>
          {open === i ? <p className="max-w-2xl pb-6 text-sm leading-relaxed text-foreground/80">{p.body}</p> : null}
        </div>
      ))}
    </div>
  );
}

export function MantraRipple() {
  const syllables = ["ॐ", "न", "मः", "शि", "वा", "य"];
  const [lit, setLit] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setLit(syllables.length);
      return;
    }
    const id = window.setInterval(() => setLit((v) => (v >= syllables.length ? 0 : v + 1)), 1200);
    return () => clearInterval(id);
  }, [syllables.length]);

  return (
    <div className="relative flex flex-col items-center justify-center py-10">
      <div className="flex flex-wrap items-end justify-center gap-4">
        {syllables.map((s, i) => (
          <span
            key={s + i}
            className={`deva text-4xl transition-all duration-700 md:text-6xl ${
              i < lit ? "text-moonlight text-glow opacity-100" : "text-ash/30 opacity-60"
            }`}
          >
            {s}
          </span>
        ))}
      </div>
      <p className="mt-6 text-sm tracking-[0.32em] text-ash">OṂ NAMAḤ ŚIVĀYA</p>
    </div>
  );
}

export function TattvaCascade() {
  const chain = tattvas.filter((t) => [1, 2, 3, 4, 5, 6, 12, 16, 19, 32, 36].includes(t.n));
  return (
    <ol className="relative ml-3 border-l border-border/70 pl-6">
      {chain.map((t) => (
        <li key={t.n} className="relative py-4">
          <span className="absolute -left-[31px] top-6 h-2 w-2 rounded-full bg-glacial/70" />
          <p className="deva text-lg text-moonlight/90">{t.deva}</p>
          <p className="font-display text-2xl text-moonlight">
            {t.name} <span className="text-base text-ash">— {t.gloss}</span>
          </p>
          <p className="mt-1 max-w-xl text-sm text-foreground/75">{t.note}</p>
        </li>
      ))}
    </ol>
  );
}

export function TimelineStrands() {
  const rows = [
    { era: "c. 1500–800 BCE", name: "Vedic Rudra", body: "Hymnic and liturgical presence; no temple cult." },
    { era: "c. 200 BCE–300 CE", name: "Early Śaiva movements", body: "Ascetic orders and the first liṅga worship attested in art and inscription." },
    { era: "c. 100–800 CE", name: "Pāśupata traditions", body: "The earliest well-documented organised Śaiva order, with its own sūtras and vows." },
    { era: "c. 500–1200 CE", name: "Tantric Śaivism (Mantramārga)", body: "Initiation-based traditions: Siddhānta, Bhairava streams, Kaula currents." },
    { era: "c. 600–1300 CE", name: "Śaiva Siddhānta", body: "Āgamic ritual and dualist theology; later a strongly Tamil tradition." },
    { era: "c. 850–1200 CE", name: "Non-dual Kashmirian exegesis", body: "Spanda, Pratyabhijñā, Krama, synthesised by Abhinavagupta." },
    { era: "c. 600 CE onward", name: "Regional bhakti", body: "Nāyaṉmārs, later Vīraśaiva vacanas, and vernacular devotional literatures." },
  ];
  return (
    <div className="space-y-px overflow-hidden rounded-sm border border-border/60">
      {rows.map((r) => (
        <div key={r.name} className="grid gap-2 bg-card/50 p-5 md:grid-cols-[190px_1fr]">
          <p className="eyebrow pt-1">{r.era}</p>
          <div>
            <p className="font-display text-xl text-moonlight">{r.name}</p>
            <p className="mt-1 text-sm text-foreground/75">{r.body}</p>
          </div>
        </div>
      ))}
      <p className="bg-background/60 p-4 text-xs italic text-ash">
        These strands overlap and coexist. The column is a reading aid, not a line of descent: Pāśupata ascetics, Āgamic
        priests, Tantric initiates and vernacular poets were often contemporaries.
      </p>
    </div>
  );
}
