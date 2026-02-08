import { WorkoutModel, WorkoutDTO } from "@/lib/models/workout";


export async function fetchRecentWorkouts(userId: string) {
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
    const data = await WorkoutModel.findById(id).lean().exec();
    return JSON.parse(JSON.stringify(data));
}