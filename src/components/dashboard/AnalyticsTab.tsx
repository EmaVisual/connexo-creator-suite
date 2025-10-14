import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Eye, MousePointerClick, TrendingUp } from "lucide-react";

const mockData = [
  { date: "Jan 1", views: 120, clicks: 45 },
  { date: "Jan 2", views: 150, clicks: 62 },
  { date: "Jan 3", views: 180, clicks: 71 },
  { date: "Jan 4", views: 140, clicks: 55 },
  { date: "Jan 5", views: 200, clicks: 89 },
  { date: "Jan 6", views: 220, clicks: 95 },
  { date: "Jan 7", views: 250, clicks: 112 },
];

const linkStats = [
  { title: "Instagram", clicks: 245, percentage: 42 },
  { title: "Website", clicks: 187, percentage: 32 },
  { title: "YouTube", clicks: 98, percentage: 17 },
  { title: "LinkedIn", clicks: 52, percentage: 9 },
];

const AnalyticsTab = () => {
  const totalViews = mockData.reduce((sum, d) => sum + d.views, 0);
  const totalClicks = mockData.reduce((sum, d) => sum + d.clicks, 0);
  const ctr = ((totalClicks / totalViews) * 100).toFixed(1);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totalViews.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">Profile visits this period</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Clicks</CardTitle>
            <MousePointerClick className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totalClicks.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">Link clicks this period</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Click Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{ctr}%</div>
            <p className="text-xs text-muted-foreground mt-1">Average CTR</p>
          </CardContent>
        </Card>
      </div>

      {/* Chart */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Performance Overview</CardTitle>
              <CardDescription>Views and clicks over time</CardDescription>
            </div>
            <Select defaultValue="7days">
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="30days">Last 30 days</SelectItem>
                <SelectItem value="all">All time</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="date" stroke="hsl(var(--foreground))" />
              <YAxis stroke="hsl(var(--foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Line type="monotone" dataKey="views" stroke="hsl(var(--chart-1))" strokeWidth={2} />
              <Line type="monotone" dataKey="clicks" stroke="hsl(var(--chart-2))" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Link Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Link Performance</CardTitle>
          <CardDescription>Click breakdown by link</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {linkStats.map((link, i) => (
            <div key={i} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{link.title}</span>
                <span className="text-muted-foreground">{link.clicks} clicks</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all"
                  style={{ width: `${link.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsTab;
