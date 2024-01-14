"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export function LoginButton({
  children,
  asChild,
  mode = "redirect",
}: LoginButtonProps) {
  const router = useRouter();

  function onClick(): void {
    router.push("/auth/login");
  }

  if (mode === "modal") {
    return <span>TODO: Modal</span>;
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
}
