import { RecentWorkouts } from "@/app/recent-workouts";
import { RecentWorkoutsSkeleton } from "@/app/recent-workouts-skeleton";
import { getUser } from '@/lib/auth';
import { Suspense } from 'react';
import { Button } from "@/components/ui/button";
import { NavBar } from "@/components/ui/nav-bar";
import { fetchRecentWorkouts } from '@/lib/data';


export default async function Page() {
  const user = await getUser();

  return (
    <>
      <h1 className="text-3xl font-bold text-center">Recent Workouts</h1>

      <Suspense fallback={<RecentWorkoutsSkeleton />}>
        <RecentWorkouts recentWorkoutsPromise={fetchRecentWorkouts(user.id)} />
      </Suspense>

      <NavBar>
        <Button
          className="flex-1 h-12 text-base font-medium rounded-xl"
          variant="default"
        >
          New Workout
        </Button>
      </NavBar>
    </>
  );
}
