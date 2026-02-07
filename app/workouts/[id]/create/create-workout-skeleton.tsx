import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { NavBar } from "@/components/ui/nav-bar";

function ExerciseSetSkeleton() {
    return (
        <div className="flex items-center justify-between gap-4 text-sm">
            <Skeleton className="h-4 w-24" />
            <div className="flex items-center gap-3">
                <Skeleton className="h-8 w-16" />
                <Skeleton className="h-4 w-3" />
                <Skeleton className="h-8 w-20" />
            </div>
        </div>
    );
}

function ExerciseSkeleton() {
    return (
        <Card className="p-4">
            <Skeleton className="h-6 w-32 mb-3" />
            <div className="space-y-3">
                <ExerciseSetSkeleton />
                <ExerciseSetSkeleton />
                <ExerciseSetSkeleton />
            </div>
        </Card>
    );
}

export function CreateWorkoutSkeleton() {
    return (
        <>
            <div className="flex flex-1 flex-col overflow-hidden p-4 pt-8">
                <div className="shrink-0 space-y-4 pb-4">
                    <div className="flex justify-center">
                        <Skeleton className="h-9 w-48" />
                    </div>
                    <div className="flex justify-center">
                        <Skeleton className="h-16 w-40 rounded-xl" />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto pb-20">
                    <div className="space-y-4">
                        <ExerciseSkeleton />
                        <ExerciseSkeleton />
                        <ExerciseSkeleton />
                    </div>
                </div>
            </div>
            <NavBar>
                <Skeleton className="flex-1 h-12 rounded-xl" />
            </NavBar>
        </>
    );
}
