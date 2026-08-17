import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { places, type Place } from "@/lib/shiva-data";
import { CosmicField } from "@/components/shiva/cosmic-field";
import { Caution, Title } from "@/components/shiva/ui";

export const Route = createFileRoute("/geography")({
  head: () => ({
    meta: [
      { title: "Sacred Geography of Śiva — Temples, Mountains, Pilgrimage" },
      {
        name: "description",
        content:
          "An interactive map of Śaiva sacred geography: Kailāsa, Kāśī, Chidambaram, Arunachala, Paśupatinātha, Jyotirliṅga sites and philosophical centres.",
      },
      { property: "og:title", content: "Sacred Geography of Śiva" },
      { property: "og:description", content: "Mountains, temples, pilgrimage routes and philosophical centres of the Śaiva world." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GeographyPage,
});

const filters = [
  { id: "all", label: "All" },
  { id: "temple", label: "Temple" },
  { id: "mountain", label: "Mountain" },
  { id: "pilgrimage", label: "Pilgrimage" },
  { id: "philosophical", label: "Philosophical centre" },
  { id: "region", label: "Historical region" },
] as const;

function GeographyPage() {
  const [filter, setFilter] = useState<string>("all");
  const [active, setActive] = useState<Place | null>(places[0] ?? null);
  const visible = places.filter((p) => filter === "all" || p.kind === filter);

  return (
    <main className="relative min-h-screen pt-28">
      <div className="fixed inset-0 -z-10" style={{ background: "linear-gradient(180deg, oklch(0.14 0.02 255), oklch(0.1 0.012 262))" }}>
        <CosmicField variant="silence" intensity={0.6} />
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-28 md:px-10">
        <Title
          eyebrow="Sacred geography"
          deva="क्षेत्र"
          title="Sacred Geography of Śiva"
          sub="Śaiva traditions map theology onto land: a mountain that is the deity, a city that grants liberation, temples arranged by element. The diagram below is schematic, not cartographic."
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`rounded-full border px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] transition-colors ${
                filter === f.id ? "border-gold/70 text-gold" : "border-border text-ash hover:text-moonlight"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_330px]">
          <div className="glass relative aspect-[3/4] w-full overflow-hidden rounded-sm sm:aspect-[4/3]">
            <div className="absolute inset-0 opacity-25" style={{ background: "radial-gradient(60% 60% at 45% 45%, oklch(0.4 0.05 200 / 0.5), transparent 70%)" }} />
            {visible.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p)}
                aria-label={p.name}
                className="group absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
              >
                <span
                  className={`block h-2.5 w-2.5 rounded-full transition-all ${
                    active?.id === p.id ? "scale-150 bg-gold" : "bg-glacial/80 group-hover:bg-moonlight"
                  }`}
                  style={{ boxShadow: "0 0 14px 3px oklch(0.8 0.1 205 / 0.45)" }}
                />
                <span className="mt-1 block whitespace-nowrap text-[9px] uppercase tracking-[0.16em] text-ash group-hover:text-moonlight">
                  {p.name}
                </span>
              </button>
            ))}
          </div>

          <aside className="lg:sticky lg:top-28 lg:h-fit">
            {active ? (
              <div className="glass rounded-sm p-6">
                <span className="eyebrow">{active.kind}</span>
                <h2 className="mt-2 text-3xl text-moonlight">{active.name}</h2>
                {active.deva ? <p className="deva mt-1 text-xl text-moonlight/80">{active.deva}</p> : null}
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-ash">{active.region}</p>
                <p className="mt-4 text-sm leading-relaxed text-foreground/85">{active.note}</p>
              </div>
            ) : null}

            <div className="mt-6 space-y-3">
              <h3 className="eyebrow">Jyotirliṅga constellation</h3>
              <p className="text-sm text-ash">
                The twelve Jyotirliṅgas are a traditionally celebrated set, but the lists differ between Purāṇic sources
                and regional traditions. Treat the canon as a devotional and pilgrimage network with its own textual
                history, not as an ancient fixed register.
              </p>
            </div>
          </aside>
        </div>

        <Caution>
          Positions are indicative only. Site histories — Somnāth above all — involve contested and politically charged
          narratives; mythic accounts of foundation are not archaeological evidence.
        </Caution>
      </div>
    </main>
  );
}
