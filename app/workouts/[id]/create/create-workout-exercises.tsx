'use client';

import { Card } from "@/components/ui/card";
import { WorkoutDTO } from "@/lib/models/workout";


interface WorkoutExercisesProps {
    exercises: WorkoutDTO['exercises'],
    onChange: (value: WorkoutDTO['exercises']) => void,
}

export function CreateWorkoutExercises({ exercises, onChange }: WorkoutExercisesProps) {

    function handleClick(index: number) {
        const data = exercises ? [...exercises] : [];
        data[index].sets[0].reps--;
        onChange(exercises);
    }

    return (
        <div className="space-y-4">
            <div className="space-y-4">
                {exercises!.map((exercise, index) => (
                <Card key={index} className="p-4" onClick={handleClick.bind(null, index)}>
                    <h3 className="font-semibold text-lg mb-3">{exercise.name}</h3>
                    <div className="space-y-2">
                    {exercise.sets.map((set, setIndex) => (
                        <div
                            key={setIndex}
                            className="flex items-center gap-4 text-sm"
                        >
                        <span className="text-muted-foreground w-12">
                            Set {setIndex + 1}
                        </span>
                        <span className="flex-1">
                            {set.reps} × {set.weight} lbs
                        </span>
                        </div>
                    ))}
                    </div>
                </Card>
                ))}
            </div>
        </div>
    );
}
