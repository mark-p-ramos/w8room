import { InferHydratedDocType, InferRawDocType } from 'mongoose';
import dbConnect from '../db-connect';


const mongoose = await dbConnect();

const workoutSchemaDefinition = {
    user: {
        type: mongoose!.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    name: String,
    exercises: [{
        name: {
            type: String,
            required: true,
        },
        sets: {
            type: [{
                reps: {
                    type: Number,
                    min: 0,
                    required: true,
                },
                weight: {
                    type: Number,
                    min: 0,
                    required: true,
                },
            }],
            required: true,
            validate: {
                validator: (value: unknown) => {
                    return Array.isArray(value) && value.length >= 1;
                },
                message: 'Exercise must have at least 1 set.',
            },
        },
    }],
} as const;

export type WorkoutDTO = Omit<InferRawDocType<typeof workoutSchemaDefinition>, '_id'>
    & { _id: string, createdAt: Date };

const workoutSchema = new mongoose!.Schema(workoutSchemaDefinition, { timestamps: true });

export type Workout = InferHydratedDocType<typeof workoutSchema>;

export const WorkoutModel = mongoose!.models.Workout || mongoose!.model('Workout', workoutSchema);