import mongoose, { HydratedDocument, InferSchemaType } from 'mongoose';

const workoutSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
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
                    min: 1,
                    required: true,
                },
                weight: {
                    type: Number,
                    min: 1,
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
}, { timestamps: true });

export type Workout = InferSchemaType<typeof workoutSchema>;

export type WorkoutDocument = HydratedDocument<Workout>;

export const WorkoutModel = mongoose.models.Workout || mongoose.model('Workout', workoutSchema);