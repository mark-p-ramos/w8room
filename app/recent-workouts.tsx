'use client';

import { Card } from "@/components/ui/card";
import { WorkoutDTO } from "@/lib/models/workout";
import { use, useEffect, useState } from 'react';
import WorkoutDate from '@/app/workouts/workout-date';
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { URLParams } from "@/lib/constants";


interface RecentWorkoutsProps {
    recentWorkoutsPromise: Promise<WorkoutDTO[]>,
}

export function RecentWorkouts({ recentWorkoutsPromise }: RecentWorkoutsProps) {
    const recentWorkouts = use(recentWorkoutsPromise);
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const [highlightSavedWorkout, setHighlight] = useState(searchParams.has(URLParams.WORKOUT_SAVED));

    useEffect(() => {
        if (searchParams.has(URLParams.WORKOUT_SAVED)) {
            const params = new URLSearchParams(searchParams.toString());
            params.delete(URLParams.WORKOUT_SAVED);
            const newUrl = params.toString() ? `${pathname}?${params}` : pathname;
            router.replace(newUrl);
        }
        const timer = setTimeout(() => setHighlight(false), 1500);
        return () => clearTimeout(timer);
    }, [searchParams, router, pathname]);

    return (
        <div className="space-y-3 overflow-y-auto">
            {recentWorkouts.map((workout, index) => (
                <Card
                    key={workout._id}
                    className={cn(
                        "relative p-4 cursor-pointer hover:bg-muted/50 transition-all duration-1000",
                        index === 0 && highlightSavedWorkout && "bg-primary/20"
                    )}
                >
                    <Link href={`/workouts/${workout._id}`} className="link-overlay" aria-label={`View details for ${workout.name}`} />
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-lg truncate">{workout.name}</h3>
                        </div>
                        <div className="text-sm text-muted-foreground whitespace-nowrap">
                            {index === 0 && highlightSavedWorkout ? "saved..." : <WorkoutDate date={new Date(workout.createdAt)} />}
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
}
