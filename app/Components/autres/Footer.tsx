import Link from "next/link";
import { FaInstagram, FaPhoneAlt, FaTiktok } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const contacts = [
  {
    href: "mailto:josephikinda@gmail.com",
    label: "Email",
    Icon: MdAlternateEmail,
  },
  {
    href: "tel:+4915228522646",
    label: "Téléphone",
    Icon: FaPhoneAlt,
  },
  {
    href: "https://www.tiktok.com/@rehovision?lang=en",
    label: "TikTok",
    Icon: FaTiktok,
    external: true,
  },
  {
    href: "https://www.instagram.com/cjoli.digital/",
    label: "Instagram",
    Icon: FaInstagram,
    external: true,
  },
];

function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-24 border-t border-ink/10 bg-paper"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 px-5 py-20 md:px-10 md:py-28">
        <div className="max-w-3xl">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.28em] text-teal">
            Contact
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,6vw,4rem)] font-bold leading-[1.05] tracking-tight text-ink">
            Un projet ou un poste&nbsp;? Écrivez-moi.
          </h2>
          <p className="mt-5 max-w-lg font-sans text-base leading-relaxed text-ink-muted">
            Recruteurs et clients : un message suffit pour démarrer une
            conversation.
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            href="mailto:josephikinda@gmail.com"
            className="inline-flex min-h-12 items-center justify-center bg-brand px-8 py-3 font-sans text-sm font-semibold text-ink transition-colors duration-150 hover:bg-brand-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            josephikinda@gmail.com
          </Link>

          <div className="flex flex-wrap gap-2">
            {contacts.map(({ href, label, Icon, external }) => (
              <Link
                key={label}
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                aria-label={label}
                className="inline-flex h-12 w-12 items-center justify-center border border-ink/20 text-ink transition-colors duration-150 hover:border-teal hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>

        <p className="font-sans text-xs text-ink-muted/80">
          © {new Date().getFullYear()} Joseph Ikinda
        </p>
      </div>
    </footer>
  );
}

export default Footer;
