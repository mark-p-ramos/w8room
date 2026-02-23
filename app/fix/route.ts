import { WorkoutModel } from '@/lib/models/workout';
import dbConnect from '@/lib/db-connect';


export async function GET() {
    if (process.env.VERCEL) {
        return Response.json({ message: "OK" });
    }

    await dbConnect();

    const workoutId = "699a18feba77acac31a0b39f";
    const workout = await WorkoutModel.findById(workoutId);
    if (!workout) {
        return Response.json({ error: "workout not found" }, { status: 404 });
    }

    const copy = { ...workout.exercises[0].toObject() };
    delete copy._id;
    workout.exercises.splice(1, 0, copy);

    await workout.save();

    return Response.json({ message: "workout fixed", workout });
}
