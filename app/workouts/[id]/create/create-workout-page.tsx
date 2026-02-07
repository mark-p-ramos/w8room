'use client';

import { Stopwatch } from "@/app/workouts/[id]/create/stopwatch"
import { CreateWorkoutExercises } from '@/app/workouts/\[id\]/create/create-workout-exercises';
import { use, useState } from 'react';
import { WorkoutDTO } from '@/lib/models/workout';
import { WorkoutTemplate, isWorkoutTemplate } from "@/app/workouts/[id]/create/workout-template";
import { NavBar } from "@/components/ui/nav-bar";
import { CurrentSetProvider } from "./current-set-context";
import SaveWorkoutButton from "./save-workout-button";


interface CreateWorkoutPageProps {
    workoutPromise: Promise<WorkoutDTO>,
}

function createWorkoutTemplate(workout: WorkoutDTO): WorkoutTemplate {
    if (!isWorkoutTemplate(workout)) {
        throw new Error("Existing workout must contain exercises.");
    }
    
    const template = structuredClone(workout);
    for (const ex of template.exercises) {
        for (const s of ex.sets) {
            s.repsPrev = s.reps;
            s.weightPrev = s.weight;
        }
    }
    
    return template;
}

export function CreateWorkoutPage({ workoutPromise }: CreateWorkoutPageProps) {
    const workout = use(workoutPromise);
    const [newWorkout, setNewWorkout] = useState(createWorkoutTemplate(workout));

    function handleExercisesChanged(value: WorkoutTemplate['exercises']) {
        setNewWorkout({ ...newWorkout, exercises: value });
    }

    return (
        <CurrentSetProvider exercises={newWorkout.exercises}>
            <div className="flex flex-1 flex-col overflow-hidden p-4 pt-8">
                <div className="shrink-0 space-y-4 pb-4">
                    <h1 className="text-3xl font-bold text-center">{newWorkout.name}</h1>
                    <div className="flex justify-center">
                        <Stopwatch className="rounded-xl border bg-muted/50 px-6 py-4" />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto pb-20">
                    <CreateWorkoutExercises
                        exercises={newWorkout.exercises}
                        onChange={handleExercisesChanged}
                    />
                </div>
            </div>
            <NavBar>
                <SaveWorkoutButton workout={newWorkout} />
            </NavBar>
        </CurrentSetProvider>
    );
}