'use client';

import { Stopwatch } from "@/components/stopwatch"
import { CreateWorkoutExercises } from '@/app/workouts/\[id\]/create/create-workout-exercises';
import { use, useState } from 'react';
import { WorkoutDTO } from '@/lib/models/workout';


interface CreateWorkoutPageProps {
    workoutPromise: Promise<WorkoutDTO>,
}

export function CreateWorkoutPage({ workoutPromise }: CreateWorkoutPageProps) {
    const workout = use(workoutPromise);
    // TODO: wipe out the reps on all the sets
    const [newWorkout, setNewWorkout] = useState(structuredClone(workout));

    function handleExercisesChanged(value: WorkoutDTO['exercises']) {
        const data: WorkoutDTO = { ...newWorkout, exercises: value };
        setNewWorkout(data);
    }

    return (
        <>
            <h1 className="text-3xl font-bold text-center">{newWorkout.name}</h1>
            <div className="flex justify-center">
                <Stopwatch className="rounded-xl border bg-muted/50 px-6 py-4" />
            </div>

            <CreateWorkoutExercises 
                exercises={newWorkout.exercises} 
                onChange={handleExercisesChanged}
            />
        </>
    );
}