import { SetTemplate } from "@/app/workouts/[id]/create/workout-template";

interface CompletedWorkoutExerciseSetProps {
    set: SetTemplate,
}

export default function CompletedWorkoutExerciseSet({ set }: CompletedWorkoutExerciseSetProps) {
    const betterThanLastWeek = (set.reps > set.repsPrev && set.weight >= set.weightPrev)
        || (set.weight > set.weightPrev);

    return (
        <span>
            {betterThanLastWeek && "💪🏽 "}{set.reps} x {set.weight} lb
        </span>
    );
}