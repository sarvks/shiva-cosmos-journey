import { createFileRoute } from "@tanstack/react-router";
import { texts } from "@/lib/shiva-data";
import { CosmicField } from "@/components/shiva/cosmic-field";
import { Caution, Reveal, Title } from "@/components/shiva/ui";

export const Route = createFileRoute("/texts")({
  head: () => ({
    meta: [
      { title: "Sacred Text Library — Śaiva Scriptures and Philosophy" },
      {
        name: "description",
        content:
          "Āgamas, Tantras, Purāṇas, Tamil Tirumurai, Śiva Sūtras, Spandakārikā, Tantrāloka and Vijñāna Bhairava — dates, traditions, major ideas and scholarly debates.",
      },
      { property: "og:title", content: "Sacred Text Library of Śaivism" },
      { property: "og:description", content: "A curated library of Śaiva scripture, philosophy and devotional literature with honest dating." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TextsPage,
});

const vbGroups = [
  ["Breath", "Attention placed at the turning points of inhalation and exhalation."],
  ["Space", "Contemplation of openness, of the sky, of the interval between things."],
  ["Sound", "Resonance, the fading of a struck bell, unstruck sound."],
  ["Perception", "Resting in the immediacy of a sensation before it is named."],
  ["Stillness", "The moment before movement, and the moment desire subsides."],
  ["Transitions", "Thresholds: waking to sleep, one thought to the next."],
  ["Awareness", "Turning attention back on the one who is aware."],
];

function TextsPage() {
  return (
    <main className="relative min-h-screen pt-28">
      <div className="fixed inset-0 -z-10" style={{ background: "linear-gradient(180deg, oklch(0.15 0.02 70), oklch(0.1 0.012 262) 60%)" }}>
        <CosmicField variant="ash" intensity={0.5} />
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-28 md:px-10">
        <Title
          eyebrow="Manuscript library"
          deva="ग्रन्थालय"
          title="Sacred Text Library"
          sub="Śaiva literature spans revealed Āgamas, Tantras, Purāṇic mythology, Tamil and Kannada devotional poetry, and rigorous philosophical treatises. Dates given here are approximate ranges, as the evidence allows."
        />

        <div className="grid gap-px overflow-hidden rounded-sm border border-border/60 md:grid-cols-2">
          {texts.map((t, i) => (
            <Reveal key={t.title} delay={i * 25}>
              <article className="h-full bg-card/40 p-6">
                <h2 className="font-display text-2xl text-moonlight">{t.title}</h2>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-ash">
                  {t.lang} · {t.genre} · {t.date}
                </p>
                <p className="mt-3 text-sm text-glacial/90">{t.tradition}</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/85">{t.idea}</p>
                <p className="mt-3 border-t border-border/60 pt-3 text-xs italic text-ash">{t.debate}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <section id="vijnana-bhairava" className="mt-20 scroll-mt-28">
          <Title
            eyebrow="Focus"
            deva="विज्ञान भैरव"
            title="Vijñāna Bhairava"
            sub="A Tantra of the non-dual Śaiva tradition, framed as the Goddess's question and Bhairava's answer: a sequence of contemplative approaches rather than doctrine."
          />
          <div className="grid gap-px overflow-hidden rounded-sm border border-border/60 sm:grid-cols-2 lg:grid-cols-4">
            {vbGroups.map(([k, v]) => (
              <div key={k} className="h-full bg-card/40 p-5">
                <p className="eyebrow mb-2">{k}</p>
                <p className="text-sm leading-relaxed text-foreground/80">{v}</p>
              </div>
            ))}
          </div>
          <Caution>
            These are conceptual groupings, not translations. The text circulates today largely through modern
            renderings that frame it as a mindfulness manual; historically it sits inside an initiatory Tantric context
            with its own metaphysics of consciousness.
          </Caution>
        </section>
      </div>
    </main>
  );
}
