import { CreateWorkoutPage } from '@/app/workouts/[id]/create/create-workout-page';
import { fetchWorkout } from '@/lib/data';

interface CreateWorkoutPageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: CreateWorkoutPageProps) {
    const { id } = await params;

    return (
        <CreateWorkoutPage workoutPromise={fetchWorkout(id)} />
    );
}
