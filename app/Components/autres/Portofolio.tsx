"use client";

import { WorkChapter } from "./WorkChapter";
import Calendrier from "@/public/lottie/calendrier.json.json";
import Colier from "@/public/lottie/colier.json.json";
import Logo from "@/public/lottie/logo.json.json";
import Multi from "@/public/lottie/multi.json.json";
import Photo from "@/public/lottie/photo.json.json";
import Web from "@/public/lottie/web.json.json";
import Sac from "@/public/lottie/sac.json.json";
import Jeune from "@/public/devant.json.json";
import LeLottie from "@/public/lf30_ryktrxec.json.json";
import TroisD from "@/public/lf30_tl2zbhxo.json.json";

const chapters = [
  {
    id: "uxui",
    index: "01 — UX / UI",
    title: "UX/UI Studio",
    description:
      "Interfaces pensées pour être claires, mémorables et faciles à utiliser — du wireframe au pixel final.",
    variant: "ui" as const,
    items: [
      {
        image: "/moyo.png",
        link: "https://moyo-app.vercel.app/",
        label: "Moyo",
        role: "UX/UI — app product design",
      },
    ],
  },
  {
    id: "front",
    index: "02 — Frontend",
    title: "Frontend Forge",
    description:
      "Sites Next.js vivants : motion, performance et détails d’interaction qui donnent du caractère au produit.",
    variant: "frontend" as const,
    items: [
      {
        image: "/framerspring.png",
        link: "https://framerspring.vercel.app/",
        label: "Framer Spring",
        role: "Frontend — motion landing",
      },
      {
        image: "/velotrum.png",
        link: "https://velotrum-vercel.vercel.app/",
        label: "Velotrum",
        role: "Frontend — brand site",
      },
      {
        image: "/orjfall.png",
        link: "https://orjfall.vercel.app/",
        label: "Orjfall",
        role: "Frontend — editorial build",
      },
      {
        image: "/Gutsy.png",
        link: "https://fozzo.netlify.app/",
        label: "Gutsy / Fozzo",
        role: "Frontend — product UI",
      },
    ],
  },
  {
    id: "lottie",
    index: "03 — Motion",
    title: "Lottie Craft",
    description:
      "Micro-animations et séquences Lottie qui donnent du souffle aux interfaces — icônes, logos, moments magiques.",
    variant: "lottie" as const,
    items: [
      {
        animationData: Multi,
        link: "#lottie",
        label: "Multi",
        role: "Séquence hero — Lottie",
      },
      { animationData: Calendrier, link: "#lottie", label: "Calendrier" },
      { animationData: Colier, link: "#lottie", label: "Collier" },
      { animationData: Logo, link: "#lottie", label: "Logo mark" },
      { animationData: Photo, link: "#lottie", label: "Photo" },
      { animationData: Web, link: "#lottie", label: "Web" },
      { animationData: Sac, link: "#lottie", label: "Sac" },
      { animationData: Jeune, link: "#lottie", label: "Portrait" },
      { animationData: LeLottie, link: "#lottie", label: "Icon set" },
      { animationData: TroisD, link: "#lottie", label: "3D feel" },
    ],
  },
  {
    id: "wonders",
    index: "04 — 3D",
    title: "3D WonderWorks",
    description:
      "Concepts en volumes et animations Blender — produits, espaces et atmosphères immersives.",
    variant: "threeD" as const,
    items: [
      {
        image: "/blender/card.jpg",
        link: "https://www.tiktok.com/@rehovision/video/7340738028303928608?is_from_webapp=1&sender_device=pc&web_id=7338162237128885792",
        label: "Card reveal",
        role: "Blender — product motion",
      },
      {
        image: "/blender/gloire.png",
        link: "https://www.tiktok.com/@rehovision/video/7307963574121499936?is_from_webapp=1&sender_device=pc&web_id=7338162237128885792",
        label: "Gloire",
        role: "Blender — scene",
      },
      {
        image: "/blender/house.png",
        link: "https://www.tiktok.com/@rehovision/video/7297739193906728225?is_from_webapp=1&sender_device=pc&web_id=73381622371288857923",
        label: "House",
        role: "Blender — archviz",
      },
      {
        image: "/blender/ikea.png",
        link: "https://www.tiktok.com/@rehovision/video/7298351514207178017?is_from_webapp=1&sender_device=pc&web_id=7338162237128885792",
        label: "IKEA study",
        role: "Blender — product",
      },
      {
        image: "/blender/mensch.jpg",
        link: "https://www.tiktok.com/@rehovision/video/7294006047163911456?is_from_webapp=1&sender_device=pc&web_id=7338162237128885792",
        label: "Mensch",
        role: "Blender — character",
      },
      {
        image: "/blender/ubahn.png",
        link: "https://www.tiktok.com/@rehovision/video/7296612455390645537?is_from_webapp=1&sender_device=pc&web_id=7338162237128885792",
        label: "U-Bahn",
        role: "Blender — environment",
      },
    ],
  },
];

function Portfolio() {
  return (
    <div id="realisation" className="scroll-mt-24">
      <div className="mx-auto max-w-[1400px] px-5 pb-2 pt-20 md:px-10 md:pt-28">
        <h1 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-bold tracking-tight text-ink">
          Works
        </h1>
        <p className="mt-3 max-w-lg font-sans text-ink-muted">
          Quatre chapitres, quatre rythmes — UI, frontend, Lottie, 3D.
        </p>
      </div>
      {chapters.map((chapter) => (
        <WorkChapter key={chapter.id} {...chapter} />
      ))}
    </div>
  );
}

export default Portfolio;
