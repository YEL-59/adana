import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Package, DollarSign } from "lucide-react";

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      description: "+20.1% from last month",
      icon: DollarSign,
    },
    {
      title: "Subscriptions",
      value: "+2350",
      description: "+180.1% from last month",
      icon: Users,
    },
    {
      title: "Sales",
      value: "+12,234",
      description: "+19% from last month",
      icon: TrendingUp,
    },
    {
      title: "Active Now",
      value: "+573",
      description: "+201 since last hour",
      icon: Package,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your business today.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center text-muted-foreground">
              Chart component goes here
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Olivia Martin</p>
                  <p className="text-xs text-muted-foreground">
                    olivia.martin@email.com
                  </p>
                </div>
                <div className="font-medium">+$1,999.00</div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Jackson Lee</p>
                  <p className="text-xs text-muted-foreground">
                    jackson.lee@email.com
                  </p>
                </div>
                <div className="font-medium">+$39.00</div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Isabella Nguyen</p>
                  <p className="text-xs text-muted-foreground">
                    isabella.nguyen@email.com
                  </p>
                </div>
                <div className="font-medium">+$299.00</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

