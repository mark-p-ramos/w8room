'use client';

import { createContext, useContext, useState, ReactNode } from "react";
import { WorkoutTemplate } from "@/app/workouts/[id]/create/create-workout-template";

interface CurrentSetContextType {
    iCurExercise: number;
    iCurSet: number;
    nextSet: () => void;
}

const CurrentSetContext = createContext<CurrentSetContextType | null>(null);

interface CurrentSetProviderProps {
    children: ReactNode;
    exercises: WorkoutTemplate["exercises"];
}

export function CurrentSetProvider({ children, exercises }: CurrentSetProviderProps) {
    const [iCurExercise, setCurExercise] = useState(0);
    const [iCurSet, setCurSet] = useState(0);

    function nextSet() {
        if (iCurSet < exercises[iCurExercise].sets.length - 1) {
            setCurSet(iCurSet + 1);
        } else if (iCurExercise < exercises.length - 1) {
            setCurExercise(iCurExercise + 1);
            setCurSet(0);
        }
    }

    return (
        <CurrentSetContext.Provider value={{ iCurExercise, iCurSet, nextSet }}>
            {children}
        </CurrentSetContext.Provider>
    );
}

export function useCurrentSetContext() {
    const context = useContext(CurrentSetContext);
    if (!context) {
        throw new Error("useCurrentSet must be used within a CurrentSetProvider");
    }
    return context;
}
