import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { LucideIcon } from "lucide-react";

function makeSeed(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = Math.imul(31, h) + str.charCodeAt(i) | 0;
  return Math.abs(h);
}

function seededRand(seed: number) {
  // simple LCG
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
  let y = h * 0.6; // start mid-high
  const ys: number[] = [];
  for (let i = 0; i < points; i++) {
    // random walk with gentle variance
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
  delta: string; // e.g. "+2.3%"
  icon: LucideIcon;
}

export function StatCard({ title, value, delta, icon: Icon }: StatCardProps) {
  const graph = generateSparklinePath(title);
  return (
    <Card className="rounded-xl">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="flex items-center justify-center size-8 rounded-full border bg-background text-muted-foreground">
            <Icon className="h-4 w-4" />
          </div>
          <div className="ml-auto">
            <svg width={graph.width} height={graph.height} viewBox={`0 0 ${graph.width} ${graph.height}`} className="text-blue-500">
              <path d={graph.path} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="mt-4 text-xs text-muted-foreground">{title}</div>
        <div className="mt-1 flex items-center gap-2">
          <div className="text-3xl font-semibold tracking-tight">{value}</div>
          <Badge className="rounded-full bg-emerald-100 text-emerald-700 px-2 py-0.5">{delta}</Badge>
        </div>
      </CardContent>
    </Card>
  );
}
