import mongoose, { InferRawDocType, InferHydratedDocType } from 'mongoose';

const userSchemaDefinition = {
    name: String,
    email: { 
        type: String, 
        required: true,
        unique: true, 
    },
} as const;

export type UserDTO = Omit<InferRawDocType<typeof userSchemaDefinition>, '_id'> & 
    { _id: string, createdAt: Date };

const userSchema = new mongoose.Schema(userSchemaDefinition, { timestamps: true });

export type User = InferHydratedDocType<typeof userSchema>;

export const UserModel = mongoose.models.User || mongoose.model('User', userSchema);