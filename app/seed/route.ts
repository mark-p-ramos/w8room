import { ObjectId } from 'mongoose';
import { WorkoutModel } from '@/lib/models/workout';
import { UserModel } from '@/lib/models/user';
import getSeedData from '@/app/seed/seed-data';
import mongooseModule from 'mongoose';
import { auth } from '@/lib/auth';
import dbConnect from '@/lib/db-connect';


export async function GET() {
    const mongoose = await dbConnect();
    const session = await mongoose.startSession();

    try {
        await session.withTransaction(async () => {
            await deleteDb(mongoose);
            await seedDb();
        });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "unknown error";
        return Response.json({ "error": message }, { status: 500 });
    } finally {
        session.endSession();
    }

    return Response.json({ message: "database seeded" });
}


async function seedDb() {
    const userId = await seedUser();
    await seedWorkouts(userId);
}

async function deleteDb(mongoose: typeof mongooseModule) {
    await WorkoutModel.collection.drop();
    await UserModel.collection.drop();
    // Clear model cache to ensure fresh schema
    delete mongoose.models.Workout;
    delete mongoose.models.User;
}

async function seedUser(): Promise<ObjectId> {
    const email = "mark.p.ramos@gmail.com";
    let user = await UserModel.findOne({ email });
    if (user) return user;

    // TODO: need a better way to seed users than calling internalAdapter
    const ctx = await auth.$context;
    user = await ctx.internalAdapter.createUser({
        email,
        name: "Mark Ramos",
        emailVerified: true,
    });

    await ctx.internalAdapter.createAccount({
        accountId: user.id,       // Often the user ID is used as the account ID for credential provider
        providerId: "credential", // The specific provider ID (e.g., "credential" for email/password)
        userId: user.id,          // Link to the newly created user's ID
        password: await ctx.password.hash("lifetimesucks"), // Store the hashed password
        email,            // Store the email associated with the account
    });
    // TODO: need a better way to seed users than calling internalAdapter

    return (await UserModel.findOne({ email })).id;
}

async function seedWorkouts(userId: ObjectId) {
    if (await WorkoutModel.exists({ user: userId })) {
        return;
    }

    const seedData = getSeedData(userId);
    await WorkoutModel.insertMany(seedData, { timestamps: false });
}