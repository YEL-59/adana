import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground">
          View detailed analytics and insights about your business.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
            <CardDescription>Where your visitors come from</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Direct</span>
                <span className="font-medium">45%</span>
              </div>
              <div className="flex justify-between">
                <span>Social</span>
                <span className="font-medium">30%</span>
              </div>
              <div className="flex justify-between">
                <span>Search</span>
                <span className="font-medium">25%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Engagement</CardTitle>
            <CardDescription>How users interact with your site</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Bounce Rate</span>
                <span className="font-medium">32.5%</span>
              </div>
              <div className="flex justify-between">
                <span>Avg. Session</span>
                <span className="font-medium">2m 45s</span>
              </div>
              <div className="flex justify-between">
                <span>Pages/Visit</span>
                <span className="font-medium">4.2</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Conversion Rate</CardTitle>
            <CardDescription>Overall conversion performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3.24%</div>
            <p className="text-sm text-muted-foreground mt-2">
              +0.5% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Analytics Chart</CardTitle>
          <CardDescription>Performance over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] flex items-center justify-center text-muted-foreground">
            Analytics chart component goes here
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

