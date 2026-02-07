'use client';

import { Card } from "@/components/ui/card";
import { CreateWorkoutExerciseSet } from "@/app/workouts/[id]/create/create-workout-exercise-set";
import { ExerciseTemplate, SetTemplate } from "./workout-template";
import { cn } from "@/lib/utils";
import { useCurrentSetContext } from "./current-set-context";
import { useSwipe } from "@/hooks/use-swipe";

interface CreateWorkoutExerciseProps {
    exercise: ExerciseTemplate;
    exerciseIndex: number,
    onChange: (value: ExerciseTemplate) => void;
}

export function CreateWorkoutExercise({ exercise, exerciseIndex, onChange }: CreateWorkoutExerciseProps) {

    const { iCurSet, iCurExercise, nextSet, nextExercise } = useCurrentSetContext();
    const isEditing = exerciseIndex === iCurExercise;

    function handleSwipeLeft() {
        if (!isEditing) return;

        console.log('next exercise');
        const newExercise = { ...exercise };
        for (let i = iCurSet; i < exercise.sets.length; i++) {
            newExercise.sets[i].reps = 0;
        }
        
        onChange(newExercise);
        nextExercise();
    }

    const { handleTouchStart, handleTouchEnd } = useSwipe({ onSwipeRight: handleSwipeLeft });

    

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
            <h3 
                className={cn("font-semibold text-lg mb-3", isEditing && "text-primary")}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {exercise.name}
            </h3>
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
