'use client';

import { Card } from "@/components/ui/card";
import { WorkoutDTO } from "@/lib/models/workout";
import { useRouter } from "next/navigation";
import { use } from 'react';
import WorkoutDate from '@/components/ui/workout-date';


// Mock data - replace with real data later
const recentWorkoutsMock = [
  { 
    _id: "1", 
    name: "Upper Body Push", 
    createdAt: new Date("2026-01-29Z11:30:00")
  },
  { 
    _id: "2", 
    name: "Leg Day", 
    createdAt: new Date("2026-01-27Z11:30:00")
  },
  { 
    _id: "3", 
    name: "Pull Day", 
    createdAt: new Date("2026-01-25Z11:30:00")
  },
];


interface RecentWorkoutsProps {
  recentWorkoutsPromise: Promise<WorkoutDTO[]>,
}

export function RecentWorkouts({ recentWorkoutsPromise }: RecentWorkoutsProps) {
  const router = useRouter();
  const recentWorkouts = use(recentWorkoutsPromise);
  // const recentWorkouts = recentWorkoutsMock;

  const handleCardClick = (id: string) => {
    router.push(`/workouts/${id}`);
  };

  return (
    <div className="space-y-3">
      {recentWorkouts.map((workout) => (
        <Card
          key={workout._id}
          className="p-4 cursor-pointer hover:bg-muted/50 transition-colors"
          onClick={() => handleCardClick(workout._id)}
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-lg truncate">{workout.name}</h3>
            </div>
            <div className="text-sm text-muted-foreground whitespace-nowrap">
              <WorkoutDate date={new Date(workout.createdAt)} />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
