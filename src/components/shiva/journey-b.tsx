import { Link } from "@tanstack/react-router";
import { Caution, Prose, Reveal, Scene, ScholarNote, Title } from "./ui";
import { ParadoxGrid, PatiPasuPasa, MantraRipple, TattvaCascade, TimelineStrands } from "./widgets";

export function Cosmology() {
  return (
    <Scene id="cosmology" variant="silence" radial intensity={0.9}>
      <Reveal>
        <Title
          eyebrow="XX · Descent"
          deva="तत्त्व"
          title="How does reality unfold?"
          sub="Pure consciousness differentiates by degrees. Nothing is added from outside: limitation is the self-veiling of what was already whole."
        />
      </Reveal>
      <Reveal delay={80}>
        <TattvaCascade />
      </Reveal>
      <Reveal>
        <Link
          to="/tattvas"
          className="mt-8 inline-block border-b border-moonlight/25 pb-1 text-[11px] uppercase tracking-[0.3em] text-moonlight/80 hover:border-moonlight/70"
        >
          Open the 36 Tattvas explorer →
        </Link>
      </Reveal>
    </Scene>
  );
}

export function KashmirShaivism() {
  const strands = [
    ["Trika", "The 'threefold' system — Śiva, Śakti and the bound soul — synthesised above all by Abhinavagupta."],
    ["Pratyabhijñā", "The philosophical school of recognition, argued rigorously by Utpaladeva against Buddhist opponents."],
    ["Spanda", "The doctrine of consciousness as dynamic pulsation, expounded in the Spandakārikā."],
    ["Krama", "A sequential, goddess-centred system focused on the phases of cognition."],
    ["Kaula currents", "Initiatory lineages whose ritual repertoire the Trika absorbed and reinterpreted."],
  ];
  return (
    <Scene
      id="kashmir"
      variant="snow"
      intensity={0.9}
      tint="linear-gradient(180deg, oklch(0.16 0.02 250), oklch(0.28 0.03 230) 55%, oklch(0.14 0.018 255))"
    >
      <Reveal>
        <Title eyebrow="XXII · Snow, sky, luminous geometry" title="Kashmir Śaivism" sub="A modern umbrella term for several related but distinct non-dual traditions." />
      </Reveal>
      <div className="grid gap-px overflow-hidden rounded-sm border border-border/50 sm:grid-cols-2 lg:grid-cols-3">
        {strands.map(([k, v], i) => (
          <Reveal key={k} delay={i * 40}>
            <div className="h-full bg-card/40 p-5">
              <p className="font-display text-xl text-moonlight">{k}</p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">{v}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <Caution>
          "Kashmir Śaivism" is a nineteenth- and twentieth-century label. Its authors did not use it, and several of the
          traditions it covers disagreed with one another. Dualist Śaiva Siddhānta also flourished in Kashmir.
        </Caution>
      </Reveal>
    </Scene>
  );
}

export function Pratyabhijna() {
  return (
    <Scene
      id="pratyabhijna"
      variant="mirror"
      radial
      intensity={1.1}
      tint="radial-gradient(75% 70% at 50% 50%, oklch(0.24 0.04 240), oklch(0.1 0.012 264) 72%)"
    >
      <Reveal>
        <Title eyebrow="XXIII · The mirror" deva="प्रत्यभिज्ञा" title="Pratyabhijñā" sub="Recognition." />
      </Reveal>
      <Reveal delay={150}>
        <p className="my-10 max-w-3xl font-display text-3xl leading-snug text-moonlight text-glow md:text-5xl">
          Nothing new is acquired. Something forgotten is recognised.
        </p>
      </Reveal>
      <Reveal delay={200}>
        <Prose>
          <p>
            Utpaladeva's argument is not devotional rhetoric. It is a technical claim developed against Buddhist
            epistemology: the unity presupposed by memory, by synthesis, by the very possibility of saying "I saw that
            before" cannot itself be a momentary cognition.
          </p>
          <p>
            Liberation, on this account, is not the acquisition of a new state but the collapse of a misidentification —
            like meeting someone you have been talking to for hours and only then realising who they are.
          </p>
        </Prose>
      </Reveal>
      <ScholarNote>
        Īśvarapratyabhijñākārikā, with Abhinavagupta's Vimarśinī and Bṛhatī-vimarśinī, forms the core of the school. Its
        claims are specific to non-dual Śaiva philosophy and are not shared by Śaiva Siddhānta.
      </ScholarNote>
    </Scene>
  );
}

export function Spanda() {
  return (
    <Scene id="spanda" variant="silence" radial intensity={0.7}>
      <Reveal>
        <Title eyebrow="XXIV · Subtle pulsation" deva="स्पन्द" title="Spanda" sub="Stillness that is never inert." />
      </Reveal>
      <Reveal delay={80}>
        <div className="spanda-pulse">
          <Prose>
            <p>
              Spanda is often rendered "vibration", which misleads if it suggests physical oscillation. It names the
              inherent dynamism of consciousness: the fact that awareness is not a static mirror but a self-referring
              movement, present equally in perception, emotion and the interval between two thoughts.
            </p>
            <p>
              The Spandakārikā directs attention to junctures — the beginning of intense emotion, the moment of waking,
              the point where one cognition gives way to another — as places where this movement can be noticed.
            </p>
          </Prose>
        </div>
      </Reveal>
    </Scene>
  );
}

export function PrakasaVimarsa() {
  return (
    <Scene id="prakasa" variant="mirror" tint="linear-gradient(90deg, oklch(0.13 0.015 262), oklch(0.22 0.03 210) 50%, oklch(0.13 0.015 262))">
      <Reveal>
        <Title eyebrow="XXV · Two aspects, one reality" title="Prakāśa and Vimarśa" />
      </Reveal>
      <div className="grid gap-px overflow-hidden rounded-sm border border-border/50 md:grid-cols-2">
        <Reveal>
          <div className="h-full bg-card/40 p-7">
            <p className="deva text-2xl text-moonlight">प्रकाश</p>
            <p className="mt-2 font-display text-3xl text-moonlight">Prakāśa</p>
            <p className="eyebrow mt-2">Illumination</p>
            <p className="mt-4 text-sm leading-relaxed text-foreground/80">
              The sheer manifest-ness of what appears. Without it nothing would be present at all — but light alone does
              not know that it is light.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="h-full bg-card/40 p-7">
            <p className="deva text-2xl text-moonlight">विमर्श</p>
            <p className="mt-2 font-display text-3xl text-moonlight">Vimarśa</p>
            <p className="eyebrow mt-2">Reflexive awareness</p>
            <p className="mt-4 text-sm leading-relaxed text-foreground/80">
              The self-apprehension by which that light knows itself as "I". This is precisely where non-dual Śaiva
              thought departs from a purely static absolute.
            </p>
          </div>
        </Reveal>
      </div>
      <Reveal>
        <Caution>
          The pair maps onto Śiva and Śakti. It is a distinction of aspects for the sake of analysis, not of two
          entities — and it is a position argued for, not a universal Indian assumption.
        </Caution>
      </Reveal>
    </Scene>
  );
}

export function Siddhanta() {
  return (
    <Scene
      id="siddhanta"
      variant="ash"
      intensity={0.6}
      tint="linear-gradient(180deg, oklch(0.14 0.015 260), oklch(0.24 0.04 60) 60%, oklch(0.13 0.015 260))"
    >
      <Reveal>
        <Title eyebrow="XXVI · Monumental stone" title="Śaiva Siddhānta" sub="Āgamic ritual, dualist-realist theology, and a soul that becomes like Śiva without becoming Śiva." />
      </Reveal>
      <Reveal delay={80}>
        <Prose>
          <p>
            Śaiva Siddhānta began as a pan-Indian Sanskrit tradition of initiation and temple ritual, grounded in the
            Āgamas. From roughly the twelfth century its centre of gravity shifted decisively to the Tamil south, where
            it absorbed the devotional world of the Nāyaṉmārs and produced its own Tamil philosophical literature.
          </p>
        </Prose>
      </Reveal>
      <Reveal delay={120}>
        <div className="mt-8">
          <PatiPasuPasa />
        </div>
      </Reveal>
      <ScholarNote>
        Distinguish the theological school from the broader Tamil Śaiva devotional culture. The Tirumurai hymns predate
        the Tamil Siddhānta treatises (Meykaṇṭār's Śivajñānabodham, 13th c.) and were not composed as school doctrine.
      </ScholarNote>
    </Scene>
  );
}

export function TamilShaivism() {
  return (
    <Scene
      id="tamil"
      variant="ash"
      intensity={0.7}
      tint="linear-gradient(180deg, oklch(0.13 0.015 262), oklch(0.26 0.06 55) 65%, oklch(0.13 0.015 262))"
    >
      <Reveal>
        <Title eyebrow="XXVIII · Corridors of stone and lamplight" title="Tamil Śaivism" sub="Nāyaṉmārs, Tēvāram, pilgrimage, and a landscape sung into sacredness." />
      </Reveal>
      <Reveal delay={80}>
        <Prose>
          <p>
            From the sixth century, poet-saints travelling between shrines composed hymns in Tamil naming each place and
            its deity. The corpus — later gathered as the Tirumurai — does not merely praise Śiva; it constructs a
            devotional map of the Tamil country, shrine by shrine.
          </p>
          <p>
            The sixty-three Nāyaṉmārs are commemorated in bronze in temple processions and narrated in Cēkkiḻār's
            twelfth-century Periya Purāṇam. Those accounts are hagiography: rich as literature and as social history,
            unreliable as biography.
          </p>
        </Prose>
      </Reveal>
      <div className="mt-8 grid gap-px overflow-hidden rounded-sm border border-border/50 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["Campantar", "Child-saint of the Tēvāram; hymns marked by intricate Tamil metre."],
          ["Appar (Tirunāvukkaracar)", "A convert from Jainism whose verses emphasise service and humility."],
          ["Cuntarar", "The 'harsh devotee', whose poems address Śiva with startling familiarity."],
          ["Māṇikkavācakar", "Author of the Tiruvācakam, celebrated for its intensity of longing."],
        ].map(([k, v], i) => (
          <Reveal key={k} delay={i * 40}>
            <div className="h-full bg-card/40 p-5">
              <p className="font-display text-xl text-moonlight">{k}</p>
              <p className="mt-2 text-sm text-foreground/80">{v}</p>
            </div>
          </Reveal>
        ))}

      </div>
    </Scene>
  );
}

export function Lingayat() {
  return (
    <Scene id="lingayat" variant="silence" intensity={0.5} tint="linear-gradient(180deg, oklch(0.13 0.015 262), oklch(0.2 0.02 30) 60%, oklch(0.12 0.012 262))">
      <Reveal>
        <Title eyebrow="XXX · Kannada country" title="Vīraśaiva / Liṅgāyat Traditions" sub="Iṣṭaliṅga, vacana poetry, and a movement that reorganised devotional life." />
      </Reveal>
      <Reveal delay={80}>
        <Prose>
          <p>
            From the twelfth century, communities in the Kannada-speaking region developed a practice centred on the
            iṣṭaliṅga worn on the body: worship without temple mediation, and a sharp critique of ritual formalism and
            hereditary hierarchy. Basava, an administrator and poet, is the movement's central figure in most accounts.
          </p>
          <p>
            The vacanas — short, direct, often startling free-verse utterances — carry this critique. They speak of
            labour as worship, of the body as temple, and of the emptiness of offerings made without transformation.
          </p>
          <p>
            Whether Liṅgāyat identity is best understood as a distinct religion or as a Śaiva tradition within Hinduism
            is an active question, argued within the community itself and in Indian public life. This site presents the
            debate rather than resolving it.
          </p>
        </Prose>
      </Reveal>
      <ScholarNote>
        The terms "Vīraśaiva" and "Liṅgāyat" are used differently by different groups, and their relationship is itself
        disputed. The vacana corpus was substantially edited and canonised in later centuries.
      </ScholarNote>
    </Scene>
  );
}

export function EarlyShaivism() {
  return (
    <Scene id="history" variant="ash" intensity={0.5}>
      <Reveal>
        <Title eyebrow="XXXII · Historical mode" title="Early Śaiva Traditions" sub="Pāśupata ascetics, the Mantramārga, and the problem with drawing a single line." />
      </Reveal>
      <Reveal delay={80}>
        <TimelineStrands />
      </Reveal>
    </Scene>
  );
}

export function Tantra() {
  const registers = [
    ["Initiation (dīkṣā)", "Entry into a lineage, with obligations; the organising institution of Tantric Śaivism."],
    ["Mantra and visualisation", "Structured practice with sound and deity-form, governed by ritual texts."],
    ["Temple worship", "Āgamic Siddhānta supplied the liturgy for much of South Indian temple practice."],
    ["Ascetic and transgressive", "Kāpālika and Kaula currents deliberately crossing purity boundaries."],
    ["Householder practice", "Domesticated forms with different obligations and permissions."],
    ["Philosophical systems", "Sophisticated metaphysics and epistemology developed within these lineages."],
  ];
  return (
    <Scene
      id="tantra"
      variant="sound"
      radial
      intensity={1}
      tint="radial-gradient(80% 70% at 50% 50%, oklch(0.22 0.06 300), oklch(0.11 0.015 264) 72%)"
    >
      <Reveal>
        <Title eyebrow="XXXIII · Ritual, mantra, body, cosmos" deva="तन्त्र" title="Śaiva Tantra" />
      </Reveal>
      <div className="grid gap-px overflow-hidden rounded-sm border border-border/50 sm:grid-cols-2 lg:grid-cols-3">
        {registers.map(([k, v], i) => (
          <Reveal key={k} delay={i * 35}>
            <div className="h-full bg-card/40 p-5">
              <p className="font-display text-lg text-moonlight">{k}</p>
              <p className="mt-2 text-sm text-foreground/80">{v}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <Caution>
          Tantra is not a synonym for sexuality. Historically it names a vast body of initiatory traditions concerned
          above all with ritual, mantra, cosmology and liberation. Sexual rites exist in some lineages, are absent from
          most, and are marginal to the literature as a whole.
        </Caution>
      </Reveal>
    </Scene>
  );
}

export function Mantra() {
  return (
    <Scene
      id="mantra"
      variant="sound"
      radial
      intensity={1.1}
      tint="radial-gradient(70% 70% at 50% 50%, oklch(0.2 0.035 260), oklch(0.1 0.012 264) 74%)"
    >
      <Reveal>
        <Title eyebrow="XXXIV–XXXV · Sound" deva="मन्त्र" title="Oṃ Namaḥ Śivāya" sub="The pañcākṣara — five syllables — one of the most widely recited formulas in Śaiva devotion." />
      </Reveal>
      <Reveal delay={100}>
        <MantraRipple />
      </Reveal>
      <Reveal delay={150}>
        <Prose>
          <p>
            Na-maḥ Śi-vā-ya is the five-syllable core; with the preceding <em>oṃ</em> it becomes the six-syllable form.
            The phrase appears already in the Śatarudriya, and Tamil Śaiva literature treats it as the mantra par
            excellence, glossing each syllable in Siddhānta terms.
          </p>
          <p>
            Mantra in these traditions is not merely a devotional slogan: Āgamic and Tantric texts develop an entire
            theology of sound, in which phonemes correspond to levels of manifestation. Many mantras are transmitted
            only through initiation; only widely public formulas appear here.
          </p>
        </Prose>
      </Reveal>
      <Reveal>
        <Caution>
          Claims that mantras operate at specific measurable frequencies or "activate DNA" have no basis in the
          traditions or in science. The traditional claims are about consciousness, lineage and ritual efficacy, and are
          interesting on their own terms.
        </Caution>
      </Reveal>
    </Scene>
  );
}

export function Yoga() {
  return (
    <Scene
      id="yoga"
      variant="silence"
      intensity={0.5}
      tint="linear-gradient(180deg, oklch(0.1 0.01 264), oklch(0.17 0.02 250) 60%, oklch(0.1 0.01 264))"
    >
      <Reveal>
        <Title eyebrow="XXXVI · A cave in the mountain" title="Śiva — Lord of Yoga" />
      </Reveal>
      <Reveal delay={80}>
        <Prose>
          <p>
            Śiva is Yogeśvara: seated in meditation, ash-covered, absorbed. Tapas — heat generated by austerity — is one
            of the oldest Indian religious ideas, and Śiva is its archetype and its patron.
          </p>
          <p>
            Classical yoga as systematised by Patañjali, the yoga sections (yogapāda) of the Śaiva Āgamas, the
            Tantric yogas of the Trika, and later haṭha yoga associated with Nātha lineages are related but genuinely
            distinct systems, with different goals, metaphysics and techniques. Collapsing them into one "ancient yoga"
            loses most of what is interesting.
          </p>
        </Prose>
      </Reveal>
      <div className="mt-8 grid gap-px overflow-hidden rounded-sm border border-border/50 md:grid-cols-3">
        {[
          ["Traditional cosmology", "Nāḍīs, cakras and the ascent of kuṇḍalinī described within a ritual and cosmological framework, with systems differing between texts."],
          ["Yogic model", "A map for practice: attention, breath and visualisation organised along a symbolic vertical axis."],
          ["Modern interpretation", "Twentieth-century readings that align cakras with nerve plexuses or endocrine glands are reinterpretations, not historical claims."],
        ].map(([k, v], i) => (
          <Reveal key={k} delay={i * 60}>
            <div className="h-full bg-card/40 p-6">
              <p className="eyebrow mb-3">{k}</p>
              <p className="text-sm leading-relaxed text-foreground/85">{v}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <Caution>
          Cakras and nāḍīs are religious and yogic subtle-body concepts. They are not established anatomical structures,
          and the number and arrangement of cakras varies considerably between traditions.
        </Caution>
      </Reveal>
    </Scene>
  );
}

export function Kashi() {
  return (
    <Scene
      id="kashi"
      variant="water"
      intensity={0.8}
      tint="linear-gradient(180deg, oklch(0.18 0.02 60), oklch(0.24 0.04 40) 45%, oklch(0.12 0.015 258))"
    >
      <Reveal>
        <Title eyebrow="XLII · Dawn on the river" deva="काशी" title="Kāśī — City of Śiva" />
      </Reveal>
      <Reveal delay={80}>
        <Prose>
          <p>
            Vārāṇasī is imagined in Śaiva literature as standing outside ordinary space and time — held, in some
            accounts, on Śiva's trident. To die within its boundary is said to bring liberation, and the city's
            association with death is inseparable from its association with release.
          </p>
          <p>
            Kāla Bhairava guards it. Ghats descend to the river. The rituals of cremation are conducted continuously and
            publicly, as ordinary work rather than spectacle, and are best described with that restraint.
          </p>
        </Prose>
      </Reveal>
    </Scene>
  );
}

export function Arunachala() {
  return (
    <Scene
      id="arunachala"
      variant="fire"
      intensity={0.8}
      tint="linear-gradient(180deg, oklch(0.14 0.02 40), oklch(0.32 0.09 45) 60%, oklch(0.12 0.015 30))"
    >
      <Reveal>
        <Title eyebrow="XLIII · Dusk on the hill" title="Arunachala" sub="The mountain is not the deity's home. It is said to be the deity." />
      </Reveal>
      <Reveal delay={80}>
        <Prose>
          <p>
            At Tiruvannamalai, Śiva is worshipped as the hill itself and as the fire element among the five element
            temples. The annual Kārttikai Dīpam lights a flame at the summit, and pilgrims circumambulate the base — a
            practice of walking around a god.
          </p>
          <p>
            In the twentieth century the site became widely known outside India through contemplative teachers
            associated with it; that reception is part of its history but not the whole of it.
          </p>
        </Prose>
      </Reveal>
    </Scene>
  );
}

export function Chidambaram() {
  return (
    <Scene
      id="chidambaram"
      variant="silence"
      intensity={0.4}
      tint="linear-gradient(180deg, oklch(0.14 0.015 260), oklch(0.11 0.012 264) 70%)"
    >
      <Reveal>
        <Title eyebrow="XLIV · Architecture dissolves" title="Chidambaram — Śiva as Space" />
      </Reveal>
      <Reveal delay={80}>
        <Prose>
          <p>
            Chidambaram houses the great Naṭarāja shrine and, beside it, the Cidambara Rahasya: a space behind a curtain
            where, in place of an image, there is nothing to see. Ākāśa — space — is the element associated with the
            site.
          </p>
          <p>
            The gesture is precise rather than merely mystical: the tradition that produced the most celebrated
            iconographic form of Śiva also built, in the same complex, an argument that no form is final.
          </p>
        </Prose>
      </Reveal>
    </Scene>
  );
}

export function FiveElements() {
  const list = [
    ["Earth", "Pṛthvī", "Ekāmbaranātha, Kāñcīpuram"],
    ["Water", "Ap", "Jambukeśvara, Tiruvanaikaval"],
    ["Fire", "Agni", "Aruṇācaleśvara, Tiruvannamalai"],
    ["Air", "Vāyu", "Kālahastīśvara, Srikalahasti"],
    ["Space", "Ākāśa", "Naṭarāja, Chidambaram"],
  ];
  return (
    <Scene id="elements" variant="ash" intensity={0.5}>
      <Reveal>
        <Title eyebrow="XLV · Pañcabhūta sthalas" title="The Five Element Temples" sub="A South Indian network in which five shrines are associated with the five gross elements." />
      </Reveal>
      <div className="grid gap-px overflow-hidden rounded-sm border border-border/50 sm:grid-cols-2 lg:grid-cols-5">
        {list.map(([e, s, t], i) => (
          <Reveal key={e} delay={i * 50}>
            <div className="h-full bg-card/40 p-5">
              <p className="deva text-base text-glacial/85">{s}</p>
              <p className="mt-1 font-display text-2xl text-moonlight">{e}</p>
              <p className="mt-2 text-sm text-foreground/75">{t}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <Caution>
          The mahābhūtas are categories of a classical Indian philosophy of experience, not an early version of chemical
          elements.
        </Caution>
      </Reveal>
    </Scene>
  );
}

export function Family() {
  return (
    <Scene id="family" variant="stars" intensity={0.7} tint="radial-gradient(85% 75% at 50% 45%, oklch(0.2 0.035 265), oklch(0.11 0.014 264) 74%)">
      <Reveal>
        <Title eyebrow="XLVI–XLVII · Household and threshold" title="Śiva's Family, and Nandi" />
      </Reveal>
      <div className="grid gap-px overflow-hidden rounded-sm border border-border/50 sm:grid-cols-2 lg:grid-cols-3">
        {[
          ["Pārvatī", "Daughter of the mountain; her austerities win a husband who had renounced the world. In Śākta framings she is not consort but source."],
          ["Gaṇeśa", "Remover of obstacles, worshipped first — with an origin story that turns on his father not recognising him."],
          ["Skanda / Kārttikeya", "Born to lead the gods' armies; especially beloved as Murukaṉ in the Tamil country."],
          ["Nandi", "Bull, vehicle, guardian and above all devotee — seated facing the sanctum, gazing at what the visitor has come to see."],
          ["Gaṅgā", "Present in the same matted hair, a source of narrative tension with Pārvatī in Purāṇic literature."],
          ["The paradox", "Śiva is simultaneously the renunciant who rejects domesticity and the deity most completely embedded in a family."],
        ].map(([k, v], i) => (
          <Reveal key={k} delay={i * 40}>
            <div className="h-full bg-card/40 p-5">
              <p className="font-display text-xl text-moonlight">{k}</p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">{v}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <Prose>
          <p className="mt-8">
            In the temple courtyard the visitor is instructed to look between Nandi's horns toward the sanctum: the
            devotee's gaze is borrowed. Attention is taught by imitation before it is taught by doctrine.
          </p>
        </Prose>
      </Reveal>
    </Scene>
  );
}

export function Paradox() {
  return (
    <Scene id="paradox" variant="mirror" intensity={0.6}>
      <Reveal>
        <Title eyebrow="XLVIII · Held together" title="The God of Paradox" sub="These are not contradictions the traditions failed to notice. They are the point." />
      </Reveal>
      <Reveal delay={80}>
        <ParadoxGrid />
      </Reveal>
    </Scene>
  );
}

export function Recognition() {
  return (
    <section
      id="recognition"
      className="relative isolate flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-6 py-32 text-center"
    >
      <Reveal>
        <p className="max-w-2xl font-display text-3xl leading-snug text-moonlight/90 md:text-5xl">
          What remains when every form disappears?
        </p>
      </Reveal>
      <Reveal delay={600}>
        <p className="deva mt-16 text-6xl text-moonlight text-glow md:text-8xl">शिव</p>
      </Reveal>
      <Reveal delay={900}>
        <p className="mx-auto mt-10 max-w-xl text-sm leading-relaxed text-ash">
          In some Śaiva traditions the journey ends not by finding Śiva elsewhere, but by recognising the nature of
          consciousness itself.
        </p>
      </Reveal>
      <Reveal delay={1100}>
        <p className="mx-auto mt-6 max-w-xl text-xs italic text-ash/70">
          This is a philosophical interpretation belonging especially to non-dual Śaiva traditions — not a universal
          Hindu doctrine, and not the position of Śaiva Siddhānta or of most devotional Śaivism.
        </p>
      </Reveal>
      <Reveal delay={1300}>
        <div className="mt-14 flex flex-wrap justify-center gap-2">
          <a href="#silence" className="rounded-sm border border-border px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-ash hover:text-moonlight">
            Begin again
          </a>
          <Link to="/atlas" className="rounded-sm border border-border px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-ash hover:text-moonlight">
            Explore the Śiva Atlas
          </Link>
          <a href="#kailasa" className="rounded-sm border border-border px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-ash hover:text-moonlight">
            Enter Kailāsa
          </a>
          <Link to="/tattvas" className="rounded-sm border border-border px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-ash hover:text-moonlight">
            Explore the 36 Tattvas
          </Link>
          <Link to="/geography" className="rounded-sm border border-border px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-ash hover:text-moonlight">
            Open Sacred Geography
          </Link>
          <Link to="/texts" className="rounded-sm border border-border px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-ash hover:text-moonlight">
            Sacred Text Library
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
