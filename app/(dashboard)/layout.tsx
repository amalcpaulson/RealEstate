"use client";

import type { ReactNode } from "react";
import { Plus } from "lucide-react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { AppSidebar } from "@/components/appSideBar/page";
import styles from "./index.module.css";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.welcomeText}>Welcome back to Realtor 👋</div>
            <div className={styles.buttonContainer}>
              <Button className={styles.createButton}>
                <Plus className={styles.plusIcon} />
                Create Request
              </Button>
            </div>
          </div>
        </header>
        <main className={styles.main}>{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}