import { createFileRoute } from "@tanstack/react-router";
import { Opening } from "@/components/shiva/opening";
import {
  AtlasPreview,
  Aghora,
  Ardhanarishvara,
  Bhairava,
  Dakshinamurti,
  Ganga,
  Kailasa,
  Linga,
  Lingodbhava,
  Mahadeva,
  Nataraja,
  Pancakritya,
  Pashupati,
  Rudra,
  ShivaShakti,
  ThirdEye,
  WhatIsShiva,
} from "@/components/shiva/journey-a";
import {
  Arunachala,
  Chidambaram,
  Cosmology,
  EarlyShaivism,
  Family,
  FiveElements,
  Kashi,
  KashmirShaivism,
  Lingayat,
  Mantra,
  Paradox,
  PrakasaVimarsa,
  Pratyabhijna,
  Recognition,
  Siddhanta,
  Spanda,
  TamilShaivism,
  Tantra,
  Yoga,
} from "@/components/shiva/journey-b";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ŚIVA — Consciousness, Transformation and Liberation" },
      {
        name: "description",
        content:
          "An immersive journey through Śaivism: forms of Śiva, Kailāsa, Naṭarāja, the liṅga, Tantra, the 36 tattvas, Kashmir Śaivism, Śaiva Siddhānta and sacred geography.",
      },
      { property: "og:title", content: "ŚIVA — Consciousness, Transformation and Liberation" },
      {
        property: "og:description",
        content:
          "Silence, Rudra, Kailāsa, the cosmic dance, the infinite column, recognition — a digital-museum journey through the Śaiva world.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Journey,
});

function Journey() {
  return (
    <main>
      <Opening />
      <WhatIsShiva />
      <AtlasPreview />
      <Rudra />
      <Mahadeva />
      <Kailasa />
      <Ganga />
      <ThirdEye />
      <Nataraja />
      <Pancakritya />
      <Linga />
      <Lingodbhava />
      <Dakshinamurti />
      <ShivaShakti />
      <Ardhanarishvara />
      <Bhairava />
      <Aghora />
      <Pashupati />
      <Cosmology />
      <KashmirShaivism />
      <Pratyabhijna />
      <Spanda />
      <PrakasaVimarsa />
      <Siddhanta />
      <TamilShaivism />
      <Lingayat />
      <EarlyShaivism />
      <Tantra />
      <Mantra />
      <Yoga />
      <Kashi />
      <Arunachala />
      <Chidambaram />
      <FiveElements />
      <Family />
      <Paradox />
      <Recognition />
    </main>
  );
}
