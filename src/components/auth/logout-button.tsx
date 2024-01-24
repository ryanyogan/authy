"use client";

import { signOut } from "next-auth/react";

export function LogoutButton({ children }: { children: React.ReactNode }) {
  function onClick() {
    signOut();
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
}
