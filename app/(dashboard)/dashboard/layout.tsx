import Link from "next/link";
import { LayoutDashboard, PlusCircle, List, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import AgentProfileCard from "@/components/shared/dashboard/agent-profile-card";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
      <aside className="hidden w-64 flex-col border-r bg-white dark:bg-slate-900 md:flex">
        <div className="flex h-16 items-center gap-2 border-b px-6">
          <span className="text-xl font-bold tracking-tight">Proppulse</span>
        </div>

        <nav className="flex-1 space-y-1 p-4">
          <Link href="/dashboard">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <LayoutDashboard className="h-4 w-4" /> Overview
            </Button>
          </Link>
          <Link href="/dashboard/add">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <PlusCircle className="h-4 w-4" /> Add Property
            </Button>
          </Link>
        </nav>

        <AgentProfileCard />
      </aside>

      <main className="flex-1 flex flex-col">
        <header className="flex h-16 items-center border-b bg-white px-6 md:hidden dark:bg-slate-900">
          <span className="font-bold">Proppulse Agent</span>
        </header>
        <div className="flex-1 p-6 md:p-8 overflow-auto">{children}</div>
      </main>
    </div>
  );
}
