"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ChevronRight, Trophy } from "lucide-react";
import styles from "./index.module.css";

const data = [
  { name: "Assetz", value: 3500, secondary: 18, accent: false },
  { name: "Assetz", value: 846, secondary: 14, accent: false },
  { name: "Assetz", value: 200, secondary: 17, accent: true },
  { name: "Assetz", value: 24, secondary: 15, accent: false },
];

export function TopPerformersCard() {
  const [tab, setTab] = React.useState("instagram");

  return (
    <Card className={styles.card}>
      <CardHeader className={styles.header}>
        <div className={styles.headerRow}>
          <div className={styles.iconWrapper}>
            <Trophy className="h-3.5 w-3.5" />
          </div>
          <div className={styles.title}>Top Performers</div>
          <Button variant="outline" size="sm" className={styles.seeAllButton}>
            See All Listing
          </Button>
        </div>
      </CardHeader>
      <CardContent className={styles.content}>
        <Tabs value={tab} onValueChange={(v) => setTab(v)}>
          <TabsList className={styles.tabsList}>
            <TabsTrigger value="instagram">Instagram</TabsTrigger>
            <TabsTrigger value="youtube">Youtube</TabsTrigger>
          </TabsList>
        </Tabs>

        <ul className={styles.list}>
          {data.map((item, i) => (
            <li key={i} className={styles.listItem}>
              <div
                className={`${styles.avatar} ${
                  item.accent ? styles.avatarAccent : ""
                }`}
              />
              <div className={styles.name}>{item.name}</div>
              <div className={styles.valueWrapper}>
                <div className={styles.valueText}>
                  <div className={styles.valueMain}>
                    {item.value.toLocaleString()}
                  </div>
                  <div className={styles.valueSecondary}>
                    {item.secondary}
                  </div>
                </div>
                <ChevronRight className={styles.chevron} />
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
