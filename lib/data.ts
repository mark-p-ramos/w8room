import { WorkoutModel, WorkoutDTO } from "@/lib/models/workout";
import { setTimeout } from "node:timers/promises";


export async function fetchRecentWorkouts(userId: string) {
    await setTimeout(2000); // TODO: remove
    const data = await WorkoutModel
            .find({ user: userId })
            .select('_id name createdAt')
            .sort({ createdAt: "desc" })
            .limit(10)
            .lean()
            .exec();
    return JSON.parse(JSON.stringify(data));
}

export async function fetchWorkout(id: string): Promise<WorkoutDTO> {
    await setTimeout(2000); // TODO: remove
    const data = await WorkoutModel.findById(id).lean().exec();
    return JSON.parse(JSON.stringify(data));
}