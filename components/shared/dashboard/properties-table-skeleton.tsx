import { Skeleton } from "@/components/ui/skeleton";

function PropertiesTableSkeleton() {
  return (
    <div className="rounded-md border">
      <div className="p-4 border-b space-y-3">
        <Skeleton className="h-8 w-[250px]" />
      </div>
      <div className="p-4 space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Skeleton className="h-12 w-12 rounded-md" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-3 w-[150px]" />
              </div>
            </div>
            <Skeleton className="h-8 w-[100px]" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertiesTableSkeleton;
