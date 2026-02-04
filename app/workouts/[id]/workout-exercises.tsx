'use client';

import { WorkoutDTO } from "@/lib/models/workout";
import { Card } from "@/components/ui/card";

interface WorkoutExercisesProps {
  workout: WorkoutDTO;
}

export function WorkoutExercises({ workout }: WorkoutExercisesProps) {
  return (
    <div className="space-y-4">
      {workout.exercises && workout.exercises.length > 0 ? (
        <div className="space-y-4">
          {workout.exercises.map((exercise, index) => (
            <Card key={index} className="p-4">
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
      ) : (
        <p className="text-muted-foreground text-center py-8">
          No exercises in this workout yet.
        </p>
      )}
    </div>
  );
}
