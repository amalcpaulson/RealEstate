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
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className="text-base font-semibold">Content</div>
          <div className="ml-auto flex items-center gap-2">
            <div className="relative">
              <Search className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="w-[220px] rounded-lg border pl-8"
              />
            </div>
            <NativeSelect
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="rounded-lg border bg-background px-3"
            >
              <option value="all">All Platforms</option>
              <option value="instagram">Instagram</option>
              <option value="youtube">Youtube</option>
            </NativeSelect>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/60 text-muted-foreground">
              <tr>
                <th className="px-4 py-3 text-left font-medium">Instructor</th>
                <th className="px-4 py-3 text-left font-medium">Platform</th>
                <th className="px-4 py-3 text-left font-medium">Views</th>
                <th className="px-4 py-3 text-left font-medium">Likes</th>
                <th className="px-4 py-3 text-left font-medium">
                  Interactions
                </th>
                <th className="px-4 py-3 text-left font-medium">Status</th>
                <th className="px-2 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y">
              {rows.map((item) => (
                <tr
                  key={item.id}
                  className="cursor-pointer hover:bg-muted/40"
                  onClick={() => {
                    setActive(item);
                    setOpen(true);
                  }}
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="relative size-9 overflow-hidden rounded-md">
                        <Image
                          src={item.thumb}
                          alt="thumb"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="font-medium">{item.name}</div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex size-5 items-center justify-center rounded-full bg-blue-600 text-white" />
                      {item.platform}
                    </div>
                  </td>
                  <td className="px-4 py-3 tabular-nums">{item.views}</td>
                  <td className="px-4 py-3 tabular-nums">{item.likes}</td>
                  <td className="px-4 py-3 tabular-nums">
                    {item.interactions}
                  </td>
                  <td className="px-4 py-3">
                    {item.status === "Active" ? (
                      <Badge className="inline-flex items-center gap-2 text-emerald-600">
                        <span className="size-2 rounded-full bg-emerald-500" />{" "}
                        Active
                      </Badge>
                    ) : (
                      <Badge className="inline-flex items-center gap-2 text-muted-foreground">
                        <span className="size-2 rounded-full bg-gray-300" />{" "}
                        Completed
                      </Badge>
                    )}
                  </td>
                  <td className="px-2 py-3 text-right text-muted-foreground">
                    <MoreVertical className="ml-auto size-4" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
      {/* Single right-side drawer */}
      <Drawer direction="right" open={open} onOpenChange={setOpen}>
        {active && <ListingDrawerPanel item={active} />}
      </Drawer>
    </Card>
  );
}

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex justify-between items-center gap-2 text-sm leading-[2rem]">
      <div className="text-muted-foreground">{label}</div>
      <div className="font-medium">{value}</div>
    </div>
  );
}

function ListingDrawerPanel({ item }: { item: ListingItem }) {
  return (
    <DrawerContent className="w-[40vw]">
      <div className="flex items-center justify-between p-4">
        <div>
          <DrawerTitle className="text-xl">{item.name}</DrawerTitle>
          <DrawerDescription>Overview and details</DrawerDescription>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="text-sm font-medium text-blue-600 hover:underline flex items-center gap-2"
          >
            Open Listing <ArrowUpRight className="size-4" />
          </a>
          <DrawerClose
            aria-label="Close"
            className="rounded-md p-1 hover:bg-muted"
          >
            <X className="size-5" />
          </DrawerClose>
        </div>
      </div>
      <Separator />
      <div className="py-4">
        <Tabs defaultValue="details">
          <TabsList className="w-full !h-auto p-0 px-3 !rounded-none !bg-transparent !text-foreground inline-flex justify-start gap-5">
            <TabsTrigger
              value="details"
              className="!-mb-px !rounded-none !bg-transparent !shadow-none !text-foreground flex-none border-0 border-b-2 border-transparent data-[state=active]:border-blue-500 hover:!bg-transparent px-0 py-2 gap-1 focus:outline-none focus-visible:!outline-none focus-visible:!ring-0 focus:!shadow-none"
            >
              <FileText className="size-4" /> Details
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="!-mb-px !rounded-none !bg-transparent !shadow-none !text-foreground flex-none border-0 border-b-2 border-transparent data-[state=active]:border-blue-500 hover:!bg-transparent px-0 py-2 gap-1 focus:outline-none focus-visible:!outline-none focus-visible:!ring-0 focus:!shadow-none"
            >
              <BarChart2 className="size-4" /> Analytics
            </TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="mt-1 space-y-6">
            <section>
              <div className="rounded-none bg-accent px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground/60">
                Media
              </div>
              <div className="mt-3 space-y-8 px-3.5">
                {/* Photos row */}
                <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-[180px_1fr]">
                  <div className="text-sm text-muted-foreground">Photos</div>
                  <div className="flex items-center gap-2 justify-end">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div
                        key={i}
                        className="relative h-12 w-16 overflow-hidden rounded-md border"
                      >
                        <Image
                          src={`/images/builders/builder${(i % 3) + 1}.png`}
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                    <div className="flex h-12 w-16 items-center justify-center rounded-md border bg-muted text-sm">
                      +2
                    </div>
                  </div>
                </div>

                {/* Videos row */}
                <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-[180px_1fr]">
                  <div className="text-sm text-muted-foreground">
                    Video Content
                  </div>
                  <div className="flex items-center gap-2 justify-end">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div
                        key={i}
                        className="relative h-12 w-16 overflow-hidden rounded-md border bg-muted"
                      >
                        <div className="absolute inset-0 grid place-items-center">
                          <div className="flex size-7 items-center justify-center rounded-full bg-white/90 text-foreground">
                            <Play className="size-4" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="rounded-none bg-accent px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground/60">
                Basic Info
              </div>
              <div className="mt-2 px-3.5">
                <InfoRow label="Price" value={<span>3.75 Cr</span>} />
                <InfoRow
                  label="Location"
                  value={<span>Begur, South Bangalore</span>}
                />
                <InfoRow
                  label="Builder"
                  value={<span>Assetz Properties</span>}
                />
                <InfoRow label="Possession" value={<span>January 2025</span>} />
              </div>
            </section>

            <section>
              <div className="rounded-none bg-accent px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground/60">
                Description
              </div>
              <p className="mt-2 px-3.5 text-sm leading-6 text-muted-foreground">
                Claim your own piece of majestic living beneath the clouds.
                Welcome aboard Green Clouds, Kerala&#39;s First Biophilic Sky
                Bungalows by Veegaland Homes. It is exceptionally unique and
                available only through exclusive invitation. These homes are
                designed for a discerning community of families who prioritise
                life, luxury and nature.
              </p>
            </section>

            <section>
              <div className="rounded-none bg-accent px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground/60">
                Basic Info
              </div>
              <div className="mt-2 px-3.5">
                <InfoRow label="Buildup Area" value={<span>8795 Sqft</span>} />
                <InfoRow label="Society" value={<span>17 Acres</span>} />
                <InfoRow label="Bedroom" value={<span>3</span>} />
                <InfoRow label="Bathroom" value={<span>2</span>} />
              </div>
            </section>
          </TabsContent>
          <TabsContent
            value="analytics"
            className="mt-4 text-sm text-muted-foreground"
          >
            Analytics content goes here.
          </TabsContent>
        </Tabs>
      </div>
    </DrawerContent>
  );
}
