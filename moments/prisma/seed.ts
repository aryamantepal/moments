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
        posts: {
            create: [
                {
                    title: "Join the Prisma Discord",
                    content: "https://pris.ly/discord",
                    published: true,
                },
                {
                    title: "Prisma on YouTube",
                    content: "https://pris.ly/youtube",
                },
            ],
        },
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
        posts: {
            create: [
                {
                    title: "Follow Prisma on Twitter",
                    content: "https://www.twitter.com/prisma",
                    published: true,
                },
            ],
        },
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