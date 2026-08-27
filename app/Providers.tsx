"use client";

import { LocaleProvider } from "@/lib/i18n/LocaleContext";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return <LocaleProvider>{children}</LocaleProvider>;
}
