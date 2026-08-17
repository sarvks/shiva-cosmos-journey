export type Framing = {
  devotional: string;
  philosophical: string;
  historical: string;
};

export type ShivaForm = {
  id: string;
  name: string;
  deva: string;
  epithet: string;
  meaning: string;
  iconography: string;
  myth: string;
  schools: string[];
  texts: string[];
  temples: string;
  symbols: string[];
  regional: string;
  history: string;
  framing: Framing;
  hue: string; // css color token name
};

export const shivaForms: ShivaForm[] = [
  {
    id: "mahadeva",
    name: "Mahādeva",
    deva: "महादेव",
    epithet: "The Great God",
    meaning: "mahā (great) + deva (god) — a title of supremacy used widely in Purāṇic Śaiva literature.",
    iconography:
      "Matted hair (jaṭā) bearing the crescent moon and Gaṅgā, ash-smeared body, serpent, tiger skin, triśūla.",
    myth:
      "Purāṇic cycles present Mahādeva as ascetic on Kailāsa, husband of Pārvatī, and the deity whose grace resolves cosmic crises such as the churning of the ocean.",
    schools: ["Purāṇic Śaivism", "Śaiva Siddhānta", "Smārta traditions"],
    texts: ["Śiva Purāṇa", "Liṅga Purāṇa", "Mahābhārata (Anuśāsanaparvan)"],
    temples: "Central across North Indian Śaiva temple traditions and the Jyotirliṅga network.",
    symbols: ["crescent moon", "ash", "triśūla", "serpent"],
    regional:
      "In Nepal, Paśupatinātha is the great regional expression of Mahādeva; in Tamil traditions the equivalent supremacy is expressed through Śiva as Naṭarāja and as Liṅga.",
    history:
      "The epithet becomes prominent in the epic and Purāṇic periods, consolidating earlier Rudra imagery with newly systematised theistic supremacy claims.",
    framing: {
      devotional: "The compassionate lord who accepts poison for the world and gives himself to the simplest offering of water and leaf.",
      philosophical: "Greatness here is not size but ontological priority: that upon which manifestation depends while remaining unaffected.",
      historical: "Śaiva supremacy claims develop alongside competing Vaiṣṇava claims; Purāṇic texts are theological literature, not chronicles.",
    },
    hue: "moonlight",
  },
  {
    id: "rudra",
    name: "Rudra",
    deva: "रुद्र",
    epithet: "The Wild One",
    meaning: "Possibly 'the howler' or 'the ruddy one'; the etymology is debated in scholarship.",
    iconography: "Vedic hymns describe a bow-bearing, storm-associated deity, both feared and invoked for healing herbs.",
    myth: "The Śatarudriya of the Yajurveda enumerates Rudra's many aspects, fierce and auspicious alike.",
    schools: ["Vedic religion", "Later Śaiva readings of Vedic material"],
    texts: ["Ṛgveda", "Śatarudriya", "Śvetāśvatara Upaniṣad"],
    temples: "Rudra is largely a liturgical rather than temple-iconographic figure; the Rudram remains central to Śaiva ritual recitation.",
    symbols: ["storm", "bow", "healing herbs", "mountain wilderness"],
    regional: "Rudram recitation is central in both South Indian temple liturgy and North Indian abhiṣeka practice.",
    history:
      "Continuity between Vedic Rudra and later Śiva is real but not simple identity; scholars trace a long process of assimilation rather than one unchanging deity.",
    framing: {
      devotional: "The fierce protector whose anger is also medicine — feared, praised, and asked for peace.",
      philosophical: "Rudra introduces the theme that the same power which dissolves also heals.",
      historical: "Vedic Rudra and Purāṇic Śiva were not always understood as identical; the equation was constructed over centuries.",
    },
    hue: "ash",
  },
  {
    id: "nataraja",
    name: "Naṭarāja",
    deva: "नटराज",
    epithet: "Lord of the Dance",
    meaning: "naṭa (dancer) + rāja (king).",
    iconography:
      "Ḍamaru in the upper right hand, fire in the upper left, abhaya-mudrā of reassurance, the lowered hand pointing to the raised foot, the dwarf Apasmāra beneath, all within a ring of flames.",
    myth: "Associated especially with Chidambaram and the Tamil Śaiva conception of the ānanda-tāṇḍava, the dance of bliss.",
    schools: ["Tamil Śaivism", "Śaiva Siddhānta"],
    texts: ["Tirumurai", "Cidambara Māhātmya", "Śaiva Āgamas"],
    temples: "Chidambaram Naṭarāja temple; the bronze form is a masterwork of Cōḻa-period metal casting.",
    symbols: ["ḍamaru", "flame", "Apasmāra", "ring of fire"],
    regional: "Predominantly a South Indian iconographic development, later adopted as a pan-Indian emblem.",
    history:
      "The mature bronze type crystallises under the Cōḻas (c. 10th–12th century CE), drawing on earlier stone and textual traditions.",
    framing: {
      devotional: "The dancer whose every gesture is grace; the raised foot is refuge.",
      philosophical: "The five acts (pañcakṛtya) are enacted simultaneously — creation, maintenance, dissolution, concealment, grace.",
      historical:
        "Modern comparisons to particle physics are twentieth-century metaphors, not the meanings articulated by the Āgamas or the sculptors.",
    },
    hue: "ember",
  },
  {
    id: "dakshinamurti",
    name: "Dakṣiṇāmūrti",
    deva: "दक्षिणामूर्ति",
    epithet: "The Silent Teacher",
    meaning: "The south-facing form; 'dakṣiṇa' also carries connotations of skill and of the southern direction.",
    iconography: "Seated beneath a banyan, one foot on Apasmāra, hand in cin-mudrā, surrounded by aged sages who are his pupils.",
    myth: "Knowledge is transmitted in silence; the elderly disciples' doubts dissolve without a word spoken.",
    schools: ["Advaita Vedānta readings", "Śaiva Siddhānta", "Smārta traditions"],
    texts: ["Dakṣiṇāmūrti Stotra (attributed to Śaṅkara)", "Āgamic iconographic manuals"],
    temples: "A standard niche figure on the southern wall of South Indian Śiva temples.",
    symbols: ["banyan", "cin-mudrā", "manuscript", "silence"],
    regional: "Especially prominent in Tamil and Kerala temple architecture.",
    history: "The form is codified in medieval iconographic texts and became a favoured subject of Advaitic devotional poetry.",
    framing: {
      devotional: "The guru of gurus, who teaches by presence alone.",
      philosophical: "Silence (mauna) is treated as the adequate expression of a truth not constructed by propositions.",
      historical: "Advaitic appropriation of this form is one route by which Śaiva iconography entered Vedāntic devotion.",
    },
    hue: "sandstone",
  },
  {
    id: "ardhanarishvara",
    name: "Ardhanārīśvara",
    deva: "अर्धनारीश्वर",
    epithet: "The Lord Who Is Half Woman",
    meaning: "ardha (half) + nārī (woman) + īśvara (lord).",
    iconography: "A single body split vertically: matted hair, ash and tiger skin on one side; coiffed hair, ornament and silk on the other.",
    myth: "Purāṇic narratives explain the form as the answer to a claim that the feminine could be dispensed with in creation.",
    schools: ["Purāṇic Śaivism", "Non-dual Śaiva-Śākta traditions"],
    texts: ["Śiva Purāṇa", "Liṅga Purāṇa", "Iconographic Śilpa texts"],
    temples: "Elephanta, Ellora and numerous South Indian temple niches.",
    symbols: ["duality in one body", "mirror symmetry"],
    regional: "Widespread; the Elephanta relief is among the most celebrated versions.",
    history: "Attested from the Kuṣāṇa period onward and elaborated in Gupta and post-Gupta sculpture.",
    framing: {
      devotional: "The vision that no devotee approaches Śiva apart from the Goddess.",
      philosophical: "Consciousness and its power of self-expression are inseparable, not two things joined.",
      historical:
        "Contemporary readings of the form as a statement about gender identity are modern interpretations; historical texts read it primarily as metaphysical complementarity. Both readings are worth presenting, distinctly.",
    },
    hue: "glacial",
  },
  {
    id: "bhairava",
    name: "Bhairava",
    deva: "भैरव",
    epithet: "The Formidable One",
    meaning: "From bhīru / bhaya — associated with terror, but glossed in Tantric texts as that which fills and supports.",
    iconography: "Naked or minimally clad, garlanded with skulls, accompanied by a dog, holding a skull-cup and staff.",
    myth: "The severing of Brahmā's fifth head and the subsequent kapālika vow of expiation.",
    schools: ["Śaiva Tantra", "Trika / Kashmir Śaivism", "Kāpālika traditions"],
    texts: ["Vijñāna Bhairava Tantra", "Svacchanda Tantra", "Tantrāloka"],
    temples: "Kāla Bhairava at Kāśī and Ujjain; guardian shrines at temple boundaries across India.",
    symbols: ["cremation ground", "dog", "skull-cup", "absolute darkness"],
    regional: "Guardian Bhairava shrines are near-universal in Śaiva temple complexes; Nepal's Bhairava cult is especially elaborate.",
    history: "Central to the transgressive strands of early medieval Tantric Śaivism, later domesticated into temple guardianship.",
    framing: {
      devotional: "The lord who devours fear itself, guardian of the city and of the threshold.",
      philosophical: "In Trika thought Bhairava names the full, undivided consciousness that includes what the ego excludes.",
      historical:
        "Kāpālika practice is attested in inscriptions and hostile literary portrayals alike; sensational accounts should be read critically.",
    },
    hue: "crimson",
  },
  {
    id: "pashupati",
    name: "Paśupati",
    deva: "पशुपति",
    epithet: "Lord of Beings",
    meaning: "paśu (bound being, literally 'beast') + pati (lord).",
    iconography: "Often shown with the four-faced Paśupatinātha type in Nepal.",
    myth: "Bound souls are released by the lord who holds the tether.",
    schools: ["Pāśupata Śaivism", "Śaiva Siddhānta"],
    texts: ["Pāśupatasūtra", "Gaṇakārikā", "Kauṇḍinya's commentary"],
    temples: "Paśupatinātha, Kathmandu — a major living Śaiva centre.",
    symbols: ["tether (pāśa)", "herd", "forest"],
    regional: "Nepal, Gujarat and early Deccan sites preserve strong Pāśupata traces.",
    history:
      "The so-called 'Paśupati seal' from the Indus Valley is frequently invoked in popular accounts; its identification with Śiva is contested and not established.",
    framing: {
      devotional: "The shepherd of all beings, who does not abandon even the least of them.",
      philosophical: "The triad of pati, paśu and pāśa provides the structural core of dualist Śaiva theology.",
      historical: "Pāśupata ascetics are among the earliest organised Śaiva orders documented in inscriptions and texts.",
    },
    hue: "bronze",
  },
  {
    id: "lingodbhava",
    name: "Liṅgodbhava",
    deva: "लिङ्गोद्भव",
    epithet: "Emergence from the Column",
    meaning: "The arising (udbhava) of Śiva from the liṅga of fire.",
    iconography: "A pillar of flame within which Śiva appears; a boar below and a swan above mark Viṣṇu's and Brahmā's fruitless search.",
    myth: "Neither Brahmā ascending nor Viṣṇu descending finds an end to the column.",
    schools: ["Purāṇic Śaivism", "Śaiva Siddhānta"],
    texts: ["Liṅga Purāṇa", "Śiva Purāṇa"],
    temples: "The standard western-niche image of South Indian Śiva temples.",
    symbols: ["infinite column", "fire", "boar", "swan"],
    regional: "A defining sectarian image of Tamil and Karnataka temple programmes.",
    history: "The narrative articulates Śaiva supremacy in a period of vigorous sectarian argument; it is theology, not history.",
    framing: {
      devotional: "Even the gods cannot measure him; devotion, not measurement, is the way.",
      philosophical: "The unmeasurable is not distant — it is the very ground in which measuring occurs.",
      historical: "The image belongs to inter-sectarian polemics between Śaiva and Vaiṣṇava communities.",
    },
    hue: "gold",
  },
  {
    id: "tripurantaka",
    name: "Tripurāntaka",
    deva: "त्रिपुरान्तक",
    epithet: "Destroyer of the Three Cities",
    meaning: "tripura (three cities) + antaka (ender).",
    iconography: "Bow drawn, riding a chariot whose parts are the cosmos itself.",
    myth: "Three flying fortresses are destroyed with a single arrow at the instant of their alignment.",
    schools: ["Purāṇic Śaivism"],
    texts: ["Mahābhārata", "Śiva Purāṇa", "Tamil Tēvāram hymns"],
    temples: "A recurrent relief subject from Ellora to the Cōḻa temples.",
    symbols: ["bow", "single arrow", "three cities"],
    regional: "Widely depicted; especially favoured in Pallava and Cōḻa sculpture.",
    history: "Elaborated from Vedic antecedents of Rudra's archery into a full Purāṇic epic.",
    framing: {
      devotional: "The three cities are read as the three impurities burnt away by grace.",
      philosophical: "Destruction is timed to a moment of alignment — dissolution as precision, not rage.",
      historical: "A favoured royal image: kings identified their conquests with Śiva's victory.",
    },
    hue: "copper",
  },
  {
    id: "nilakantha",
    name: "Nīlakaṇṭha",
    deva: "नीलकण्ठ",
    epithet: "The Blue-Throated",
    meaning: "nīla (blue) + kaṇṭha (throat).",
    iconography: "A dark blue mark at the throat; often shown holding the poison in the palm.",
    myth: "At the churning of the ocean Śiva swallows the hālāhala poison and holds it in his throat.",
    schools: ["Purāṇic Śaivism", "Devotional traditions across India"],
    texts: ["Śiva Purāṇa", "Bhāgavata Purāṇa", "Tēvāram"],
    temples: "Widely invoked; a major theme of Mahāśivarātri observance.",
    symbols: ["poison held, not swallowed", "blue throat"],
    regional: "Ubiquitous across Indian Śaiva devotion.",
    history: "The samudra-manthana narrative is shared with Vaiṣṇava traditions but given a Śaiva climax here.",
    framing: {
      devotional: "He takes what no one else will take, and does not let it harm the world.",
      philosophical: "Holding — neither rejecting nor absorbing — becomes a model of contained transformation.",
      historical: "Shared epic material reworked to establish Śaiva pre-eminence.",
    },
    hue: "midnight",
  },
  {
    id: "harihara",
    name: "Harihara",
    deva: "हरिहर",
    epithet: "Viṣṇu and Śiva as One Body",
    meaning: "Hari (Viṣṇu) + Hara (Śiva).",
    iconography: "A vertically composite figure: conch and cakra on one half, matted hair and axe on the other.",
    myth: "Presented as a resolution to sectarian dispute.",
    schools: ["Smārta traditions", "Certain royal cults"],
    texts: ["Purāṇic passages", "Iconographic manuals"],
    temples: "Badami, Halebidu and other Deccan sites.",
    symbols: ["composite body", "reconciliation"],
    regional: "Especially prominent in Karnataka and the early Deccan.",
    history: "Often sponsored by rulers seeking to avoid alienating either sectarian community.",
    framing: {
      devotional: "The reminder that quarrelling over the supreme is itself a limitation.",
      philosophical: "Identity claims between deities raise the question of what a divine name designates.",
      historical: "A political as much as theological image, tied to royal patronage strategies.",
    },
    hue: "bronze",
  },
  {
    id: "somaskanda",
    name: "Somāskanda",
    deva: "सोमास्कन्द",
    epithet: "With Umā and Skanda",
    meaning: "sa (with) + Umā + Skanda.",
    iconography: "Śiva and Umā seated together with the child Skanda between them.",
    myth: "The divine household as an object of contemplation.",
    schools: ["Tamil Śaivism", "Śaiva Siddhānta"],
    texts: ["Āgamic ritual manuals", "Tēvāram"],
    temples: "A central processional bronze type in Pallava and Cōḻa temples.",
    symbols: ["family", "throne", "householder Śiva"],
    regional: "Distinctly South Indian.",
    history: "Prominent from the Pallava period; central to festival processions.",
    framing: {
      devotional: "The lord as family, near and approachable.",
      philosophical: "The ascetic-householder tension is not resolved but held.",
      historical: "Ritual function shaped iconography: portable bronzes required a compact composition.",
    },
    hue: "copper",
  },
  {
    id: "aghora",
    name: "Aghora",
    deva: "अघोर",
    epithet: "The Not-Terrible",
    meaning: "a (not) + ghora (terrible) — often read as that which is beyond fear and aversion.",
    iconography: "One of the five faces of Sadāśiva, facing south, associated with dissolution.",
    myth: "The face that consumes and thereby purifies.",
    schools: ["Śaiva Siddhānta", "Śaiva Tantra", "Aghorī lineages"],
    texts: ["Āgamic descriptions of the pañcabrahma", "Taittirīya Āraṇyaka mantras"],
    temples: "Encoded in Sadāśiva iconography and mantra ritual rather than separate shrines.",
    symbols: ["ash", "smoke", "non-aversion"],
    regional: "Aghorī ascetic lineages are historically associated with Vārāṇasī and surrounding regions.",
    history:
      "Modern popular accounts of Aghorīs are frequently sensationalised; the philosophical core concerns the abolition of aversion, not shock.",
    framing: {
      devotional: "Nothing is outside his acceptance.",
      philosophical: "If the divine is everywhere, aversion itself is the last impurity to dissolve.",
      historical: "Aghorī orders are relatively recent as organised lineages, though their antecedents are older.",
    },
    hue: "ash",
  },
  {
    id: "sadashiva",
    name: "Sadāśiva",
    deva: "सदाशिव",
    epithet: "The Ever-Auspicious",
    meaning: "sadā (always) + śiva (auspicious).",
    iconography: "Five faces — Īśāna, Tatpuruṣa, Aghora, Vāmadeva, Sadyojāta — and ten arms.",
    myth: "Less a narrative figure than a theological and ritual centre.",
    schools: ["Śaiva Siddhānta", "Āgamic ritual traditions"],
    texts: ["Śaiva Āgamas", "Mṛgendrāgama"],
    temples: "The presiding form in Āgamic temple consecration and in the tattva hierarchy.",
    symbols: ["five faces", "pañcabrahma mantras"],
    regional: "Codified in South Indian Āgamic practice; Sadāśiva images occur across the subcontinent.",
    history: "Sadāśiva marks the point in the tattva scheme where undivided consciousness begins to take determinate form.",
    framing: {
      devotional: "The form given for worship by the formless.",
      philosophical: "Sadāśiva-tattva is the first stage where 'I' and 'this' arise together, with 'I' predominant.",
      historical: "A systematising theological development of the Āgamic period.",
    },
    hue: "glacial",
  },
  {
    id: "shankara",
    name: "Śaṅkara",
    deva: "शङ्कर",
    epithet: "The Benevolent",
    meaning: "śam (well-being) + kara (maker) — 'the one who makes auspicious'.",
    iconography: "The gentle, seated, benedictory aspect of Śiva.",
    myth: "The euphemistic naming of a fierce deity as auspicious is itself ancient.",
    schools: ["Purāṇic Śaivism", "Smārta traditions"],
    texts: ["Śatarudriya", "Purāṇic stotras"],
    temples: "The name pervades temple liturgy and hymnody across India.",
    symbols: ["benediction", "auspiciousness"],
    regional: "Universal.",
    history: "The word śiva itself begins as an adjective meaning auspicious, applied propitiatingly to Rudra.",
    framing: {
      devotional: "The name itself is the blessing.",
      philosophical: "Naming the fearsome as auspicious reframes the relation between destruction and good.",
      historical: "A linguistic trace of how Rudra became Śiva.",
    },
    hue: "moonlight",
  },
];

export type Tattva = {
  n: number;
  name: string;
  deva: string;
  gloss: string;
  group: "pure" | "pure-impure" | "impure";
  note: string;
};

export const tattvas: Tattva[] = [
  { n: 1, name: "Śiva", deva: "शिव", gloss: "Pure consciousness", group: "pure", note: "Undifferentiated awareness; the light in which all appears." },
  { n: 2, name: "Śakti", deva: "शक्ति", gloss: "Power of awareness", group: "pure", note: "Not a second thing: consciousness's own capacity to know and act." },
  { n: 3, name: "Sadāśiva", deva: "सदाशिव", gloss: "'I am this' — I predominant", group: "pure", note: "The first faint delineation of an object within the subject." },
  { n: 4, name: "Īśvara", deva: "ईश्वर", gloss: "'This am I' — this predominant", group: "pure", note: "The universe becomes vivid while identity is retained." },
  { n: 5, name: "Śuddhavidyā", deva: "शुद्धविद्या", gloss: "Pure knowledge", group: "pure", note: "Subject and object in balance; distinction without separation." },
  { n: 6, name: "Māyā", deva: "माया", gloss: "Power of differentiation", group: "pure-impure", note: "In non-dual Śaiva thought māyā is a real power of Śiva, not mere illusion." },
  { n: 7, name: "Kalā", deva: "कला", gloss: "Limited agency", group: "pure-impure", note: "One of the five kañcukas or cloaks." },
  { n: 8, name: "Vidyā", deva: "विद्या", gloss: "Limited knowledge", group: "pure-impure", note: "Knowing becomes partial." },
  { n: 9, name: "Rāga", deva: "राग", gloss: "Desire, attachment", group: "pure-impure", note: "Fullness becomes want." },
  { n: 10, name: "Kāla", deva: "काल", gloss: "Time", group: "pure-impure", note: "Succession appears." },
  { n: 11, name: "Niyati", deva: "नियति", gloss: "Causal restriction", group: "pure-impure", note: "Spatial and causal limitation." },
  { n: 12, name: "Puruṣa", deva: "पुरुष", gloss: "The limited subject", group: "impure", note: "Consciousness now experiencing itself as an individual." },
  { n: 13, name: "Prakṛti", deva: "प्रकृति", gloss: "Objective nature", group: "impure", note: "The field of experienced objectivity." },
  { n: 14, name: "Buddhi", deva: "बुद्धि", gloss: "Intellect, ascertainment", group: "impure", note: "Determination and judgement." },
  { n: 15, name: "Ahaṃkāra", deva: "अहंकार", gloss: "Ego-sense", group: "impure", note: "Appropriation: 'mine'." },
  { n: 16, name: "Manas", deva: "मनस्", gloss: "Mind", group: "impure", note: "Synthesises sense data into perception." },
  { n: 17, name: "Śrotra", deva: "श्रोत्र", gloss: "Hearing", group: "impure", note: "Jñānendriya — organ of knowledge." },
  { n: 18, name: "Tvak", deva: "त्वक्", gloss: "Touch", group: "impure", note: "Jñānendriya." },
  { n: 19, name: "Cakṣus", deva: "चक्षुस्", gloss: "Sight", group: "impure", note: "Jñānendriya." },
  { n: 20, name: "Rasanā", deva: "रसना", gloss: "Taste", group: "impure", note: "Jñānendriya." },
  { n: 21, name: "Ghrāṇa", deva: "घ्राण", gloss: "Smell", group: "impure", note: "Jñānendriya." },
  { n: 22, name: "Vāk", deva: "वाक्", gloss: "Speech", group: "impure", note: "Karmendriya — organ of action." },
  { n: 23, name: "Pāṇi", deva: "पाणि", gloss: "Grasping", group: "impure", note: "Karmendriya." },
  { n: 24, name: "Pāda", deva: "पाद", gloss: "Locomotion", group: "impure", note: "Karmendriya." },
  { n: 25, name: "Pāyu", deva: "पायु", gloss: "Excretion", group: "impure", note: "Karmendriya." },
  { n: 26, name: "Upastha", deva: "उपस्थ", gloss: "Generation, rest", group: "impure", note: "Karmendriya." },
  { n: 27, name: "Śabda", deva: "शब्द", gloss: "Sound as such", group: "impure", note: "Tanmātra — subtle element." },
  { n: 28, name: "Sparśa", deva: "स्पर्श", gloss: "Contact as such", group: "impure", note: "Tanmātra." },
  { n: 29, name: "Rūpa", deva: "रूप", gloss: "Form as such", group: "impure", note: "Tanmātra." },
  { n: 30, name: "Rasa", deva: "रस", gloss: "Flavour as such", group: "impure", note: "Tanmātra." },
  { n: 31, name: "Gandha", deva: "गन्ध", gloss: "Odour as such", group: "impure", note: "Tanmātra." },
  { n: 32, name: "Ākāśa", deva: "आकाश", gloss: "Space", group: "impure", note: "Mahābhūta — gross element." },
  { n: 33, name: "Vāyu", deva: "वायु", gloss: "Air", group: "impure", note: "Mahābhūta." },
  { n: 34, name: "Agni", deva: "अग्नि", gloss: "Fire", group: "impure", note: "Mahābhūta." },
  { n: 35, name: "Ap", deva: "अप्", gloss: "Water", group: "impure", note: "Mahābhūta." },
  { n: 36, name: "Pṛthivī", deva: "पृथिवी", gloss: "Earth", group: "impure", note: "Mahābhūta — the densest condensation of awareness." },
];

export type Place = {
  id: string;
  name: string;
  deva?: string;
  region: string;
  kind: "temple" | "mountain" | "pilgrimage" | "philosophical" | "region";
  x: number; // 0-100 map coords
  y: number;
  note: string;
};

export const places: Place[] = [
  { id: "kailasa", name: "Mount Kailāsa", deva: "कैलास", region: "Tibet Autonomous Region", kind: "mountain", x: 52, y: 14, note: "Sacred to Hindu, Buddhist, Jain and Bön traditions; unclimbed by religious consensus." },
  { id: "kashmir", name: "Kashmir", region: "North India", kind: "region", x: 33, y: 12, note: "Home of the non-dual Śaiva exegetical traditions later grouped as 'Kashmir Śaivism'." },
  { id: "amarnath", name: "Amarnath", region: "Kashmir", kind: "pilgrimage", x: 36, y: 15, note: "Cave pilgrimage centred on a seasonal ice formation venerated as a liṅga." },
  { id: "kedarnath", name: "Kedārnāth", region: "Uttarakhand", kind: "temple", x: 46, y: 22, note: "High Himalayan Jyotirliṅga shrine, accessible only part of the year." },
  { id: "kashi", name: "Kāśī / Vārāṇasī", deva: "काशी", region: "Uttar Pradesh", kind: "pilgrimage", x: 55, y: 36, note: "City of Śiva; associated with death, liberation and Kāla Bhairava." },
  { id: "ujjain", name: "Ujjain", region: "Madhya Pradesh", kind: "temple", x: 38, y: 40, note: "Mahākāleśvara Jyotirliṅga; a historic centre of astronomy and Śaiva ritual." },
  { id: "somnath", name: "Somnāth", region: "Gujarat", kind: "temple", x: 22, y: 44, note: "Coastal Jyotirliṅga with a long and contested history of destruction and rebuilding." },
  { id: "bhubaneswar", name: "Bhubaneswar", region: "Odisha", kind: "temple", x: 66, y: 46, note: "Dense concentration of early Śaiva temple architecture, notably Liṅgarāja." },
  { id: "srisailam", name: "Srisailam", region: "Andhra Pradesh", kind: "temple", x: 47, y: 62, note: "Mallikārjuna Jyotirliṅga and an important Tantric and Vīraśaiva site." },
  { id: "kanchipuram", name: "Kāñcīpuram", region: "Tamil Nadu", kind: "temple", x: 50, y: 74, note: "Ekāmbaranātha — the earth element among the pañcabhūta sthalas." },
  { id: "chidambaram", name: "Chidambaram", region: "Tamil Nadu", kind: "temple", x: 52, y: 77, note: "Naṭarāja temple; the ākāśa (space) element and the Cidambara Rahasya." },
  { id: "arunachala", name: "Arunachala / Tiruvannamalai", region: "Tamil Nadu", kind: "mountain", x: 49, y: 76, note: "The mountain itself venerated as Śiva; the fire element among the pañcabhūta sthalas." },
  { id: "rameswaram", name: "Rāmeśvaram", region: "Tamil Nadu", kind: "pilgrimage", x: 47, y: 88, note: "Island Jyotirliṅga linking Śaiva and Rāmāyaṇa pilgrimage networks." },
  { id: "pashupatinath", name: "Paśupatinātha", region: "Nepal", kind: "temple", x: 61, y: 26, note: "Major living Śaiva centre on the Bagmati river." },
  { id: "elephanta", name: "Elephanta", region: "Maharashtra", kind: "philosophical", x: 26, y: 56, note: "Rock-cut Śaiva cave with the monumental Sadāśiva / Maheśamūrti relief." },
];

export const pancakritya = [
  { id: "srsti", name: "Sṛṣṭi", deva: "सृष्टि", gloss: "Manifestation", body: "Emission — not creation from nothing, but the appearance of the universe within consciousness, as an image appears in a mirror without a second substance being added." },
  { id: "sthiti", name: "Sthiti", deva: "स्थिति", gloss: "Maintenance", body: "The steady holding of what has appeared: the continuity that lets a world be experienced at all." },
  { id: "samhara", name: "Saṃhāra", deva: "संहार", gloss: "Dissolution", body: "Literally a drawing-together — reabsorption rather than annihilation. What dissolves returns to its source." },
  { id: "tirodhana", name: "Tirodhāna", deva: "तिरोधान", gloss: "Concealment", body: "The self-veiling by which consciousness forgets its own nature; the condition of bound experience." },
  { id: "anugraha", name: "Anugraha", deva: "अनुग्रह", gloss: "Grace", body: "The descent of power (śaktipāta) by which the veil is lifted. In these traditions grace is not earned; it is recognised." },
];

export const texts = [
  { title: "Śvetāśvatara Upaniṣad", lang: "Sanskrit", date: "c. 4th–2nd c. BCE (uncertain)", tradition: "Upaniṣadic / proto-Śaiva", genre: "Upaniṣad", idea: "An early text presenting Rudra-Śiva in theistic terms; often cited as a bridge to later Śaiva theology.", debate: "Dating is contested; its theism has been read both as early Śaiva and as broadly Vedāntic." },
  { title: "Śiva Purāṇa", lang: "Sanskrit", date: "compiled over centuries, c. 8th–14th c. CE", tradition: "Purāṇic Śaivism", genre: "Purāṇa", idea: "Encyclopaedic mythology, liṅga worship, Śaiva vows and cosmology.", debate: "A composite text; recensions differ considerably." },
  { title: "Liṅga Purāṇa", lang: "Sanskrit", date: "c. 6th–10th c. CE", tradition: "Purāṇic Śaivism", genre: "Purāṇa", idea: "Liṅgodbhava, cosmology and the theology of the liṅga.", debate: "Layered composition; the core is difficult to isolate." },
  { title: "Śaiva Āgamas", lang: "Sanskrit", date: "c. 5th–12th c. CE", tradition: "Śaiva Siddhānta", genre: "Revealed ritual scripture", idea: "Initiation, temple ritual, iconography, yoga and doctrine in four pādas.", debate: "The traditional count of 28 Āgamas is a later systematisation." },
  { title: "Tirumurai (incl. Tēvāram)", lang: "Tamil", date: "hymns c. 6th–9th c. CE; canonised c. 11th c.", tradition: "Tamil Śaivism", genre: "Devotional hymnody", idea: "Nāyaṉmār poetry mapping Śiva onto the Tamil sacred landscape.", debate: "Hagiographies of the poets are later and largely legendary." },
  { title: "Tirumantiram", lang: "Tamil", date: "uncertain; c. 7th–11th c. CE", tradition: "Tamil Śaiva / yogic", genre: "Verse compendium", idea: "Yoga, Tantra and Siddhānta in Tamil verse.", debate: "Authorship attributed to Tirumūlar; almost certainly multi-layered." },
  { title: "Śiva Sūtras", lang: "Sanskrit", date: "c. 9th c. CE", tradition: "Trika / Kashmir Śaivism", genre: "Aphorisms", idea: "Revealed to Vasugupta; the foundational aphorisms of non-dual Śaiva thought.", debate: "The revelation account is traditional; the text's relation to Spanda literature is debated." },
  { title: "Spandakārikā", lang: "Sanskrit", date: "c. 9th c. CE", tradition: "Spanda", genre: "Verse treatise", idea: "The dynamic pulsation of consciousness as the ground of all experience.", debate: "Attributed variously to Vasugupta or Kallaṭa." },
  { title: "Īśvarapratyabhijñākārikā", lang: "Sanskrit", date: "c. early 10th c. CE", tradition: "Pratyabhijñā", genre: "Philosophical treatise", idea: "Utpaladeva's argument that liberation is recognition of one's identity with Śiva.", debate: "A rigorous philosophical work engaging Buddhist epistemology directly." },
  { title: "Tantrāloka", lang: "Sanskrit", date: "c. 1000 CE", tradition: "Trika", genre: "Ritual-philosophical summa", idea: "Abhinavagupta's vast synthesis of Śaiva Tantric ritual, yoga and metaphysics.", debate: "Its systematising ambition sometimes obscures the diversity of its sources." },
  { title: "Vijñāna Bhairava Tantra", lang: "Sanskrit", date: "c. 8th–9th c. CE", tradition: "Non-dual Śaiva Tantra", genre: "Tantra (dialogue)", idea: "A sequence of contemplative approaches (dhāraṇās) framed as Bhairava's answer to the Goddess.", debate: "Widely read today through modern translations that can flatten it into generic mindfulness." },
  { title: "Pāśupatasūtra", lang: "Sanskrit", date: "c. 2nd–4th c. CE", tradition: "Pāśupata", genre: "Sūtra with commentary", idea: "Ascetic discipline, vows and stages of practice in the earliest organised Śaiva order.", debate: "Known chiefly through Kauṇḍinya's commentary." },
  { title: "Vacana literature", lang: "Kannada", date: "12th c. CE onward", tradition: "Vīraśaiva / Liṅgāyat", genre: "Free-verse devotional prose-poetry", idea: "Direct devotion, ethical labour and critique of ritual formalism and social hierarchy.", debate: "Transmission and later editorial shaping of the corpus are active scholarly questions." },
];

export const paradoxes = [
  { a: "Ascetic", b: "Householder", body: "Śiva is the archetypal renunciant who is also husband and father. Purāṇic narrative does not resolve this tension; it dramatises it, repeatedly." },
  { a: "Destruction", b: "Regeneration", body: "Saṃhāra means drawing-together. Dissolution in Śaiva cosmology is a return to source and a precondition of the next emission." },
  { a: "Stillness", b: "Dance", body: "The dancer's face is motionless. Movement of the entire universe is depicted around an unmoved centre." },
  { a: "Terrifying", b: "Benevolent", body: "The name 'Śiva' — auspicious — was first applied to a feared deity. Both registers survive in living liturgy." },
  { a: "Form", b: "Formless", body: "Sadāśiva has five faces; the liṅga has none. Śaiva ritual moves deliberately between the iconic and the aniconic." },
  { a: "Silence", b: "Sound", body: "Dakṣiṇāmūrti teaches without speech, while mantra traditions treat sound as the very fabric of manifestation." },
  { a: "Mountain", b: "Cremation Ground", body: "The highest peak and the burning ground are both his seat. Purity and pollution are held together rather than ranked." },
  { a: "Detachment", b: "Love", body: "The god of tapas is also the god destroyed by grief at Satī's death. Detachment here is not indifference." },
];
