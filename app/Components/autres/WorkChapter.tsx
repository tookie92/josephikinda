"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { LottieRefCurrentProps } from "lottie-react";
import { useLocale } from "@/lib/i18n/LocaleContext";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const easeOut = [0.23, 1, 0.32, 1] as const;

export type WorkItem = {
  image?: string;
  animationData?: object;
  link: string;
  label?: string;
  role?: string;
};

type ChapterProps = {
  id: string;
  index: string;
  title: string;
  description: string;
  items: WorkItem[];
  variant: "ui" | "frontend" | "lottie" | "threeD";
};

function ChapterIntro({
  index,
  title,
  description,
  className = "",
}: {
  index: string;
  title: string;
  description: string;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`flex flex-col gap-3 ${className}`}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.35, ease: easeOut }}
    >
      <p className="font-sans text-xs font-medium uppercase tracking-[0.28em] text-teal">
        {index}
      </p>
      <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-bold leading-tight tracking-tight text-ink">
        {title}
      </h2>
      <p className="max-w-lg font-sans text-base leading-relaxed text-ink-muted">
        {description}
      </p>
    </motion.div>
  );
}

function ProjectMeta({
  label,
  role,
  cta,
  tone = "ink",
}: {
  label?: string;
  role?: string;
  cta?: string;
  tone?: "ink" | "paper";
}) {
  const titleClass = tone === "paper" ? "text-paper" : "text-ink";
  const roleClass = tone === "paper" ? "text-paper/75" : "text-ink-muted";
  const ctaClass =
    tone === "paper"
      ? "text-brand group-hover:text-paper"
      : "text-teal group-hover:text-ink";

  return (
    <div className="mt-3 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
      <div>
        {label && (
          <p className={`font-display text-lg font-bold tracking-tight ${titleClass}`}>
            {label}
          </p>
        )}
        {role && (
          <p className={`font-sans text-sm ${roleClass}`}>{role}</p>
        )}
      </div>
      {cta && (
        <span
          className={`font-sans text-sm font-semibold underline-offset-4 transition-colors duration-150 group-hover:underline ${ctaClass}`}
        >
          {cta} →
        </span>
      )}
    </div>
  );
}

function ProjectLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const isExternal = href.startsWith("http");
  return (
    <Link
      href={href}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={`group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${className}`}
    >
      {children}
    </Link>
  );
}

function LottieTile({
  item,
  play,
  featured = false,
}: {
  item: WorkItem;
  play: boolean;
  featured?: boolean;
}) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!lottieRef.current) return;
    if (play) lottieRef.current.play();
    else lottieRef.current.pause();
  }, [play]);

  if (!item.animationData || !mounted) {
    return (
      <div
        className={`w-full animate-pulse bg-ink/5 ${featured ? "aspect-[4/3]" : "aspect-square"}`}
      />
    );
  }

  return (
    <div
      className={`w-full bg-white ${featured ? "aspect-[4/3] p-6 md:p-10" : "aspect-square p-3"}`}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={item.animationData}
        autoplay={false}
        loop
        className="h-full w-full"
      />
    </div>
  );
}

/** 01 — Full-bleed case study */
function UiChapter({
  id,
  index,
  title,
  description,
  items,
}: ChapterProps) {
  const reduceMotion = useReducedMotion();
  const { t } = useLocale();
  const featured = items[0];
  if (!featured?.image) return null;

  return (
    <section id={id} className="scroll-mt-24 border-t border-ink/10 bg-paper">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <ChapterIntro index={index} title={title} description={description} />

        <motion.div
          className="mt-10 md:mt-14"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{ duration: 0.4, ease: easeOut }}
        >
          <ProjectLink href={featured.link}>
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink/5 md:aspect-[21/9]">
              <Image
                src={featured.image}
                alt={featured.label ?? title}
                fill
                sizes="100vw"
                className="object-cover object-top transition-transform duration-200 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.02]"
              />
            </div>
            <ProjectMeta
              label={featured.label}
              role={featured.role}
              cta={t.works.visitSite}
            />
          </ProjectLink>
        </motion.div>
      </div>
    </section>
  );
}

/** 02 — Horizontal strip / band of sites */
function FrontendChapter({
  id,
  index,
  title,
  description,
  items,
}: ChapterProps) {
  const reduceMotion = useReducedMotion();
  const { t } = useLocale();

  return (
    <section id={id} className="scroll-mt-24 border-t border-ink/10 bg-paper">
      <div className="mx-auto max-w-[1400px] px-5 pt-16 md:px-10 md:pt-24">
        <ChapterIntro index={index} title={title} description={description} />
      </div>

      <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-16 md:mt-14 md:gap-6 md:px-10 md:pb-24 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((item, i) => (
          <motion.div
            key={item.image ?? i}
            className="w-[min(78vw,380px)] shrink-0 snap-start md:w-[min(42vw,440px)]"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{
              duration: 0.35,
              ease: easeOut,
              delay: reduceMotion ? 0 : i * 0.05,
            }}
          >
            <ProjectLink href={item.link}>
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink/5">
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.label ?? `Project ${i + 1}`}
                    fill
                    sizes="440px"
                    className="object-cover transition-transform duration-200 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.02]"
                  />
                )}
              </div>
              <ProjectMeta
                label={item.label}
                role={item.role}
                cta={t.works.visitSite}
              />
            </ProjectLink>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/** 03 — Asymmetric Lottie craft */
function LottieChapter({
  id,
  index,
  title,
  description,
  items,
}: ChapterProps) {
  const reduceMotion = useReducedMotion();
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hero, ...rest] = items;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) setInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-ink/10 bg-ink/[0.03]"
    >
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <ChapterIntro index={index} title={title} description={description} />

        <div ref={sectionRef} className="mt-10 grid gap-4 md:mt-14 md:grid-cols-12 md:gap-5">
          {hero && (
            <motion.div
              className="md:col-span-7"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: easeOut }}
            >
              <LottieTile
                item={hero}
                play={inView && !reduceMotion}
                featured
              />
              {(hero.label || hero.role) && (
                <ProjectMeta
                  label={hero.label}
                  role={hero.role}
                />
              )}
            </motion.div>
          )}

          <div className="grid grid-cols-2 gap-3 md:col-span-5 md:grid-cols-2 md:gap-4">
            {rest.slice(0, 4).map((item, i) => (
              <motion.div
                key={i}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  ease: easeOut,
                  delay: reduceMotion ? 0 : i * 0.04,
                }}
              >
                <LottieTile item={item} play={inView && !reduceMotion} />
                {item.label && (
                  <p className="mt-2 font-sans text-xs font-medium text-ink-muted">
                    {item.label}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          {rest.length > 4 && (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:col-span-12 md:grid-cols-5 md:gap-4">
              {rest.slice(4).map((item, i) => (
                <motion.div
                  key={i + 4}
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    ease: easeOut,
                    delay: reduceMotion ? 0 : i * 0.04,
                  }}
                >
                  <LottieTile item={item} play={inView && !reduceMotion} />
                  {item.label && (
                    <p className="mt-2 font-sans text-xs font-medium text-ink-muted">
                      {item.label}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/** 04 — Cinematic 3D: one hero + film strip */
function ThreeDChapter({
  id,
  index,
  title,
  description,
  items,
}: ChapterProps) {
  const reduceMotion = useReducedMotion();
  const { t } = useLocale();
  const [hero, ...rest] = items;

  return (
    <section id={id} className="scroll-mt-24 border-t border-ink/10 bg-ink">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.35, ease: easeOut }}
        >
          <p className="font-sans text-xs font-medium uppercase tracking-[0.28em] text-brand">
            {index}
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.75rem,4vw,3rem)] font-bold leading-tight tracking-tight text-paper">
            {title}
          </h2>
          <p className="mt-3 max-w-lg font-sans text-base leading-relaxed text-paper/65">
            {description}
          </p>
        </motion.div>

        {hero?.image && (
          <motion.div
            className="mt-10 md:mt-14"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: easeOut }}
          >
            <ProjectLink href={hero.link}>
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-paper/10 md:aspect-[21/9]">
                <Image
                  src={hero.image}
                  alt={hero.label ?? title}
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-200 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.02]"
                />
              </div>
              <ProjectMeta
                label={hero.label}
                role={hero.role}
                cta={t.works.watchAnimation}
                tone="paper"
              />
            </ProjectLink>
          </motion.div>
        )}

        <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:mt-10 md:gap-5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {rest.map((item, i) => (
            <motion.div
              key={item.image ?? i}
              className="w-[min(70vw,280px)] shrink-0 snap-start"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                ease: easeOut,
                delay: reduceMotion ? 0 : i * 0.04,
              }}
            >
              <ProjectLink href={item.link}>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-paper/10">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.label ?? `3D ${i + 1}`}
                      fill
                      sizes="280px"
                      className="object-cover transition-transform duration-200 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.02]"
                    />
                  )}
                </div>
                <div className="mt-2">
                  {item.label && (
                    <p className="font-display text-sm font-bold text-paper">
                      {item.label}
                    </p>
                  )}
                  <span className="font-sans text-xs font-semibold text-brand transition-colors duration-150 group-hover:underline">
                    {t.works.seeMore} →
                  </span>
                </div>
              </ProjectLink>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WorkChapter(props: ChapterProps) {
  switch (props.variant) {
    case "ui":
      return <UiChapter {...props} />;
    case "frontend":
      return <FrontendChapter {...props} />;
    case "lottie":
      return <LottieChapter {...props} />;
    case "threeD":
      return <ThreeDChapter {...props} />;
    default:
      return null;
  }
}
