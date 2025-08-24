"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NativeSelect } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import styles from "./index.module.css";

// --- utilities ---
function makeSeed(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = Math.imul(31, h) + str.charCodeAt(i) | 0;
  return Math.abs(h);
}
function seededRand(seed: number) {
  return () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };
}
function genSeries(key: string, points = 48) {
  const rnd = seededRand(makeSeed(key));
  const arr: number[] = [];
  let y = 50 + rnd() * 40;
  for (let i = 0; i < points; i++) {
    y += (rnd() - 0.5) * 20;
    y = Math.max(5, Math.min(95, y));
    arr.push(y);
  }
  return arr;
}
function toPath(data: number[], w: number, h: number, pad = 8) {
  const innerW = w - pad * 2;
  const innerH = h - pad * 2;
  const step = innerW / (data.length - 1);
  return data
    .map((v, i) => {
      const x = pad + i * step;
      const y = pad + innerH - (v / 100) * innerH;
      return `${i === 0 ? "M" : "L"} ${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");
}

export function EngagementCard() {
  const [tab, setTab] = React.useState("instagram");
  const [range, setRange] = React.useState<"1D" | "1W" | "1M">("1D");
  const [hoverX, setHoverX] = React.useState<number | null>(null);

  const points = range === "1D" ? 48 : range === "1W" ? 56 : 60;
  const w = 700;
  const h = 200;

  const seriesA = React.useMemo(() => genSeries(`${tab}-${range}-A`, points), [tab, range, points]);
  const seriesB = React.useMemo(() => genSeries(`${tab}-${range}-B`, points), [tab, range, points]);

  const pathA = React.useMemo(() => toPath(seriesA, w, h), [seriesA]);
  const pathB = React.useMemo(() => toPath(seriesB, w, h), [seriesB]);

  const handleMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = (e.target as SVGElement).closest("svg")!.getBoundingClientRect();
    const x = e.clientX - rect.left;
    setHoverX(Math.max(0, Math.min(w, x)));
  };
  const handleLeave = () => setHoverX(null);

  const pad = 8;
  const step = (w - pad * 2) / (points - 1);
  const idx = hoverX == null ? null : Math.round((hoverX - pad) / step);
  const clampedIdx = idx == null ? null : Math.max(0, Math.min(points - 1, idx));
  const tooltipX = clampedIdx == null ? null : pad + clampedIdx * step;
  const value = clampedIdx == null ? null : Math.round(seriesA[clampedIdx] * 100);

  return (
    <Card className={styles.card}>
      <CardContent className={styles.cardContent}>
        <div className={styles.headerRow}>
          <Tabs value={tab} onValueChange={(v) => setTab(v)} className={styles.tabs}>
            <TabsList className={styles.tabsList}>
              <TabsTrigger value="instagram">Instagram</TabsTrigger>
              <TabsTrigger value="youtube">Youtube</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className={styles.filters}>
            <NativeSelect className={styles.select}>
              <option>Total Views</option>
              <option>Total Likes</option>
              <option>Total Leads</option>
            </NativeSelect>
            <NativeSelect className={styles.select}>
              <option>All Platforms</option>
              <option>Instagram</option>
              <option>Youtube</option>
            </NativeSelect>
          </div>
        </div>

        <div className={styles.statRow}>
          <div className={styles.statValue}>58.8M</div>
          <Badge className={styles.badge}>↑ 0.48%</Badge>
          <div className={styles.rangeSelector}>
            {(["1D", "1W", "1M"] as const).map((r) => (
              <Button
                key={r}
                variant="ghost"
                size="sm"
                className={cn(styles.rangeButton, r === range ? styles.rangeActive : styles.rangeInactive)}
                onClick={() => setRange(r)}
              >
                {r}
              </Button>
            ))}
          </div>
        </div>

        <div className={styles.chartWrapper}>
          <div className={styles.chartScroll}>
            <svg
              width={w}
              height={h}
              viewBox={`0 0 ${w} ${h}`}
              onMouseMove={handleMove}
              onMouseLeave={handleLeave}
              className={styles.chartBg}
            >
              {tooltipX != null && (
                <line x1={tooltipX} y1={0} x2={tooltipX} y2={h} stroke="#e2e8f0" strokeDasharray="3,3" />
              )}
              <path d={pathA} fill="none" stroke="#2563eb" strokeWidth={2} strokeLinecap="round" />
              <path d={pathB} fill="none" stroke="#ef4444" strokeWidth={2} strokeLinecap="round" />
              {clampedIdx != null && (
                <circle
                  cx={tooltipX!}
                  cy={pad + (h - pad * 2) - (seriesA[clampedIdx] / 100) * (h - pad * 2)}
                  r={4}
                  fill="#2563eb"
                />
              )}
            </svg>
            <div className={styles.xAxis} style={{ width: w }}>
              {["20k", "15k", "10k", "0", "20k", "15k", "10k", "0", "20k", "15k"].map((label, i) => (
                <div key={i} className={styles.xLabel}>{label}</div>
              ))}
            </div>
          </div>
          {clampedIdx != null && (
            <div className={styles.tooltip} style={{ left: tooltipX!, top: 8 }}>
              {value}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
