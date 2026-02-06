import { Suspense } from 'react';
import { WorkoutPage } from "@/app/workouts/[id]/workout-page";
import { WorkoutPageSkeleton } from "@/app/workouts/[id]/workout-page-skeleton";
import { fetchWorkout } from '@/lib/data';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
    const { id } = await params;

    return (
        <Suspense fallback={<WorkoutPageSkeleton />}>
            <WorkoutPage workoutPromise={fetchWorkout(id)} />
        </Suspense>
    );
}
