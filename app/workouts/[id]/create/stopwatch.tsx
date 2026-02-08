"use client";

import * as React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { PauseIcon, PlayIcon, ReloadIcon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCurrentSetContext } from "@/app/workouts/[id]/create/current-set-context";

interface StopwatchProps {
    autoStart?: boolean;
    className?: string;
}

function formatTime(ms: number): string {
    const hundredths = Math.floor((ms % 1000) / 100);
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const hh = hundredths.toString();

    if (hours > 0) {
        return `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${hh}`;
    }
    return `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}.${hh}`;
}

function Stopwatch({ autoStart = false, className }: StopwatchProps) {
    const [elapsedTime, setElapsedTime] = React.useState(0);
    const [isRunning, setIsRunning] = React.useState(autoStart);
    const startTimeRef = React.useRef<number>(0);
    const { iCurSet } = useCurrentSetContext();

    React.useEffect(() => {
        if (!isRunning) return;

        const startTime = Date.now() - elapsedTime;
        startTimeRef.current = startTime;

        const interval = setInterval(() => {
            setElapsedTime(Date.now() - startTimeRef.current);
        }, 10);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isRunning]);

    const start = () => setIsRunning(true);
    const pause = () => setIsRunning(false);
    const reset = () => {
        setElapsedTime(0);
        startTimeRef.current = Date.now();
        setIsRunning(true);
    };

    React.useEffect(() => {
        reset();
    }, [iCurSet]);

    return (
        <div className={cn("flex items-center gap-3", className)}>
            <div className="flex gap-1">
                {isRunning ? (
                    <Button variant="ghost" size="icon-sm" onClick={pause}>
                        <HugeiconsIcon icon={PauseIcon} size={16} />
                    </Button>
                ) : (
                    <Button variant="ghost" size="icon-sm" onClick={start}>
                        <HugeiconsIcon icon={PlayIcon} size={16} />
                    </Button>
                )}
            </div>
            <span className="font-mono text-4xl font-semibold tabular-nums">
                {formatTime(elapsedTime)}
            </span>
            <div className="flex gap-1">
                <Button variant="ghost" size="icon-sm" onClick={reset}>
                    <HugeiconsIcon icon={ReloadIcon} size={16} />
                </Button>
            </div>
        </div>
    );
}

export { Stopwatch };
