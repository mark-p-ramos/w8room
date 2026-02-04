import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function RecentWorkoutsSkeleton() {
  return (
    <div className="space-y-3">
      {[1, 2, 3, 4, 5].map((i) => (
        <Card key={i} className="p-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 min-w-0">
              <Skeleton className="h-7 w-40" />
            </div>
            <Skeleton className="h-5 w-16" />
          </div>
        </Card>
      ))}
    </div>
  );
}
