import { SiteFooter } from "@/components/site/SiteFooter/page";
import type { ReactNode } from "react";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
