'use client';

import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText } from "@/components/ui/input-group";
import { HugeiconsIcon } from "@hugeicons/react";
import { MinusSignIcon, PlusSignIcon } from "@hugeicons/core-free-icons";
import { SetTemplate } from "./create-workout-template";

interface EditWorkoutExerciseSetProps {
    set: SetTemplate;
    onChange: (value: SetTemplate) => void;
}

export function EditWorkoutExerciseSet({ set, onChange }: EditWorkoutExerciseSetProps) {

    function handleRepsChange(value: number) {
        const clamped = Math.min(20, Math.max(1, value));
        onChange({ ...set, reps: clamped });
    }

    function handleWeightChange(value: number) {
        onChange({ ...set, weight: value });
    }

    return (
        <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
                <InputGroup className="w-auto">
                    <InputGroupAddon align="inline-start" className="md:hidden pl-0.5">
                        <InputGroupButton
                            variant="ghost"
                            size="icon-xs"
                            onClick={() => handleRepsChange(set.reps - 1)}
                            disabled={set.reps <= 1}
                        >
                            <HugeiconsIcon icon={MinusSignIcon} />
                        </InputGroupButton>
                    </InputGroupAddon>
                    <InputGroupInput
                        type="number"
                        min={1}
                        max={20}
                        value={set.reps}
                        onChange={(e) => handleRepsChange(parseInt(e.target.value) || 1)}
                        className="w-10 text-center text-foreground"
                    />
                    <InputGroupAddon align="inline-end" className="md:hidden pr-0.5">
                        <InputGroupButton
                            variant="ghost"
                            size="icon-xs"
                            onClick={() => handleRepsChange(set.reps + 1)}
                            disabled={set.reps >= 20}
                        >
                            <HugeiconsIcon icon={PlusSignIcon} />
                        </InputGroupButton>
                    </InputGroupAddon>
                </InputGroup>
            </div>
            <span className="text-muted-foreground">×</span>
            <InputGroup className="w-auto">
                <InputGroupInput
                    type="number"
                    min={1}
                    value={set.weight}
                    onChange={(e) => handleWeightChange(parseInt(e.target.value) || 1)}
                    className="w-14 text-center text-foreground"
                />
                <InputGroupAddon align="inline-end" className="pr-2">
                    <InputGroupText>lb</InputGroupText>
                </InputGroupAddon>
            </InputGroup>
        </div>
    );
}
