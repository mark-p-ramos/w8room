'use client';

import { Card } from "@/components/ui/card";
import { WorkoutDTO } from "@/lib/models/workout";
import { use } from 'react';
import WorkoutDate from '@/components/ui/workout-date';
import Link from "next/link";


interface RecentWorkoutsProps {
    recentWorkoutsPromise: Promise<WorkoutDTO[]>,
}

export function RecentWorkouts({ recentWorkoutsPromise }: RecentWorkoutsProps) {
    const recentWorkouts = use(recentWorkoutsPromise);

    return (
        <div className="space-y-3">
            {recentWorkouts.map((workout) => (
                <Card
                    key={workout._id}
                    className="p-4 cursor-pointer hover:bg-muted/50 transition-colors"
                >
                    <Link href={`/workouts/${workout._id}`} className="link-overlay" aria-label={`View details for ${workout.name}`} />
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-lg truncate">{workout.name}</h3>
                        </div>
                        <div className="text-sm text-muted-foreground whitespace-nowrap">
                            <WorkoutDate date={new Date(workout.createdAt)} />
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
}
