import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { tattvas, type Tattva } from "@/lib/shiva-data";
import { CosmicField } from "@/components/shiva/cosmic-field";
import { Caution, Title } from "@/components/shiva/ui";

export const Route = createFileRoute("/tattvas")({
  head: () => ({
    meta: [
      { title: "The 36 Tattvas — Śaiva Cosmology Explorer" },
      {
        name: "description",
        content:
          "Explore the 36 tattvas of non-dual Śaiva cosmology: pure, pure-impure and impure principles, from Śiva and Śakti down to earth — and back.",
      },
      { property: "og:title", content: "The 36 Tattvas — Śaiva Cosmology Explorer" },
      {
        property: "og:description",
        content: "How does reality unfold? An interactive map of the 36 tattvas, with manifestation and liberation traced in both directions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TattvaPage,
});

const groups = [
  { id: "pure", label: "Pure tattvas", note: "Śuddha — unity is undisturbed; distinction appears without separation.", tone: "oklch(0.82 0.1 205)" },
  { id: "pure-impure", label: "Pure-impure tattvas", note: "Śuddhāśuddha — māyā and the five cloaks that limit the subject.", tone: "oklch(0.85 0.11 88)" },
  { id: "impure", label: "Impure tattvas", note: "Aśuddha — subject and object stand fully apart; the world of ordinary experience.", tone: "oklch(0.66 0.13 48)" },
] as const;

function TattvaPage() {
  const [selected, setSelected] = useState<Tattva | null>(tattvas[0] ?? null);
  const [direction, setDirection] = useState<"manifest" | "liberate">("manifest");
  const [collapsed, setCollapsed] = useState(false);

  const ordered = direction === "manifest" ? tattvas : [...tattvas].reverse();
  const shown = collapsed ? ordered.filter((t) => t.group !== "impure" || t.n >= 32 || t.n <= 13) : ordered;

  return (
    <main className="relative min-h-screen pt-28">
      <div className="fixed inset-0 -z-10" style={{ background: "linear-gradient(180deg, oklch(0.13 0.02 258), oklch(0.09 0.01 264))" }}>
        <CosmicField variant="silence" radial intensity={0.9} />
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-28 md:px-10">
        <Title
          eyebrow="Śaiva cosmology"
          deva="षट्त्रिंशत् तत्त्वानि"
          title="How does reality unfold?"
          sub="The 36 tattvas describe the descent from undivided consciousness into material particularity — and, read upward, the path of recognition. This scheme belongs primarily to Tantric Śaiva traditions; it is not shared by all Hindu systems."
        />

        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setDirection("manifest")}
            className={`rounded-sm border px-4 py-2 text-[10px] uppercase tracking-[0.22em] ${direction === "manifest" ? "border-glacial/70 text-glacial" : "border-border text-ash"}`}
          >
            Trace manifestation ↓
          </button>
          <button
            onClick={() => setDirection("liberate")}
            className={`rounded-sm border px-4 py-2 text-[10px] uppercase tracking-[0.22em] ${direction === "liberate" ? "border-gold/70 text-gold" : "border-border text-ash"}`}
          >
            Trace liberation ↑
          </button>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="rounded-sm border border-border px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-ash hover:text-moonlight"
          >
            {collapsed ? "Expand all" : "Collapse groups"}
          </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="space-y-8">
            {groups.map((g) => {
              const items = shown.filter((t) => t.group === g.id);
              if (!items.length) return null;
              return (
                <section key={g.id}>
                  <h2 className="text-2xl text-moonlight" style={{ color: g.tone }}>
                    {g.label}
                  </h2>
                  <p className="mb-4 mt-1 text-sm text-ash">{g.note}</p>
                  <div className="grid gap-px overflow-hidden rounded-sm border border-border/60 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((t) => (
                      <button
                        key={t.n}
                        onClick={() => setSelected(t)}
                        aria-pressed={selected?.n === t.n}
                        className={`bg-card/40 p-4 text-left transition-colors hover:bg-card/80 ${selected?.n === t.n ? "bg-card/90" : ""}`}
                      >
                        <span className="eyebrow">{t.n}</span>
                        <p className="deva mt-1 text-base text-moonlight/85">{t.deva}</p>
                        <p className="font-display text-xl text-moonlight">{t.name}</p>
                        <p className="text-xs text-ash">{t.gloss}</p>
                      </button>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          <aside className="lg:sticky lg:top-28 lg:h-fit">
            {selected ? (
              <div className="glass rounded-sm p-6">
                <span className="eyebrow">Tattva {selected.n}</span>
                <p className="deva mt-2 text-3xl text-moonlight">{selected.deva}</p>
                <h3 className="mt-1 text-3xl text-moonlight">{selected.name}</h3>
                <p className="mt-1 text-sm text-glacial">{selected.gloss}</p>
                <p className="mt-4 text-sm leading-relaxed text-foreground/85">{selected.note}</p>
                <p className="mt-4 border-t border-border/60 pt-4 text-xs text-ash">
                  School note: Śaiva Siddhānta and the Trika share the enumeration but differ on the status of māyā and
                  on whether the soul's identity with Śiva is real or only similarity.
                </p>
              </div>
            ) : null}
          </aside>
        </div>

        <Caution>
          The enumeration extends the twenty-five tattvas of Sāṃkhya with eleven further principles. Numbering and
          groupings vary slightly between Āgamic and Trika sources; treat any single list as one tradition's
          systematisation.
        </Caution>
      </div>
    </main>
  );
}
