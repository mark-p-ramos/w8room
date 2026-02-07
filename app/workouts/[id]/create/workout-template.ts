import { WorkoutDTO } from "@/lib/models/workout";


type OriginalSet = NonNullable<WorkoutDTO['exercises']>[number]['sets'][number];
export type SetTemplate = OriginalSet & {
    repsPrev: number;
    weightPrev: number;
};

type OriginalExercise = NonNullable<WorkoutDTO['exercises']>[number];
export type ExerciseTemplate = Omit<OriginalExercise, 'sets'> & {
    sets: SetTemplate[];
};

export type WorkoutTemplate = Omit<WorkoutDTO, 'exercises'> & {
    exercises: ExerciseTemplate[];
}

export function isWorkoutTemplate(obj: WorkoutDTO): obj is WorkoutTemplate {
    return Boolean(obj.exercises);
}

