import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { shivaForms } from "@/lib/shiva-data";
import { CosmicField } from "@/components/shiva/cosmic-field";
import { FramingTabs, Meta, Reveal, Title } from "@/components/shiva/ui";
import type { Framing } from "@/components/shiva/mode-context";

export const Route = createFileRoute("/atlas")({
  head: () => ({
    meta: [
      { title: "Śiva Atlas — Fifteen Forms of Śiva" },
      {
        name: "description",
        content:
          "An interactive atlas of Śiva's forms — Rudra, Naṭarāja, Bhairava, Ardhanārīśvara, Sadāśiva and more — with devotional, philosophical and historical framings.",
      },
      { property: "og:title", content: "Śiva Atlas — Fifteen Forms of Śiva" },
      {
        property: "og:description",
        content: "Iconography, texts, temple traditions and scholarship for fifteen major forms of Śiva.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AtlasPage,
});

function AtlasPage() {
  const [framing, setFraming] = useState<Framing>("philosophical");

  return (
    <main className="relative min-h-screen pt-28">
      <div className="fixed inset-0 -z-10" style={{ background: "radial-gradient(100% 80% at 50% 0%, oklch(0.2 0.04 262), oklch(0.11 0.014 264) 70%)" }}>
        <CosmicField variant="stars" radial />
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-24 md:px-10">
        <Title
          eyebrow="Śiva Atlas"
          deva="एकः शिवः · अनेकानि रूपाणि"
          title="One Śiva — Many Forms"
          sub="Each portal keeps the same environment and changes the framing. Devotional, philosophical and historical readings are different kinds of claim, and are labelled as such."
        />

        <div className="sticky top-16 z-30 -mx-2 mb-10 flex flex-wrap items-center justify-between gap-3 bg-background/70 px-2 py-3 backdrop-blur">
          <FramingTabs value={framing} onChange={setFraming} />
          <p className="text-xs text-ash">{shivaForms.length} forms</p>
        </div>

        <div className="mb-14 flex flex-wrap gap-2">
          {shivaForms.map((f) => (
            <a
              key={f.id}
              href={`#${f.id}`}
              className="rounded-full border border-border/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-ash transition-colors hover:border-gold/60 hover:text-gold"
            >
              {f.name}
            </a>
          ))}
        </div>

        <div className="space-y-20">
          {shivaForms.map((f) => (
            <Reveal key={f.id}>
              <article id={f.id} className="scroll-mt-28 border-t border-border/60 pt-8">
                <p className="deva text-2xl text-moonlight/85">{f.deva}</p>
                <h2 className="mt-1 text-4xl text-moonlight md:text-5xl">{f.name}</h2>
                <p className="eyebrow mt-2">{f.epithet}</p>

                <p
                  className="mt-6 max-w-2xl border-l-2 pl-4 text-[15px] leading-relaxed text-foreground/90"
                  style={{ borderColor: `var(--${f.hue})` }}
                >
                  <span className="eyebrow mr-2">{framing}</span>
                  {f.framing[framing]}
                </p>

                <dl className="mt-8 grid gap-x-10 md:grid-cols-2">
                  <Meta label="Meaning / etymology" value={f.meaning} />
                  <Meta label="Iconography" value={f.iconography} />
                  <Meta label="Mythic narrative" value={f.myth} />
                  <Meta label="Philosophical significance" value={f.framing.philosophical} />
                  <Meta label="Associated schools" value={f.schools.join(" · ")} />
                  <Meta label="Important texts" value={f.texts.join(" · ")} />
                  <Meta label="Temple traditions" value={f.temples} />
                  <Meta label="Symbols" value={f.symbols.join(" · ")} />
                  <Meta label="Regional interpretations" value={f.regional} />
                  <Meta label="Historical development" value={f.history} />
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
