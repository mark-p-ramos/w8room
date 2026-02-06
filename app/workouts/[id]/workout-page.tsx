'use client';

import { WorkoutExercises } from "@/app/workouts/[id]/workout-exercises";
import { NavBar } from '@/components/ui/nav-bar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { WorkoutDTO } from '@/lib/models/workout';
import { use } from "react";


interface WorkoutPageProps {
    workoutPromise: Promise<WorkoutDTO>,
}

export function WorkoutPage({ workoutPromise }: WorkoutPageProps) {
    const workout = use(workoutPromise);

    return (
        <>
            <h1 className="text-3xl font-bold text-center">{workout.name}</h1>
            <p className="text-xl font-semibold text-muted-foreground">
                {new Date(workout.createdAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                })}
            </p>
            <WorkoutExercises workout={workout} />

            <NavBar>
                <Button
                    asChild
                    className="flex-1 h-12 text-base font-medium rounded-xl"
                    variant="default"
                >
                    <Link href={`/workouts/${workout._id}/create`}>
                        Start Workout
                    </Link>
                </Button>
            </NavBar>
        </>
    );
}
