import Link from "next/link";
import { Plus, ArrowUpRight, DollarSign, Home, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import PropertiesTableWrapper from "@/components/shared/dashboard/properties-table-wrapper";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import StatsProperties from "@/components/shared/dashboard/stats-properties";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/");

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">Welcome back!</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/add">
            <Plus className="mr-2 h-4 w-4" /> Add Property
          </Link>
        </Button>
      </div>

      <StatsProperties />

      <Card>
        <CardHeader>
          <CardTitle>Recent Properties</CardTitle>
          <CardDescription>
            Manage your latest real estate listings.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <PropertiesTableWrapper />
        </CardContent>
      </Card>
    </div>
  );
}
