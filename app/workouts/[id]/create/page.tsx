import { Suspense } from 'react';
import { CreateWorkoutPage } from '@/app/workouts/[id]/create/create-workout-page';
import { CreateWorkoutSkeleton } from '@/app/workouts/[id]/create/create-workout-skeleton';
import { fetchWorkout } from '@/lib/data';

interface CreateWorkoutPageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: CreateWorkoutPageProps) {
    const { id } = await params;

    return (
        <Suspense fallback={<CreateWorkoutSkeleton />}>
            <CreateWorkoutPage workoutPromise={fetchWorkout(id)} />
        </Suspense>
    );
}
