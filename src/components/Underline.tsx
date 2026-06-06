import { ReactNode } from "react";

export default function Underline({ children }: { children: ReactNode }) {
  return <span className="underline-highlight">{children}</span>;
}
