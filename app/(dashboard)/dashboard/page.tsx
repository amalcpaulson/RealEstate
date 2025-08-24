import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { EngagementCard } from "@/components/dashboard/engagement-card";
import { TopPerformersCard } from "@/components/dashboard/top-performers-card";
import { Eye, ThumbsUp, UserPlus } from "lucide-react";
import { StatCard } from "@/components/dashboard/stat-card";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard title="Total Views" value="34.3M" delta="+2.3%" icon={Eye} />
        <StatCard title="Total Likes" value="343K" delta="+1.2%" icon={ThumbsUp} />
        <StatCard title="Total Leads" value="3.5K" delta="+2.3%" icon={UserPlus} />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <EngagementCard />
        </div>
        <TopPerformersCard />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader className="pb-2">Recent Media</CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-2">
              <div className="aspect-video rounded-lg bg-muted" />
              <div className="aspect-video rounded-lg bg-muted" />
              <div className="aspect-video rounded-lg bg-muted" />
            </div>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader className="pb-2">Leads Trend</CardHeader>
          <CardContent>
            <div className="h-40 rounded-md bg-muted" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
