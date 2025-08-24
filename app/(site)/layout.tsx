"use client";

import { SiteFooter } from "@/components/site/SiteFooter/page";
import type { ReactNode } from "react";
import styles from "./index.module.css";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>
      <SiteFooter />
    </div>
  );
}