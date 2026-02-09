// app/[locale]/page.tsx
import { DashboardStats } from "@/components/dashboard/stats";
import { QuickActions } from "@/components/dashboard/quick-actions";
import RecentActivity from "@/components/dashboard/RecentActivity";
import StatusWidgets from "@/components/dashboard/StatusWidgets";
import { AlertDescription } from "@/components/ui/alert";
export default function HomePage() {
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="rounded-xl bg-linear-to-r from-primary/10 to-secondary/10 p-6">
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome back, Abdullah
        </h1>
        <p className="text-muted-foreground mt-2">
          Here&apos;s what&apos;s happening with your mosque community today
        </p>
      </div>

      {/* Stats Grid */}
      <DashboardStats />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <QuickActions />
          <RecentActivity />
        </div>
        <div className="space-y-6">
          <StatusWidgets />
          <AlertDescription />
        </div>
      </div>
    </div>
  );
}
