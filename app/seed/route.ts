import mongoose, { ObjectId } from 'mongoose';
import { UserModel } from '@/lib/models/user';
import { WorkoutModel } from '@/lib/models/workout';
import { auth } from '@/lib/auth';


export async function GET() {
    const session = await mongoose.startSession();
    try {
        return await session.withTransaction(() => {
            deleteDb();
            return seedDb();
        });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "unknown error";
        return Response.json({ "error": message }, { status: 500 });
    } finally {
        session.endSession();
    }
}

async function seedDb() {
    const userId = await seedUser();
    await seedWorkouts(userId);
    return Response.json({ message: "MongoDB seeded" });
}

async function deleteDb() {
    await WorkoutModel.collection.drop();
    await UserModel.collection.drop();
    // Clear model cache to ensure fresh schema
    delete mongoose.models.Workout;
    delete mongoose.models.User;
    return Response.json({ message: "MongoDB deleted" });
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

    await WorkoutModel.insertMany([
    {
        user: userId,
        name: 'Push (heavy)',
        exercises: [
        {
            name: 'Incline Press DB',
            sets: [
                { reps: 5, weight: 75 },
                { reps: 5, weight: 75 },
                { reps: 6, weight: 75 },
            ],
        },
        {
            name: 'Seated Overhead Press Bar',
            sets: [
                { reps: 13, weight: 105 },
                { reps: 9, weight: 105 },
                { reps: 8, weight: 105 },
            ],
        },
        {
            name: 'Lateral Raise',
            sets: [
                { reps: 11, weight: 25 },
                { reps: 10, weight: 25 },
                { reps: 9, weight: 25 },
            ],
        },
        {
            name: 'Skull Crushers EZ Bar',
            sets: [
                { reps: 11, weight: 75 },
                { reps: 8, weight: 75 },
                { reps: 8, weight: 65 },
            ],
        },
        ],
        createdAt: new Date('2026-02-03T11:15:00Z'),
    },
    {
        user: userId,
        name: 'Pull (heavy)',
        exercises: [
        {
            name: 'Pullups',
            sets: [
                { reps: 5, weight: 40 },
                { reps: 5, weight: 40 },
                { reps: 6, weight: 40 },
            ],
        },
        {
            name: 'Seated Cable Row',
            sets: [
                { reps: 12, weight: 150 },
                { reps: 10, weight: 150 },
                { reps: 8, weight: 150 },
            ],
        },
        {
            name: 'Barbell Curls',
            sets: [
                { reps: 10, weight: 65 },
                { reps: 9, weight: 65 },
            ],
        },
        {
            name: 'Preacher Curls DB',
            sets: [
                { reps: 8, weight: 25 },
                { reps: 7, weight: 25 },
            ],
        },
        ],
        createdAt: new Date('2026-02-01T11:30:00Z'),
    },
    {
        user: userId,
        name: 'Legs (heavy)',
        exercises: [
        {
            name: 'Bulgarian Split Squats DB',
            sets: [
                { reps: 4, weight: 62 },
                { reps: 5, weight: 62 },
                { reps: 5, weight: 62 },
            ],
        },
        {
            name: 'Leg Extensions',
            sets: [
                { reps: 10, weight: 100 },
                { reps: 11, weight: 100 },
                { reps: 11, weight: 100 },
            ],
        },
        {
            name: 'SLDL',
            sets: [
                { reps: 10, weight: 155 },
                { reps: 10, weight: 165 },
                { reps: 10, weight: 165 },
            ],
        },
        ],
        createdAt: new Date('2026-01-30T11:30:00Z'),
    },
    {
        user: userId,
        name: 'Push',
        exercises: [
        {
            name: 'Incline Press DB',
            sets: [
                { reps: 12, weight: 60 },
                { reps: 9, weight: 60 },
                { reps: 8, weight: 60 },
            ],
        },
        {
            name: 'Seated Overhead Press Bar',
            sets: [
                { reps: 11, weight: 95 },
                { reps: 8, weight: 95 },
                { reps: 8, weight: 95 },
            ],
        },
        {
            name: 'Lateral Raise',
            sets: [
                { reps: 13, weight: 25 },
                { reps: 10, weight: 25 },
                { reps: 8, weight: 25 },
            ],
        },
        {
            name: 'Skull Crushers EZ Bar',
            sets: [
                { reps: 14, weight: 65 },
                { reps: 9, weight: 65 },
                { reps: 7, weight: 65 },
            ],
        },
        ],
        createdAt: new Date('2026-01-29T11:30:00Z'),
    },
    {
        user: userId,
        name: 'Pull',
        exercises: [
        {
            name: 'Pullups',
            sets: [
                { reps: 9, weight: 20 },
                { reps: 8, weight: 20 },
            ],
        },
        {
            name: 'Seated Cable Row',
            sets: [
                { reps: 10, weight: 150 },
                { reps: 8, weight: 150 },
                { reps: 9, weight: 140 },
            ],
        },
        {
            name: 'T Bar Row',
            sets: [
                { reps: 9, weight: 70 },
                { reps: 10, weight: 70 },
            ],
        },
        {
            name: 'Barbell Curls',
            sets: [
                { reps: 12, weight: 60 },
                { reps: 9, weight: 60 },
            ],
        },
        {
            name: 'Preacher Curls DB',
            sets: [
                { reps: 12, weight: 20 },
                { reps: 10, weight: 20 },
            ],
        },
        ],
        createdAt: new Date('2026-01-27T11:30:00Z'),
    },
    {
        user: userId,
        name: 'Legs',
        exercises: [
        {
            name: 'Bulgarian Split Squats DB',
            sets: [
                { reps: 11, weight: 45 },
                { reps: 10, weight: 45 },
                { reps: 9, weight: 45 },
            ],
        },
        {
            name: 'Leg Extensions',
            sets: [
                { reps: 10, weight: 90 },
                { reps: 10, weight: 90 },
                { reps: 9, weight: 90 },
            ],
        },
        {
            name: 'Leg Curls',
            sets: [
                { reps: 13, weight: 90 },
                { reps: 10, weight: 90 },
                { reps: 8, weight: 90 },
            ],
        },
        {
            name: 'Calf Raises Smith',
            sets: [
                { reps: 16, weight: 245 },
                { reps: 13, weight: 245 },
                { reps: 12, weight: 245 },
            ],
        },
        ],
        createdAt: new Date('2026-01-26T11:30:00Z'),
    },
    {
        user: userId,
        name: 'Push (heavy)',
        exercises: [
        {
            name: 'Incline Press DB',
            sets: [
                { reps: 5, weight: 70 },
                { reps: 6, weight: 70 },
                { reps: 7, weight: 70 },
            ],
        },
        {
            name: 'Seated Overhead Press Bar',
            sets: [
                { reps: 13, weight: 90 },
                { reps: 10, weight: 90 },
                { reps: 8, weight: 90 },
            ],
        },
        {
            name: 'Lateral Raise',
            sets: [
                { reps: 10, weight: 25 },
                { reps: 9, weight: 25 },
                { reps: 8, weight: 25 },
            ],
        },
        {
            name: 'Skull Crushers EZ Bar',
            sets: [
                { reps: 12, weight: 65 },
                { reps: 9, weight: 65 },
                { reps: 7, weight: 65 },
            ],
        },
        ],
        createdAt: new Date('2026-01-24T11:30:00Z'),
    },
    {
        user: userId,
        name: 'Pull (heavy)',
        exercises: [
        {
            name: 'Pullups',
            sets: [
                { reps: 5, weight: 40 },
                { reps: 5, weight: 40 },
                { reps: 5, weight: 40 },
            ],
        },
        {
            name: 'Seated Cable Row',
            sets: [
                { reps: 11, weight: 150 },
                { reps: 8, weight: 150 },
                { reps: 8, weight: 150 },
            ],
        },
        {
            name: 'Barbell Curls',
            sets: [
                { reps: 13, weight: 60 },
                { reps: 9, weight: 60 },
            ],
        },
        {
            name: 'Preacher Curls DB',
            sets: [
                { reps: 10, weight: 20 },
                { reps: 9, weight: 20 },
            ],
        },
        ],
        createdAt: new Date('2026-01-23T11:30:00Z'),
    },
    {
        user: userId,
        name: 'Legs (heavy)',
        exercises: [
        {
            name: 'Bulgarian Split Squats DB',
            sets: [
                { reps: 6, weight: 50 },
                { reps: 4, weight: 62 },
                { reps: 4, weight: 62 },
            ],
        },
        {
            name: 'Leg Extensions',
            sets: [
                { reps: 12, weight: 90 },
                { reps: 11, weight: 90 },
                { reps: 11, weight: 90 },
            ],
        },
        {
            name: 'SLDL',
            sets: [
                { reps: 10, weight: 145 },
                { reps: 10, weight: 155 },
                { reps: 10, weight: 155 },
            ],
        },
        {
            name: 'Calf Raises Smith',
            sets: [
                { reps: 17, weight: 225 },
                { reps: 14, weight: 245 },
                { reps: 12, weight: 245 },
            ],
        },
        ],
        createdAt: new Date('2026-01-21T11:30:00Z'),
    },
    {
        user: userId,
        name: 'Legs',
        exercises: [
        {
            name: 'Bulgarian Split Squats DB',
            sets: [
                { reps: 12, weight: 40 },
                { reps: 10, weight: 40 },
                { reps: 9, weight: 40 },
            ],
        },
        {
            name: 'Leg Extensions',
            sets: [
                { reps: 12, weight: 70 },
                { reps: 11, weight: 70 },
                { reps: 11, weight: 70 },
            ],
        },
        {
            name: 'Leg Curls',
            sets: [
                { reps: 12, weight: 90 },
                { reps: 8, weight: 90 },
                { reps: 10, weight: 75 },
            ],
        },
        ],
        createdAt: new Date('2026-01-17T11:30:00Z'),
    },
    ], { timestamps: false });
}
