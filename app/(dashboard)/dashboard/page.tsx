import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { EngagementCard } from "@/components/dashboard/engagement-card";
import { TopPerformersCard } from "@/components/dashboard/top-performers-card";
import { Eye, ThumbsUp, UserPlus } from "lucide-react";
import { StatCard } from "@/components/dashboard/stat-card";
import styles from "./index.module.css";

export default function DashboardPage() {
  return (
    <div className={styles.container}>
      
      <div className={styles.statsGrid}>
        <StatCard title="Total Views" value="34.3M" delta="+2.3%" icon={Eye} />
        <StatCard title="Total Likes" value="343K" delta="+1.2%" icon={ThumbsUp} />
        <StatCard title="Total Leads" value="3.5K" delta="+2.3%" icon={UserPlus} />
      </div>

      <div className={styles.engagementGrid}>
        <div className={styles.engagementMain}>
          <EngagementCard />
        </div>
        <TopPerformersCard />
      </div>

      <div className={styles.mediaGrid}>
        <Card className={styles.mediaCard}>
          <CardHeader className="pb-2">Recent Media</CardHeader>
          <CardContent>
            <div className={styles.recentMediaGrid}>
              <div className={styles.mediaItem} />
              <div className={styles.mediaItem} />
              <div className={styles.mediaItem} />
            </div>
          </CardContent>
        </Card>

        <Card className={styles.leadsCard}>
          <CardHeader className="pb-2">Leads Trend</CardHeader>
          <CardContent>
            <div className={styles.leadsTrend} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
