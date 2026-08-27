"use client";

import React from "react";
import { TiThMenu as MenuIcon } from "react-icons/ti";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import Link from "next/link";
import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { locales, type Locale } from "@/lib/i18n/dictionaries";

const socialItems = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/cjoli.digital/",
    Icon: FaInstagram,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@rehovision?lang=en",
    Icon: FaTiktok,
  },
];

const localeLabels: Record<Locale, string> = {
  en: "EN",
  de: "DE",
  fr: "FR",
};

function LanguageSwitch() {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      className="flex items-center gap-0.5"
      role="group"
      aria-label={t.nav.language}
    >
      {locales.map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            className={`min-h-9 min-w-9 px-1.5 font-sans text-xs font-semibold tracking-wide transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
              active
                ? "text-teal"
                : "text-ink/45 hover:text-ink"
            }`}
          >
            {localeLabels[code]}
          </button>
        );
      })}
    </div>
  );
}

function Navbar() {
  const { t } = useLocale();
  const navItems = [
    { name: t.nav.works, link: "#realisation" },
    { name: t.nav.stack, link: "#trust" },
    { name: t.nav.contact, link: "#contact" },
  ];

  const { RiveComponent } = useRive({
    src: "./logo.riv",
    stateMachines: "State Machine 1",
    artboard: "Artboard",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
  });

  return (
    <nav className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-2 md:px-10">
        <div className="flex items-center gap-x-8">
          <Link
            href="/"
            className="block h-14 w-14 shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            aria-label={t.nav.home}
          >
            <RiveComponent className="h-full w-full" />
          </Link>

          <div className="hidden items-center gap-x-10 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                className="font-sans text-sm font-medium text-ink/90 transition-colors duration-150 hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-x-2 sm:gap-x-3">
          <LanguageSwitch />

          <div className="hidden items-center gap-x-2 sm:flex">
            {socialItems.map(({ name, href, Icon }) => (
              <Link
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="inline-flex h-11 w-11 items-center justify-center text-ink/70 transition-colors duration-150 hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>

          <div className="lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger
                className="inline-flex h-11 w-11 items-center justify-center text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                aria-label={t.nav.openMenu}
              >
                <MenuIcon className="h-5 w-5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="border-ink/15 bg-paper">
                {navItems.map((item, index) => (
                  <React.Fragment key={item.link}>
                    <DropdownMenuItem asChild>
                      <Link
                        href={item.link}
                        className="cursor-pointer font-medium text-ink"
                      >
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                    {index < navItems.length - 1 && (
                      <DropdownMenuSeparator className="bg-ink/10" />
                    )}
                  </React.Fragment>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
