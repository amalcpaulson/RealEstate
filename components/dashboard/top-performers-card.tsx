"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ChevronRight, Trophy } from "lucide-react";

const data = [
  { name: "Assetz", value: 3500, secondary: 18, accent: false },
  { name: "Assetz", value: 846, secondary: 14, accent: false },
  { name: "Assetz", value: 200, secondary: 17, accent: true },
  { name: "Assetz", value: 24, secondary: 15, accent: false },
];

export function TopPerformersCard() {
  const [tab, setTab] = React.useState("instagram");

  return (
    <Card className="rounded-xl">
      <CardHeader className="pb-3">
        <div className="flex items-center">
          <div className="mr-2 flex size-6 items-center justify-center rounded-full bg-muted text-muted-foreground">
            <Trophy className="h-3.5 w-3.5" />
          </div>
          <div className="font-semibold">Top Performers</div>
          <Button variant="outline" size="sm" className="ml-auto h-8 text-xs px-3">See All Listing</Button>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <Tabs value={tab} onValueChange={(v) => setTab(v)}>
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="instagram">Instagram</TabsTrigger>
            <TabsTrigger value="youtube">Youtube</TabsTrigger>
          </TabsList>
        </Tabs>

        <ul className="mt-3 divide-y">
          {data.map((item, i) => (
            <li key={i} className="flex items-center gap-3 py-3">
              <div className={`flex size-8 items-center justify-center rounded-full border ${item.accent ? "bg-emerald-100" : "bg-background"}`} />
              <div className="text-sm">{item.name}</div>
              <div className="ml-auto flex items-center gap-3">
                <div className="text-right">
                  <div className="text-sm font-medium tabular-nums">{item.value.toLocaleString()}</div>
                  <div className="text-[10px] text-muted-foreground tabular-nums">{item.secondary}</div>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
