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
import { useLocale } from "@/lib/i18n/LocaleContext";

function Portfolio() {
  const { t } = useLocale();
  const { chapters: c, roles: r, lottieLabels: l } = t.works;

  const chapters = [
    {
      id: "uxui",
      index: c.uxui.index,
      title: c.uxui.title,
      description: c.uxui.description,
      variant: "ui" as const,
      items: [
        {
          image: "/moyo.png",
          link: "https://moyo-app.vercel.app/",
          label: "Moyo",
          role: r.moyo,
        },
      ],
    },
    {
      id: "front",
      index: c.front.index,
      title: c.front.title,
      description: c.front.description,
      variant: "frontend" as const,
      items: [
        {
          image: "/framerspring.png",
          link: "https://framerspring.vercel.app/",
          label: "Framer Spring",
          role: r.framerspring,
        },
        {
          image: "/velotrum.png",
          link: "https://velotrum-vercel.vercel.app/",
          label: "Velotrum",
          role: r.velotrum,
        },
        {
          image: "/orjfall.png",
          link: "https://orjfall.vercel.app/",
          label: "Orjfall",
          role: r.orjfall,
        },
        {
          image: "/Gutsy.png",
          link: "https://fozzo.netlify.app/",
          label: "Gutsy / Fozzo",
          role: r.gutsy,
        },
      ],
    },
    {
      id: "lottie",
      index: c.lottie.index,
      title: c.lottie.title,
      description: c.lottie.description,
      variant: "lottie" as const,
      items: [
        {
          animationData: Multi,
          link: "#lottie",
          label: "Multi",
          role: r.multi,
        },
        { animationData: Calendrier, link: "#lottie", label: l.calendrier },
        { animationData: Colier, link: "#lottie", label: l.colier },
        { animationData: Logo, link: "#lottie", label: l.logo },
        { animationData: Photo, link: "#lottie", label: l.photo },
        { animationData: Web, link: "#lottie", label: l.web },
        { animationData: Sac, link: "#lottie", label: l.sac },
        { animationData: Jeune, link: "#lottie", label: l.jeune },
        { animationData: LeLottie, link: "#lottie", label: l.leLottie },
        { animationData: TroisD, link: "#lottie", label: l.troisD },
      ],
    },
    {
      id: "wonders",
      index: c.wonders.index,
      title: c.wonders.title,
      description: c.wonders.description,
      variant: "threeD" as const,
      items: [
        {
          image: "/blender/card.jpg",
          link: "https://www.tiktok.com/@rehovision/video/7340738028303928608?is_from_webapp=1&sender_device=pc&web_id=7338162237128885792",
          label: "Card reveal",
          role: r.card,
        },
        {
          image: "/blender/gloire.png",
          link: "https://www.tiktok.com/@rehovision/video/7307963574121499936?is_from_webapp=1&sender_device=pc&web_id=7338162237128885792",
          label: "Gloire",
          role: r.gloire,
        },
        {
          image: "/blender/house.png",
          link: "https://www.tiktok.com/@rehovision/video/7297739193906728225?is_from_webapp=1&sender_device=pc&web_id=73381622371288857923",
          label: "House",
          role: r.house,
        },
        {
          image: "/blender/ikea.png",
          link: "https://www.tiktok.com/@rehovision/video/7298351514207178017?is_from_webapp=1&sender_device=pc&web_id=7338162237128885792",
          label: "IKEA study",
          role: r.ikea,
        },
        {
          image: "/blender/mensch.jpg",
          link: "https://www.tiktok.com/@rehovision/video/7294006047163911456?is_from_webapp=1&sender_device=pc&web_id=7338162237128885792",
          label: "Mensch",
          role: r.mensch,
        },
        {
          image: "/blender/ubahn.png",
          link: "https://www.tiktok.com/@rehovision/video/7296612455390645537?is_from_webapp=1&sender_device=pc&web_id=7338162237128885792",
          label: "U-Bahn",
          role: r.ubahn,
        },
      ],
    },
  ];

  return (
    <div id="realisation" className="scroll-mt-24">
      <div className="mx-auto max-w-[1400px] px-5 pb-2 pt-20 md:px-10 md:pt-28">
        <h1 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-bold tracking-tight text-ink">
          {t.works.title}
        </h1>
        <p className="mt-3 max-w-lg font-sans text-ink-muted">
          {t.works.subtitle}
        </p>
      </div>
      {chapters.map((chapter) => (
        <WorkChapter key={chapter.id} {...chapter} />
      ))}
    </div>
  );
}

export default Portfolio;
