"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Settings,
  Building2,
  Users,
  LifeBuoy,
  ChevronsUpDown,
  ChevronRight,
  Sun,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuAction,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import styles from "./index.module.css";

const mainItems = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Listing", url: "/dashboard/listing", icon: Building2 },
  { title: "Teams", url: "/dashboard/teams", icon: Users },
];

const settingsItems = [
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
  { title: "Support", url: "/dashboard/support", icon: LifeBuoy },
];

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.logoContainer}>
              <div className={styles.logoIcon}>
                <Sun className={styles.sunIcon} />
              </div>
              <span className={styles.logoText}>Assetz</span>
            </div>
            <button
              className={styles.orgButton}
              aria-label="Change organization"
            >
              <ChevronsUpDown className={styles.chevronIcon} />
            </button>
          </div>
          <Separator />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => {
                const isActive =
                  item.url === "/dashboard"
                    ? pathname === item.url
                    : pathname === item.url ||
                      pathname.startsWith(item.url + "/");
                const Icon = item.icon;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link href={item.url} className={styles.menuLink}>
                        <div
                          className={cn(
                            styles.iconWrapper,
                            isActive
                              ? styles.iconWrapperActive
                              : styles.iconWrapperInactive
                          )}
                        >
                          <Icon className={styles.menuIcon} />
                        </div>
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                    {isActive && (
                      <SidebarMenuAction className={styles.menuAction}>
                        <ChevronRight className={styles.chevronRight} />
                      </SidebarMenuAction>
                    )}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsItems.map((item) => {
                const isActive =
                  pathname === item.url || pathname.startsWith(item.url + "/");
                const Icon = item.icon;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link href={item.url} className={styles.menuLink}>
                        <div
                          className={cn(
                            styles.iconWrapper,
                            isActive
                              ? styles.iconWrapperActive
                              : styles.iconWrapperInactive
                          )}
                        >
                          <Icon className={styles.menuIcon} />
                        </div>
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                    {isActive && (
                      <SidebarMenuAction className={styles.menuAction}>
                        <ChevronRight className={styles.chevronRight} />
                      </SidebarMenuAction>
                    )}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Separator className={styles.separator} />
        <div className={styles.footerProfile}>
          <Avatar className={styles.avatar}>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Arthur Tylor"
            />
            <AvatarFallback>AT</AvatarFallback>
          </Avatar>
          <div className={styles.profileInfo}>
            <div className={styles.profileName}>Arthur Tylor</div>
            <div className={styles.profileEmail}>arthur@assetz.com</div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
