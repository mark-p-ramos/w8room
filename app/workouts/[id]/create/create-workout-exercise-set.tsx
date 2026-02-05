'use client';

import { EditWorkoutExerciseSet } from "./edit-workout-exercise-set";
import { SetTemplate } from "./create-workout-template";
import { cn } from "@/lib/utils";
import ShowWorkoutExerciseSet from "./show-workout-exercise-set";
import { useSwipe } from "@/hooks/use-swipe";
import { useCurrentSetContext } from "./current-set-context";


interface CreateWorkoutExerciseSetProps {
    exerciseIndex: number;
    set: SetTemplate;
    setIndex: number;
    onChange: (value: SetTemplate) => void;
    onDone: () => void;
}

export function CreateWorkoutExerciseSet({ exerciseIndex, set, setIndex, onChange, onDone }: CreateWorkoutExerciseSetProps) {

    const { handleTouchStart, handleTouchEnd } = useSwipe({ onSwipeRight: onDone });

    const { iCurExercise, iCurSet } = useCurrentSetContext();

    const isEditing = exerciseIndex === iCurExercise && setIndex === iCurSet;
    
    const setComponent = isEditing
        ? <EditWorkoutExerciseSet set={set} onChange={onChange} />
        : <ShowWorkoutExerciseSet set={set} />;

    const handleSwipeRight = isEditing 
        ? { onTouchStart: handleTouchStart, onTouchEnd: handleTouchEnd } 
        : {};

    return (
        <div className="flex items-center justify-between gap-4 text-sm" {...handleSwipeRight}>
            <span className={cn("whitespace-nowrap", isEditing ? "text-primary" : "text-muted-foreground")}>
                {setIndex + 1}: {set.repsPrev} x {set.weightPrev} lb
            </span>
            {setComponent}
        </div>
    );
}
