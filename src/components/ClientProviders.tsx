"use client";

import { ReactNode } from "react";
import { ContactModalProvider } from "./ContactModal";

export default function ClientProviders({ children }: { children: ReactNode }) {
  return <ContactModalProvider>{children}</ContactModalProvider>;
}
