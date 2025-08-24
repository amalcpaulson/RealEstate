import { Card, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";
import styles from "./index.module.css";

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

function generateSparklinePath(seedKey: string, width = 110, height = 40, points = 16, padding = 2) {
  const rand = seededRand(makeSeed(seedKey));
  const w = width - padding * 2;
  const h = height - padding * 2;
  const stepX = w / (points - 1);
  let y = h * 0.6;
  const ys: number[] = [];
  for (let i = 0; i < points; i++) {
    const delta = (rand() - 0.5) * (h * 0.25);
    y = Math.max(0, Math.min(h, y + delta));
    ys.push(y);
  }
  const path = ys.map((yy, i) => {
    const x = padding + i * stepX;
    const yAbs = padding + (h - yy);
    return `${i === 0 ? "M" : "L"} ${x.toFixed(1)},${yAbs.toFixed(1)}`;
  }).join(" ");
  return { path, width, height };
}

export interface StatCardProps {
  title: string;
  value: string;
  delta: string;
  icon: LucideIcon;
}

export function StatCard({ title, value, delta, icon: Icon }: StatCardProps) {
  const graph = generateSparklinePath(title);
  return (
    <Card className={styles.card}>
      <CardContent className={styles.cardContent}>
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            <Icon className={styles.icon} />
          </div>
          <div className={styles.graph}>
            <svg width={graph.width} height={graph.height} viewBox={`0 0 ${graph.width} ${graph.height}`}>
              <path d={graph.path} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.statsRow}>
          <div className={styles.value}>{value}</div>
          <span className={styles.badge}>{delta}</span>
        </div>
      </CardContent>
    </Card>
  );
}
