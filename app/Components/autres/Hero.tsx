"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Pajo from "../../../public/papajo.jpg";
import { useLocale } from "@/lib/i18n/LocaleContext";

const easeOut = [0.23, 1, 0.32, 1] as const;

function Hero() {
  const reduceMotion = useReducedMotion();
  const { t } = useLocale();

  return (
    <section className="relative isolate flex min-h-[100svh] w-full items-end overflow-hidden bg-paper">
      <motion.div
        className="absolute inset-0 -z-20"
        initial={reduceMotion ? false : { scale: 1.04, opacity: 0.92 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: reduceMotion ? 0 : 1.2,
          ease: easeOut,
        }}
      >
        <Image
          src={Pajo}
          alt="Joseph Ikinda"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_12%] sm:object-[center_18%] contrast-[1.04]"
        />
      </motion.div>

      <div
        className="absolute inset-0 -z-10 bg-gradient-to-tr from-brand/18 via-transparent to-transparent"
        aria-hidden
      />

      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-paper from-[12%] via-paper/70 via-[45%] to-transparent to-[75%]"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-paper/75 via-paper/25 to-transparent md:from-paper/70 md:via-transparent"
        aria-hidden
      />

      <div className="grain-overlay -z-10 !opacity-[0.18]" aria-hidden />

      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] px-5 pb-14 pt-28 md:px-10 md:pb-20 lg:grid-cols-2 lg:pb-24">
        <div className="flex flex-col gap-5 md:gap-6">
          <motion.p
            className="font-sans text-xs font-medium uppercase tracking-[0.28em] text-teal md:text-sm"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: easeOut, delay: 0.08 }}
          >
            {t.hero.eyebrow}
          </motion.p>

          <motion.h1
            className="font-display text-[clamp(2.75rem,10vw,6.5rem)] font-bold leading-[0.9] tracking-tight text-ink"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: easeOut, delay: 0.14 }}
          >
            <span className="block">Joseph</span>
            <span className="block">Ikinda</span>
          </motion.h1>

          <motion.p
            className="max-w-md font-sans text-base leading-relaxed text-ink-muted md:text-lg"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: easeOut, delay: 0.22 }}
          >
            {t.hero.tagline}
          </motion.p>

          <motion.div
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32, ease: easeOut, delay: 0.28 }}
          >
            <Link
              href="#realisation"
              className="inline-flex min-h-11 items-center justify-center bg-brand px-7 py-3 font-sans text-sm font-semibold text-ink transition-[transform,background-color] duration-150 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] hover:bg-brand-deep active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              {t.hero.ctaWorks}
            </Link>
            <Link
              href="#contact"
              className="inline-flex min-h-11 items-center justify-center border border-ink/30 bg-paper px-7 py-3 font-sans text-sm font-semibold text-ink transition-[transform,border-color,background-color] duration-150 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] hover:border-ink active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              {t.hero.ctaContact}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
