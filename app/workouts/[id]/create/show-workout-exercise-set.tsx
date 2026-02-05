import { SetTemplate } from "@/app/workouts/[id]/create/create-workout-template";

interface CompletedWorkoutExerciseSetProps {
    set: SetTemplate,
}

export default function ShowWorkoutExerciseSet({ set }: CompletedWorkoutExerciseSetProps) {
    return (
        <span>
            {set.reps} x {set.weight} lb
        </span>
    );
}