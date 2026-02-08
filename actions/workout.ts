'use server';

import { WorkoutModel, WorkoutDTO } from "@/lib/models/workout";
import { redirect } from "next/navigation";
import { getUser } from "@/lib/auth";
import { URLParams } from "@/lib/constants";


export async function createWorkout(workout: WorkoutDTO): Promise<string> {
    try {
        const user = await getUser();
        await WorkoutModel.create({
            user: user.id,
            name: workout.name,
            exercises: workout.exercises?.map((ex) => ({ 
                name: ex.name,
                sets: ex.sets.map((set) => ({
                    reps: set.reps,
                    weight: set.weight,
                })),
            })),
        });
    } catch (err: unknown) {
        return err instanceof Error ? err.message : "something went wrong";
    }

    redirect(`/?${URLParams.WORKOUT_SAVED}`);
}