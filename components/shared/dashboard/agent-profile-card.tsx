"use client";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { getUserInitials } from "@/lib/utils";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { LogOut } from "lucide-react";

const AgentProfileCard = () => {
  const { data: session } = authClient.useSession();
  return (
    <div className="border-t p-4">
      <div className="flex items-center gap-3 mb-4 px-2">
        <Avatar className="h-12 w-12 border-2 border-white shadow-sm flex items-center justify-center bg-slate-900 text-white">
          <AvatarFallback>{getUserInitials(session?.user.name)}</AvatarFallback>
        </Avatar>
        <div className="text-sm">
          <p className="font-medium">{session?.user.name}</p>
          <p className="text-muted-foreground text-xs">{session?.user.email}</p>
        </div>
      </div>
      <Button
        variant="outline"
        className="w-full gap-2 text-red-500 hover:text-red-600 hover:bg-red-50"
        onClick={async () => {
          await authClient.signOut({
            fetchOptions: {
              onSuccess: () => {
                window.location.href = "/sign-in";
              },
            },
          });
        }}
      >
        <LogOut className="h-4 w-4" /> Sign Out
      </Button>
    </div>
  );
};

export default AgentProfileCard;
