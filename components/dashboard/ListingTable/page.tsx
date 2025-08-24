"use client";

import Image from "next/image";
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { NativeSelect } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@/components/ui/drawer";
import {
  MoreVertical,
  Search,
  X,
  FileText,
  BarChart2,
  Play,
  ArrowUpRight,
} from "lucide-react";

import styles from "./index.module.css";

export type ListingItem = {
  id: string;
  name: string;
  platform: "Instagram" | "Youtube";
  views: string;
  likes: string;
  interactions: string;
  status: "Active" | "Completed";
  thumb: string;
};

const ITEMS: ListingItem[] = Array.from({ length: 12 }).map((_, i) => ({
  id: String(i + 1),
  name: "Project Name",
  platform: (i % 3 ? "Youtube" : "Instagram") as ListingItem["platform"],
  views: i % 3 ? "432k" : i % 2 ? "1.45M" : "123k",
  likes: i % 2 ? "12.4k" : "34.5k",
  interactions: i % 3 ? "2.3k" : "1.5k",
  status: i % 4 ? "Completed" : "Active",
  thumb: "/images/builders/builder" + ((i % 3) + 1) + ".png",
}));

export function ListingTable() {
  const [query, setQuery] = React.useState("");
  const [platform, setPlatform] = React.useState("all");
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState<ListingItem | null>(null);

  const rows = ITEMS.filter(
    (r) =>
      (!query || r.name.toLowerCase().includes(query.toLowerCase())) &&
      (platform === "all" || r.platform.toLowerCase() === platform)
  );

  return (
    <Card>
      <CardHeader className={styles.cardHeader}>
        <div className={styles.headerRow}>
          <div className={styles.title}>Content</div>
          <div className={styles.headerActions}>
            <div className={styles.searchWrapper}>
              <Search className={styles.searchIcon} />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className={styles.searchInput}
              />
            </div>
            <NativeSelect
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className={styles.select}
            >
              <option value="all">All Platforms</option>
              <option value="instagram">Instagram</option>
              <option value="youtube">Youtube</option>
            </NativeSelect>
          </div>
        </div>
      </CardHeader>
      <CardContent className={styles.cardContent}>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead className={styles.tableHead}>
              <tr>
                <th>Instructor</th>
                <th>Platform</th>
                <th>Views</th>
                <th>Likes</th>
                <th>Interactions</th>
                <th>Status</th>
                <th />
              </tr>
            </thead>
            <tbody className={styles.tableBody}>
              {rows.map((item) => (
                <tr
                  key={item.id}
                  className={styles.tableRow}
                  onClick={() => {
                    setActive(item);
                    setOpen(true);
                  }}
                >
                  <td>
                    <div className={styles.instructorCell}>
                      <div className={styles.thumbWrapper}>
                        <Image
                          src={item.thumb}
                          alt="thumb"
                          fill
                          className={styles.thumbImage}
                        />
                      </div>
                      <div className={styles.instructorName}>{item.name}</div>
                    </div>
                  </td>
                  <td>
                    <div className={styles.platformCell}>
                      <span className={styles.platformDot} />
                      {item.platform}
                    </div>
                  </td>
                  <td className={styles.numCell}>{item.views}</td>
                  <td className={styles.numCell}>{item.likes}</td>
                  <td className={styles.numCell}>{item.interactions}</td>
                  <td>
                    {item.status === "Active" ? (
                      <Badge className={styles.activeBadge}>
                        <span className={styles.activeDot} /> Active
                      </Badge>
                    ) : (
                      <Badge className={styles.completedBadge}>
                        <span className={styles.completedDot} /> Completed
                      </Badge>
                    )}
                  </td>
                  <td className={styles.menuCell}>
                    <MoreVertical className={styles.menuIcon} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>

      <Drawer direction="right" open={open} onOpenChange={setOpen}>
        {active && <ListingDrawerPanel item={active} />}
      </Drawer>
    </Card>
  );
}

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className={styles.infoRow}>
      <div className={styles.infoLabel}>{label}</div>
      <div className={styles.infoValue}>{value}</div>
    </div>
  );
}

function ListingDrawerPanel({ item }: { item: ListingItem }) {
  return (
    <DrawerContent className={styles.drawer}>
      <div className={styles.drawerHeader}>
        <div>
          <DrawerTitle className={styles.drawerTitle}>{item.name}</DrawerTitle>
          <DrawerDescription>Overview and details</DrawerDescription>
        </div>
        <div className={styles.drawerActions}>
          <a href="#" className={styles.openLink}>
            Open Listing <ArrowUpRight className={styles.openIcon} />
          </a>
          <DrawerClose aria-label="Close" className={styles.closeBtn}>
            <X className={styles.closeIcon} />
          </DrawerClose>
        </div>
      </div>
      <Separator />
      <div className={styles.drawerBody}>
        <Tabs defaultValue="details">
          <TabsList className={styles.tabsList}>
            <TabsTrigger value="details" className={styles.tabTrigger}>
              <FileText className={styles.tabIcon} /> Details
            </TabsTrigger>
            <TabsTrigger value="analytics" className={styles.tabTrigger}>
              <BarChart2 className={styles.tabIcon} /> Analytics
            </TabsTrigger>
          </TabsList>
          <TabsContent value="details" className={styles.tabsContent}>
            {/* Media */}
            <section>
              <div className={styles.sectionHeader}>Media</div>
              <div className={styles.sectionContent}>
                <div className={styles.mediaRow}>
                  <div className={styles.mediaLabel}>Photos</div>
                  <div className={styles.mediaItems}>
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className={styles.photoThumb}>
                        <Image
                          src={`/images/builders/builder${(i % 3) + 1}.png`}
                          alt=""
                          fill
                          className={styles.thumbImage}
                        />
                      </div>
                    ))}
                    <div className={styles.moreThumb}>+2</div>
                  </div>
                </div>
                <div className={styles.mediaRow}>
                  <div className={styles.mediaLabel}>Video Content</div>
                  <div className={styles.mediaItems}>
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className={styles.videoThumb}>
                        <div className={styles.videoOverlay}>
                          <div className={styles.playBtn}>
                            <Play className={styles.playIcon} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Basic Info */}
            <section>
              <div className={styles.sectionHeader}>Basic Info</div>
              <div className={styles.sectionInfo}>
                <InfoRow label="Price" value={<span>3.75 Cr</span>} />
                <InfoRow label="Location" value={<span>Begur, South Bangalore</span>} />
                <InfoRow label="Builder" value={<span>Assetz Properties</span>} />
                <InfoRow label="Possession" value={<span>January 2025</span>} />
              </div>
            </section>

            {/* Description */}
            <section>
              <div className={styles.sectionHeader}>Description</div>
              <p className={styles.description}>
                Claim your own piece of majestic living beneath the clouds...
              </p>
            </section>

            {/* Extra Info */}
            <section>
              <div className={styles.sectionHeader}>Basic Info</div>
              <div className={styles.sectionInfo}>
                <InfoRow label="Buildup Area" value={<span>8795 Sqft</span>} />
                <InfoRow label="Society" value={<span>17 Acres</span>} />
                <InfoRow label="Bedroom" value={<span>3</span>} />
                <InfoRow label="Bathroom" value={<span>2</span>} />
              </div>
            </section>
          </TabsContent>
          <TabsContent value="analytics" className={styles.analyticsContent}>
            Analytics content goes here.
          </TabsContent>
        </Tabs>
      </div>
    </DrawerContent>
  );
}
