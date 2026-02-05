'use client';

import { CreateWorkoutExercise } from "@/app/workouts/[id]/create/create-workout-exercise";
import { WorkoutTemplate } from "@/app/workouts/[id]/create/create-workout-template";

interface WorkoutExercisesProps {
    exercises: WorkoutTemplate['exercises'],
    onChange: (value: WorkoutTemplate['exercises']) => void,
}

export function CreateWorkoutExercises({ exercises, onChange }: WorkoutExercisesProps) {

    function handleExerciseChange(index: number, exercise: WorkoutTemplate['exercises'][number]) {
        const data = [...exercises];
        data[index] = exercise;
        onChange(data);
    }

    return (
        <div className="space-y-4">
            {exercises.map((exercise, index) => (
                <CreateWorkoutExercise
                    key={index}
                    exercise={exercise}
                    exerciseIndex={index}
                    onChange={(updated) => handleExerciseChange(index, updated)}
                />
            ))}
        </div>
    );
}
