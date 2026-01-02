import { PrismaClient, Prisma } from "../app/generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({
    adapter,
});

const userData: Prisma.UserCreateInput[] = [
    {
        name: "Alice",
        email: "alice@prisma.io",
        moments: {
            create: [
                {
                    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
                    caption: "Mountain sunrise 🌄",
                    location: "Swiss Alps",
                },
                {
                    imageUrl: "https://images.unsplash.com/photo-1551632811-561732d1e306",
                    caption: "Coffee time ☕",
                    location: "Brooklyn",
                },
            ],
        },
    },
    {
        name: "Bob",
        email: "bob@prisma.io",
        moments: {
            create: [
                {
                    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
                    caption: "Beach day 🏖️",
                    location: "Malibu",
                },
            ],
        },
    },
];

export async function main() {
    for (const u of userData) {
        await prisma.user.create({ data: u });
    }
}

main();