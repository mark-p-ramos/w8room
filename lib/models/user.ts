import mongoose, { HydratedDocument, InferSchemaType } from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    email: { 
        type: String, 
        required: true,
        unique: true, 
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });

export type User = InferSchemaType<typeof userSchema>;

export type UserDocument = HydratedDocument<User>;

export const UserModel = mongoose.models.User || mongoose.model('User', userSchema);