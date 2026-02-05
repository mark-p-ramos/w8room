'use client';

import { Card } from "@/components/ui/card";
import { CreateWorkoutExerciseSet } from "@/app/workouts/[id]/create/create-workout-exercise-set";
import { ExerciseTemplate, SetTemplate } from "./create-workout-template";
import { cn } from "@/lib/utils";
import { useCurrentSetContext } from "./current-set-context";

interface CreateWorkoutExerciseProps {
    exercise: ExerciseTemplate;
    exerciseIndex: number,
    onChange: (value: ExerciseTemplate) => void;
}

export function CreateWorkoutExercise({ exercise, exerciseIndex, onChange }: CreateWorkoutExerciseProps) {

    const { iCurExercise, nextSet } = useCurrentSetContext();

    const isEditing = exerciseIndex === iCurExercise;

    function handleSetChange(setIndex: number, updatedSet: SetTemplate) {
        onChange({
            ...exercise,
            sets: exercise.sets.map((set, i) =>
                i === setIndex ? updatedSet : set
            )
        });
    }

    return (
        <Card className="p-4">
            <h3 className={cn("font-semibold text-lg mb-3", isEditing && "text-primary")}>{exercise.name}</h3>
            <div className="space-y-3">
                {exercise.sets.map((set, setIndex) => (
                    <CreateWorkoutExerciseSet
                        key={setIndex}
                        exerciseIndex={exerciseIndex}
                        set={set}
                        setIndex={setIndex}
                        onChange={(updated) => handleSetChange(setIndex, updated)}
                        onDone={nextSet}
                    />
                ))}
            </div>
        </Card>
    );
}
