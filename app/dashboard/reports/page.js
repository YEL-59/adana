import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ReportsPage() {
  const reports = [
    { id: 1, name: "Sales Report", description: "Monthly sales performance", date: "2024-01-17", type: "Sales" },
    { id: 2, name: "User Activity", description: "User engagement metrics", date: "2024-01-16", type: "Users" },
    { id: 3, name: "Revenue Analysis", description: "Revenue breakdown by category", date: "2024-01-15", type: "Financial" },
    { id: 4, name: "Product Performance", description: "Top performing products", date: "2024-01-14", type: "Products" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
          <p className="text-muted-foreground">
            Generate and view detailed reports about your business.
          </p>
        </div>
        <Button>Generate Report</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Sales Report</CardTitle>
            <CardDescription>Generate sales performance reports</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">Generate Sales Report</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Report</CardTitle>
            <CardDescription>View user activity and engagement</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">Generate User Report</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Financial Report</CardTitle>
            <CardDescription>Revenue and financial analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">Generate Financial Report</Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Reports</CardTitle>
          <CardDescription>Previously generated reports.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reports.map((report) => (
              <div
                key={report.id}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div>
                  <h3 className="font-medium">{report.name}</h3>
                  <p className="text-sm text-muted-foreground">{report.description}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {report.type} • {report.date}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

