'use client';

import { EditWorkoutExerciseSet } from "./edit-workout-exercise-set";
import { SetTemplate } from "./workout-template";
import { cn } from "@/lib/utils";
import CompletedWorkoutExerciseSet from "./completed-workout-exercise-set";
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
    const visible = (exerciseIndex < iCurExercise) || exerciseIndex == iCurExercise && setIndex <= iCurSet;
    const isEditing = exerciseIndex === iCurExercise && setIndex === iCurSet;
    const handleSwipeRight = isEditing 
        ? { onTouchStart: handleTouchStart, onTouchEnd: handleTouchEnd } 
        : {};
    
    let setComponent = null; 
    if (visible) {
        setComponent = isEditing
            ? <EditWorkoutExerciseSet set={set} onChange={onChange} />
            : <CompletedWorkoutExerciseSet set={set} />;
    }

    return (
        <div className="flex items-center justify-between gap-4 text-sm" {...handleSwipeRight}>
            <span className={cn("whitespace-nowrap", isEditing ? "text-primary" : "text-muted-foreground")}>
                {setIndex + 1}: {set.repsPrev} x {set.weightPrev} lb
            </span>
            {setComponent}
        </div>
    );
}
