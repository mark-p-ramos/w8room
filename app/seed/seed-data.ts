import { ObjectId } from "mongoose";


const seedData = [
    {
        user: "placeholder",
        name: 'Legs',
        exercises: [
            {
                name: 'Bulgarian Split Squats DB',
                sets: [
                    { reps: 9, weight: 50 },
                    { reps: 8, weight: 50 },
                    { reps: 7, weight: 50 },
                ],
            },
            {
                name: 'Leg Extensions',
                sets: [
                    { reps: 11, weight: 100 },
                    { reps: 10, weight: 100 },
                    { reps: 9, weight: 100 },
                ],
            },
            {
                name: 'Leg Curls',
                sets: [
                    { reps: 10, weight: 100 },
                    { reps: 10, weight: 100 },
                    { reps: 7, weight: 100 },
                ],
            },
            {
                name: 'Calf Raises Cybex',
                sets: [
                    { reps: 10, weight: 170 },
                    { reps: 12, weight: 170 },
                    { reps: 0, weight: 170 },
                ],
            },
        ],
        createdAt: new Date('2026-02-07T13:00:00Z'),
    },
    {
        user: "placeholder",
        name: 'Pull',
        exercises: [
            {
                name: 'Pullups',
                sets: [
                    { reps: 10, weight: 20 },
                    { reps: 9, weight: 20 },
                ],
            },
            {
                name: 'Seated Cable Row',
                sets: [
                    { reps: 10, weight: 150 },
                    { reps: 8, weight: 150 },
                    { reps: 8, weight: 150 },
                ],
            },
            {
                name: 'Barbell Curls',
                sets: [
                    { reps: 7, weight: 70 },
                    { reps: 7, weight: 70 },
                ],
            },
            {
                name: 'Preacher Curls DB',
                sets: [
                    { reps: 9, weight: 25 },
                    { reps: 7, weight: 25 },
                ],
            },
        ],
        createdAt: new Date('2026-02-05T11:30:00Z'),
    },
    {
        user: "placeholder",
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
        user: "placeholder",
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
        user: "placeholder",
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
        user: "placeholder",
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
        user: "placeholder",
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
        user: "placeholder",
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
        user: "placeholder",
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
        user: "placeholder",
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
        user: "placeholder",
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
        user: "placeholder",
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
];

export default function getSeedData(userId: ObjectId) {
    return seedData.map((workout) => ({
        ...workout,
        user: userId,
    }));
}