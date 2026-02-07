import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { headers } from "next/headers";
import { MongoClient } from 'mongodb'


const client = new MongoClient(process.env.MONGODB_URI!);

export const auth = betterAuth({
    database: mongodbAdapter(client.db(process.env.MONGODB_NAME), { client }),
    advanced: {
        database: {
            generateId: false,
        },
    },
    user: {
        modelName: "users",
    },
    session: {
        modelName: "sessions",
    },
    account: {
        modelName: "accounts",
        accountLinking: {
            enabled: true,
        }
    },

    emailAndPassword: {
        enabled: true,
        requireEmailVerification: false,
    },

    plugins: [nextCookies()] // nextCookies() should be the last plugin in the array
});

export async function getUser() {
    const session = await auth.api.getSession({ headers: await headers() });
    return session!.user;
}