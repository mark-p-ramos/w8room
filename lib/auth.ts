import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import mongoose from "mongoose";


const client = mongoose.connection.getClient();

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
    },

    emailAndPassword: { 
        enabled: true, 
    },

    plugins: [nextCookies()] // nextCookies() should be the last plugin in the array
});
