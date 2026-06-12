"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";
import { useContactModal } from "./ContactModal";

interface ContactButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "secondary";
  children: ReactNode;
}

export default function ContactButton({
  variant = "primary",
  children,
  className = "",
  ...props
}: ContactButtonProps) {
  const { openModal } = useContactModal();

  return (
    <button
      className={`btn btn-${variant} ${className}`}
      onClick={openModal}
      {...props}
    >
      {children}
    </button>
  );
}
