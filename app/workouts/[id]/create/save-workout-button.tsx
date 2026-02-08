import { Button } from "@/components/ui/button";
import { useCurrentSetContext } from "./current-set-context";
import { HugeiconsIcon } from "@hugeicons/react";
import { Loading03Icon } from "@hugeicons/core-free-icons";
import { useState, useTransition } from "react";
import { WorkoutTemplate } from "./workout-template";
import { createWorkout } from '@/actions/workout';


interface SaveWorkoutButtonProps {
    workout: WorkoutTemplate,
}

export default function SaveWorkoutButton({ workout }: SaveWorkoutButtonProps) {
    
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState("");
    const { iCurExercise } = useCurrentSetContext();
    const isWorkoutDone = iCurExercise >= workout.exercises.length;

    function handleClick() {
        startTransition(async () => {
            setError(await createWorkout(workout));
        });
    }

    return (
        <div className="flex-1 flex flex-col items-center gap-2">
            {error && <span className="text-sm text-destructive">{error}</span>}
            <Button
                className="w-full h-12 text-base font-medium rounded-xl"
                variant="default"
                disabled={!isWorkoutDone || isPending}
                onClick={handleClick}
            >
                {isPending && <HugeiconsIcon icon={Loading03Icon} className="animate-spin" />}
                {error ? "Try Again" : "Save Workout"}
            </Button>
        </div>
    );
}