import { Link } from "@tanstack/react-router";
import { shivaForms } from "@/lib/shiva-data";
import { Caution, Prose, Reveal, Scene, ScholarNote, Title } from "./ui";
import { PancakrityaWheel } from "./widgets";

export function WhatIsShiva() {
  const dimensions = [
    ["Deity", "An object of worship with narrative, iconography and temple ritual."],
    ["Consciousness", "In non-dual Śaiva systems, the awareness in which all experience appears."],
    ["Ascetic", "The naked yogin of the mountain, smeared with ash, indifferent to the world."],
    ["Householder", "Husband of Pārvatī, father of Gaṇeśa and Skanda, seated in a divine family."],
    ["Destroyer & transformer", "Saṃhāra as reabsorption — the ending that makes further arising possible."],
    ["Lord of Yoga", "Yogeśvara: the source and archetype of ascetic and meditative discipline."],
    ["Bhairava", "The formidable, boundary-dissolving aspect central to Śaiva Tantra."],
    ["Naṭarāja", "The dancer whose movement is the ordering of the cosmos."],
    ["Liṅga", "The aniconic sign in which worship is offered without portraiture."],
    ["Supreme reality", "In several Śaiva traditions, not one god among many but the ground of all."],
  ];

  return (
    <Scene id="what-is-shiva" variant="silence" radial>
      <Reveal>
        <Title
          eyebrow="II · Light and darkness"
          title="What is Śiva?"
          sub="Not one answer. The name gathers a deity, a philosophical absolute, an ascetic ideal, a family, a dance, a column of light — and communities that disagree, carefully and at length, about how these relate."
        />
      </Reveal>
      <div className="grid gap-px overflow-hidden rounded-sm border border-border/50 sm:grid-cols-2">
        {dimensions.map(([k, v], i) => (
          <Reveal key={k} delay={i * 40}>
            <div className="h-full bg-card/40 p-5 transition-colors hover:bg-card/70">
              <p className="eyebrow mb-2">{k}</p>
              <p className="text-sm leading-relaxed text-foreground/85">{v}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <Caution>
          Śiva is interpreted differently across Purāṇic traditions, Śaiva Siddhānta, the non-dual Kashmirian schools,
          Vīraśaiva/Liṅgāyat traditions, Tantric lineages and regional devotional cultures. This site keeps those
          differences visible rather than blending them into a single doctrine.
        </Caution>
      </Reveal>
    </Scene>
  );
}

export function AtlasPreview() {
  return (
    <Scene id="atlas" variant="stars" radial intensity={1.2}>
      <Reveal>
        <Title
          eyebrow="III · One Śiva, many forms"
          deva="रूप"
          title="The Śiva Atlas"
          sub="The single point of light divides into pathways. Each form carries its own iconography, texts, temple traditions and arguments."
        />
      </Reveal>
      <div className="grid gap-px overflow-hidden rounded-sm border border-border/50 sm:grid-cols-2 lg:grid-cols-3">
        {shivaForms.slice(0, 9).map((f, i) => (
          <Reveal key={f.id} delay={i * 30}>
            <Link
              to="/atlas"
              hash={f.id}
              className="group block h-full bg-card/40 p-5 transition-colors hover:bg-card/80"
            >
              <p className="deva text-xl text-moonlight/80 group-hover:text-glow">{f.deva}</p>
              <p className="mt-1 font-display text-2xl text-moonlight">{f.name}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-ash">{f.epithet}</p>
            </Link>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <Link
          to="/atlas"
          className="mt-8 inline-block border-b border-moonlight/25 pb-1 text-[11px] uppercase tracking-[0.3em] text-moonlight/80 hover:border-moonlight/70"
        >
          Enter the full atlas — fifteen forms →
        </Link>
      </Reveal>
    </Scene>
  );
}

export function Rudra() {
  return (
    <Scene
      id="rudra"
      variant="ash"
      intensity={1.2}
      tint="linear-gradient(180deg, oklch(0.14 0.02 260), oklch(0.2 0.03 250) 45%, oklch(0.12 0.015 262))"
    >
      <Reveal>
        <Title eyebrow="V · Storm and wilderness" deva="रुद्र" title="Rudra" sub="The ancient wild power." />
      </Reveal>
      <Reveal delay={100}>
        <Prose>
          <p>
            In the Ṛgveda, Rudra stands apart: invoked with caution, praised for the herbs that heal, asked above all to
            direct his arrows elsewhere. He belongs to the margins — forest, storm, mountain, the edge of the settlement.
          </p>
          <p>
            The Śatarudriya of the Yajurveda enumerates him in a hundred aspects at once terrible and auspicious, and it
            is here that the adjective <em>śiva</em>, "auspicious", is applied to him with propitiatory intent. The word
            that later names a supreme deity begins as a way of speaking carefully about a dangerous one.
          </p>
          <p>
            The relationship between this Vedic figure and the Śiva of later temples is one of long assimilation, not
            simple identity. Continuities are real: the ambivalence of destruction and healing, the mountain, the bow.
            Transformations are equally real: Rudra had no temple, no consort cycle, no liṅga cult.
          </p>
        </Prose>
      </Reveal>
      <ScholarNote>
        The Śatarudriya (Taittirīya Saṃhitā 4.5) remains the core liturgical text of Śaiva abhiṣeka today. Its use in
        modern temple ritual is often read backwards as evidence of unbroken Vedic-Śaiva identity; the ritual continuity
        is genuine, the theological identity is a later construction.
      </ScholarNote>
    </Scene>
  );
}

export function Mahadeva() {
  const attrs = [
    ["Jaṭā", "Matted hair, sign of the ascetic who does not groom for society."],
    ["Gaṅgā", "The river held in that hair — power received and restrained."],
    ["Candra", "The crescent moon: time measured, waxing and waning, worn lightly."],
    ["Tṛtīya-netra", "The third eye, associated with perception beyond the ordinary senses."],
    ["Nāga", "The serpent as ornament: what others fear, he wears."],
    ["Triśūla", "The trident, variously glossed as the three guṇas, three powers, three times."],
    ["Bhasman", "Ash, the residue of what has burnt — worn as remembrance and as purity."],
    ["Kailāsa", "The mountain seat: elevation, cold, stillness, distance from the world."],
  ];
  return (
    <Scene
      id="mahadeva"
      variant="snow"
      intensity={0.7}
      tint="linear-gradient(180deg, oklch(0.13 0.015 262), oklch(0.24 0.035 250) 60%, oklch(0.16 0.02 258))"
    >
      <Reveal>
        <Title eyebrow="VI · The storm calms" deva="महादेव" title="Mahādeva" sub="The Great God." />
      </Reveal>
      <Reveal delay={80}>
        <Prose>
          <p>
            Purāṇic literature assembles the attributes into a coherent portrait: the ascetic on the mountain who is also
            married, who dances, who grants boons carelessly and then must live with the consequences. Each ornament is
            an argument, not a decoration.
          </p>
        </Prose>
      </Reveal>
      <div className="mt-8 grid gap-px overflow-hidden rounded-sm border border-border/50 sm:grid-cols-2 lg:grid-cols-4">
        {attrs.map(([k, v], i) => (
          <Reveal key={k} delay={i * 30}>
            <div className="h-full bg-card/40 p-4">
              <p className="deva mb-1 text-sm text-glacial/80">{k}</p>
              <p className="text-sm leading-relaxed text-foreground/80">{v}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Scene>
  );
}

export function Kailasa() {
  const modes = [
    ["Physical mountain", "A 6,638 m peak in the Transhimalaya of western Tibet, near Lake Mānasarovar; unclimbed by long-standing religious consensus."],
    ["Sacred geography", "Circumambulated by Hindu, Buddhist, Jain and Bön pilgrims. No single tradition owns it, and the traditions name it differently."],
    ["Mythic Kailāsa", "The Purāṇic abode of Śiva and Pārvatī — a cosmological location that is not straightforwardly the geographic peak."],
  ];
  return (
    <Scene
      id="kailasa"
      variant="snow"
      intensity={1.3}
      tint="linear-gradient(180deg, oklch(0.15 0.02 258), oklch(0.3 0.03 235) 55%, oklch(0.18 0.02 250))"
    >
      <Reveal>
        <Title eyebrow="VII · Ascent through mist" deva="कैलास" title="Kailāsa" sub="The mountain of Śiva — and of several traditions at once." />
      </Reveal>
      <div className="grid gap-px overflow-hidden rounded-sm border border-border/50 md:grid-cols-3">
        {modes.map(([k, v], i) => (
          <Reveal key={k} delay={i * 90}>
            <div className="h-full bg-card/40 p-6">
              <p className="eyebrow mb-3">{k}</p>
              <p className="text-sm leading-relaxed text-foreground/85">{v}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <Caution>
          For Bön the mountain is Yungdrung Gutseg; for Tibetan Buddhists it is Kang Rinpoche, seat of Cakrasaṃvara; for
          Jains it is Aṣṭāpada, where Ṛṣabhanātha attained liberation. Presenting Kailāsa as exclusively Śaiva erases
          living traditions that also hold it sacred.
        </Caution>
      </Reveal>
    </Scene>
  );
}

export function Ganga() {
  return (
    <Scene
      id="ganga"
      variant="water"
      intensity={1.2}
      tint="linear-gradient(180deg, oklch(0.16 0.02 250), oklch(0.26 0.05 220) 50%, oklch(0.13 0.02 258))"
    >
      <Reveal>
        <Title eyebrow="VIII · Stars become water" deva="गङ्गा" title="Gaṅgā Descends" sub="Power received, slowed, made survivable." />
      </Reveal>
      <Reveal delay={80}>
        <Prose>
          <p>
            The narrative is familiar in many recensions: Bhagīratha's austerities bring the celestial river down, but her
            fall would shatter the earth. Śiva receives the torrent in his matted hair, and what emerges is a river that
            can be lived beside.
          </p>
          <p>
            The story braids together cosmic force, ascetic restraint, purification, ancestral obligation, and the plain
            geographic fact of a Himalayan river system on which a civilisation depends. It is myth doing several kinds of
            work simultaneously.
          </p>
        </Prose>
      </Reveal>
      <ScholarNote>
        Versions differ across the Rāmāyaṇa, Mahābhārata and Purāṇas in the motives assigned to Bhagīratha and in Gaṅgā's
        own agency. The variation is itself informative about the traditions telling it.
      </ScholarNote>
    </Scene>
  );
}

export function ThirdEye() {
  return (
    <Scene id="third-eye" variant="silence" radial intensity={0.8} tint="radial-gradient(70% 60% at 50% 50%, oklch(0.19 0.03 265), oklch(0.09 0.01 264) 75%)">
      <Reveal>
        <Title eyebrow="IX · A point in darkness" deva="त्रिनेत्र" title="The Third Eye" sub="A symbol of perception, not an anatomical claim." />
      </Reveal>
      <Reveal delay={80}>
        <Prose>
          <p>
            In Śaiva iconography the third eye is associated with insight, with knowledge that is not assembled from the
            senses, and with the destruction of illusion — famously in the burning of Kāma. Its opening is depicted as
            both revelation and incineration.
          </p>
          <p>
            Popular literature sometimes identifies it with the pineal gland or a "dormant organ". No such identification
            is made by the traditions, and none is supported by anatomy. The image is symbolic, and it is more interesting
            read that way.
          </p>
        </Prose>
      </Reveal>
    </Scene>
  );
}

export function Nataraja() {
  const icons = [
    ["Ḍamaru", "The drum in the upper right hand: sound, and with it the emission of the world."],
    ["Agni", "Fire in the upper left hand: dissolution, held in balance with the drum."],
    ["Abhaya-mudrā", "The gesture of reassurance — do not fear."],
    ["Gaja-hasta", "The lowered arm pointing to the raised foot: refuge."],
    ["Apasmāra", "The dwarf underfoot, personifying forgetfulness or heedlessness — subdued, not killed."],
    ["Prabhāmaṇḍala", "The ring of flames: the field within which all this occurs."],
  ];
  return (
    <Scene
      id="nataraja"
      variant="fire"
      radial
      intensity={1.25}
      tint="radial-gradient(80% 70% at 50% 55%, oklch(0.26 0.07 45), oklch(0.13 0.03 265) 70%)"
    >
      <Reveal>
        <Title eyebrow="X · The cosmic dance" deva="नटराज" title="Naṭarāja" sub="Lord of the Dance — the five acts performed at once." />
      </Reveal>
      <div className="grid gap-px overflow-hidden rounded-sm border border-border/50 sm:grid-cols-2 lg:grid-cols-3">
        {icons.map(([k, v], i) => (
          <Reveal key={k} delay={i * 40}>
            <div className="h-full bg-card/40 p-5">
              <p className="deva mb-2 text-base text-copper">{k}</p>
              <p className="text-sm leading-relaxed text-foreground/80">{v}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <Caution>
          Twentieth-century comparisons between Naṭarāja and particle physics are modern metaphors. They tell us about
          how the image has been received; they are not what the Āgamas, the Tamil hymnists or the Cōḻa bronze-casters
          were expressing.
        </Caution>
      </Reveal>
      <ScholarNote>
        The mature bronze type is a Cōḻa-period achievement (c. 10th–12th century CE), produced by lost-wax casting for
        processional use. Chidambaram's Cidambara Māhātmya and the Tamil Tirumurai are the primary theological framing.
      </ScholarNote>
    </Scene>
  );
}

export function Pancakritya() {
  return (
    <Scene
      id="pancakritya"
      variant="stars"
      radial
      tint="radial-gradient(90% 80% at 50% 50%, oklch(0.2 0.04 262), oklch(0.11 0.015 264) 72%)"
    >
      <Reveal>
        <Title eyebrow="XI · Five acts" deva="पञ्चकृत्य" title="Pañcakṛtya" sub="Emission, maintenance, reabsorption, concealment, grace — not a sequence but a simultaneity." />
      </Reveal>
      <Reveal delay={80}>
        <PancakrityaWheel />
      </Reveal>
      <ScholarNote>
        Concealment (tirodhāna) as a divine act is theologically striking: the same power that reveals also veils. Śaiva
        Siddhānta and the non-dual Kashmirian schools both use the framework but assign it different metaphysics.
      </ScholarNote>
    </Scene>
  );
}

export function Linga() {
  return (
    <Scene
      id="linga"
      variant="column"
      intensity={1.1}
      tint="linear-gradient(180deg, oklch(0.11 0.015 264), oklch(0.2 0.04 255) 50%, oklch(0.11 0.015 264))"
    >
      <Reveal>
        <Title eyebrow="XII · From form into geometry" deva="लिङ्ग" title="Liṅga" sub="Sign, mark, trace — that by which something otherwise unavailable is known." />
      </Reveal>
      <Reveal delay={80}>
        <Prose>
          <p>
            <em>Liṅga</em> means sign or mark. In Indian logic it is the term for the inferential mark — smoke as the
            liṅga of fire. Applied to Śiva, it names an aniconic support for worship: presence indicated rather than
            portrayed.
          </p>
          <p>
            The liṅga is normally set in a <em>yonipīṭha</em>, and Śaiva theology reads the composite as the inseparability
            of Śiva and Śakti. Sexual and generative interpretations do occur in some texts and in colonial-era European
            accounts, but they were never the sole or dominant meaning, and reading the liṅga as simply a phallus flattens
            a long philosophical vocabulary into one register.
          </p>
          <p>
            Regional practice varies enormously: the mukhaliṅga with carved faces, the naturally formed bāṇaliṅga of the
            Narmadā, the ice formation at Amarnath, the iṣṭaliṅga worn on the body in Liṅgāyat practice, and the
            mountain itself at Arunachala.
          </p>
        </Prose>
      </Reveal>
    </Scene>
  );
}

export function Lingodbhava() {
  return (
    <Scene
      id="lingodbhava"
      variant="column"
      intensity={1.4}
      tint="linear-gradient(180deg, oklch(0.1 0.01 264), oklch(0.28 0.07 80) 50%, oklch(0.1 0.01 264))"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 -z-[5] h-full w-[14vw] max-w-[180px] -translate-x-1/2 opacity-70"
        style={{ background: "linear-gradient(180deg, transparent, oklch(0.9 0.1 88 / 0.35), transparent)", filter: "blur(18px)" }}
        aria-hidden="true"
      />
      <Reveal>
        <Title eyebrow="XIII · The infinite column" deva="लिङ्गोद्भव" title="Liṅgodbhava" sub="Brahmā ascends. Viṣṇu descends. Neither finds an end." />
      </Reveal>
      <Reveal delay={80}>
        <Prose>
          <p>
            The Purāṇic narrative stages a contest of supremacy and resolves it with a column of fire that cannot be
            measured. Viṣṇu, as boar, digs downward; Brahmā, as swan, flies upward. One returns and admits defeat; in most
            Śaiva tellings the other lies, and is punished.
          </p>
          <p>
            The image concerns infinity and unknowability, but it is also frankly sectarian: it belongs to a period of
            vigorous argument between Śaiva and Vaiṣṇava communities, and it was carved into the western niche of temple
            after temple as a doctrinal statement.
          </p>
        </Prose>
      </Reveal>
      <Reveal>
        <Caution>This is Purāṇic theology, presented as such — not a historical or empirical account.</Caution>
      </Reveal>
    </Scene>
  );
}

export function Dakshinamurti() {
  return (
    <Scene
      id="dakshinamurti"
      variant="silence"
      intensity={0.5}
      tint="linear-gradient(180deg, oklch(0.13 0.015 262), oklch(0.19 0.02 90) 60%, oklch(0.12 0.012 262))"
    >
      <Reveal>
        <Title eyebrow="XIV · Almost motionless" deva="दक्षिणामूर्ति" title="Dakṣiṇāmūrti" sub="The silent teacher." />
      </Reveal>
      <Reveal delay={200}>
        <Prose>
          <p>
            Beneath a banyan, a young teacher sits before aged disciples. He says nothing. The doubts of the sages
            dissolve. The form appears on the southern wall of nearly every South Indian Śiva temple, where the
            circumambulating devotee meets it midway.
          </p>
          <p>
            The tradition treats silence (mauna) not as absence of teaching but as its adequate medium: what is to be
            recognised is not a proposition that could be transmitted by sentences.
          </p>
        </Prose>
      </Reveal>
    </Scene>
  );
}

export function ShivaShakti() {
  return (
    <Scene
      id="shiva-shakti"
      variant="mirror"
      radial
      tint="linear-gradient(90deg, oklch(0.14 0.02 262), oklch(0.2 0.05 300) 50%, oklch(0.14 0.02 262))"
    >
      <Reveal>
        <Title eyebrow="XV · Two fields" title="Śiva and Śakti" sub="Stillness → vibration → universe." />
      </Reveal>
      <div className="grid gap-px overflow-hidden rounded-sm border border-border/50 md:grid-cols-2">
        <Reveal>
          <div className="h-full bg-card/40 p-7">
            <p className="deva text-2xl text-moonlight">शिव</p>
            <p className="mt-2 font-display text-3xl text-moonlight">Śiva</p>
            <p className="eyebrow mt-2">Awareness</p>
            <p className="mt-4 text-sm leading-relaxed text-foreground/80">
              The light in which anything at all is manifest. Unchanging, and by itself incapable of being spoken about
              as an object.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="h-full bg-card/40 p-7">
            <p className="deva text-2xl text-moonlight">शक्ति</p>
            <p className="mt-2 font-display text-3xl text-moonlight">Śakti</p>
            <p className="eyebrow mt-2">Power of manifestation</p>
            <p className="mt-4 text-sm leading-relaxed text-foreground/80">
              The capacity of that awareness to know itself, to move, to appear as world. Not a partner joined from
              outside.
            </p>
          </div>
        </Reveal>
      </div>
      <Reveal>
        <Caution>
          Their relationship is not agreed across traditions. Non-dual Śaiva schools treat them as inseparable aspects of
          one reality; Śaiva Siddhānta maintains real distinctions; Śākta traditions frequently give the Goddess
          ontological priority. The disagreement is substantive.
        </Caution>
      </Reveal>
    </Scene>
  );
}

export function Ardhanarishvara() {
  return (
    <Scene id="ardhanarishvara" variant="mirror" tint="linear-gradient(90deg, oklch(0.16 0.02 255), oklch(0.22 0.04 330) 50%, oklch(0.16 0.02 255))">
      <Reveal>
        <Title eyebrow="XVI · One body" deva="अर्धनारीश्वर" title="Ardhanārīśvara" sub="The two fields resolve into a single symmetrical figure." />
      </Reveal>
      <Reveal delay={80}>
        <Prose>
          <p>
            A vertical seam divides one body: ash, matted hair and tiger skin on one side; ornament, coiffure and silk on
            the other. The sculpture insists that the division is a way of seeing a unity, not a joining of two things.
          </p>
          <p>
            Historically the form articulates metaphysical complementarity and the inseparability of consciousness and its
            power. Contemporary readings frequently interpret it in terms of gender fluidity and non-binary identity.
            Both readings deserve to be stated clearly — and distinguished, rather than one being projected onto the
            other's sources.
          </p>
        </Prose>
      </Reveal>
      <ScholarNote>
        Attested from the Kuṣāṇa period; the Elephanta and Ellora reliefs are among the most studied examples. Textual
        accounts appear in the Śiva and Liṅga Purāṇas and in Śilpa manuals specifying the asymmetric proportions.
      </ScholarNote>
    </Scene>
  );
}

export function Bhairava() {
  return (
    <Scene
      id="bhairava"
      variant="ash"
      intensity={1.1}
      tint="linear-gradient(180deg, oklch(0.08 0.01 264), oklch(0.22 0.09 25) 78%, oklch(0.1 0.02 20))"
    >
      <Reveal>
        <Title eyebrow="XVII · Deep red horizon" deva="भैरव" title="Bhairava" sub="The formidable one." />
      </Reveal>
      <Reveal delay={80}>
        <Prose>
          <p>
            Bhairava is the aspect of Śiva associated with the cremation ground, with the dissolution of boundaries, and
            with the destruction of fear by passing through it rather than avoiding it. He guards thresholds: of cities,
            of temples, of states of consciousness.
          </p>
          <p>
            In Trika thought, the name is glossed away from mere terror: Bhairava is the fullness of consciousness that
            includes precisely what the ordered self excludes. The Vijñāna Bhairava Tantra opens with the Goddess asking
            what this reality actually is — and the reply is a series of contemplative approaches rather than a
            definition.
          </p>
        </Prose>
      </Reveal>
      <ScholarNote>
        Kāpālika and other transgressive lineages are attested in inscriptions, in Āgamic classification, and in hostile
        literary caricature. Reading any one of these sources uncritically produces a distorted picture.
      </ScholarNote>
    </Scene>
  );
}

export function Aghora() {
  const cols = [
    ["Popular myth", "Sensational accounts fixate on cremation grounds and taboo substances, often produced for outside audiences."],
    ["Historical tradition", "Aghorī lineages as organised orders are relatively recent, with older antecedents in Kāpālika and Pāśupata asceticism."],
    ["Philosophy", "Aghora — 'not terrible' — names the abolition of aversion: if reality is not divided into pure and impure, revulsion is the last thing to dissolve."],
  ];
  return (
    <Scene id="aghora" variant="ash" intensity={1.3} tint="linear-gradient(180deg, oklch(0.12 0.008 250), oklch(0.2 0.012 90) 60%, oklch(0.1 0.008 250))">
      <Reveal>
        <Title eyebrow="XVIII · Ash and smoke" deva="अघोर" title="Aghora" sub="Beyond fear and aversion." />
      </Reveal>
      <div className="grid gap-px overflow-hidden rounded-sm border border-border/50 md:grid-cols-3">
        {cols.map(([k, v], i) => (
          <Reveal key={k} delay={i * 90}>
            <div className="h-full bg-card/40 p-6">
              <p className="eyebrow mb-3">{k}</p>
              <p className="text-sm leading-relaxed text-foreground/85">{v}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <Caution>
          Aghora is also one of the five faces of Sadāśiva in Āgamic theology — a mantra and a metaphysical position long
          before it is an ascetic subculture.
        </Caution>
      </Reveal>
    </Scene>
  );
}

export function Pashupati() {
  return (
    <Scene id="pashupati" variant="ash" intensity={0.8} tint="linear-gradient(180deg, oklch(0.13 0.015 262), oklch(0.2 0.03 150) 60%, oklch(0.12 0.015 262))">
      <Reveal>
        <Title eyebrow="XIX · Forest and herd" deva="पशुपति" title="Paśupati" sub="Lord of beings." />
      </Reveal>
      <Reveal delay={80}>
        <Prose>
          <p>
            <em>Paśu</em> means a bound animal — and, in Śaiva theology, the bound soul. <em>Pati</em> is the lord who
            holds the tether and can release it. The term therefore carries an entire soteriology inside a single name,
            developed most fully by the Pāśupata order and later by Śaiva Siddhānta.
          </p>
          <p>
            The Indus Valley seal often labelled "Paśupati" (Mohenjo-daro, M-304) is frequently presented as proof of a
            Śiva cult in the third millennium BCE. The identification, proposed by Marshall in the 1930s, remains
            contested: the figure's horns, posture and animals admit multiple readings, and the Indus script is
            undeciphered. Scholarly caution here is not scepticism about the tradition; it is honesty about evidence.
          </p>
        </Prose>
      </Reveal>
    </Scene>
  );
}
