"use client";

import { motion, useReducedMotion } from "framer-motion";

const stack = [
  "Next.js",
  "React",
  "Framer Motion",
  "Lottie",
  "Rive",
  "Blender",
  "Three.js",
  "Figma",
  "Tailwind",
];

function Trust() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="trust"
      className="scroll-mt-24 border-t border-fg-light/10 bg-brand"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 px-5 py-16 md:flex-row md:items-end md:justify-between md:px-10 md:py-20">
        <motion.div
          className="max-w-xl"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <p className="font-sans text-xs font-medium uppercase tracking-[0.28em] text-cinema/70">
            Process &amp; stack
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight text-cinema">
            Brief → prototype → motion → livraison
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-cinema/80">
            Disponible pour missions freelance et postes produit — remote ou
            Allemagne / Europe.
          </p>
        </motion.div>

        <motion.ul
          className="flex max-w-md flex-wrap gap-x-4 gap-y-2"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
        >
          {stack.map((tool) => (
            <li
              key={tool}
              className="font-sans text-sm font-semibold uppercase tracking-wide text-cinema"
            >
              {tool}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

export default Trust;
