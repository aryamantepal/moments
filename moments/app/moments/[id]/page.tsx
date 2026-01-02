import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function MomentPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const moment = await prisma.moment.findUnique({
        where: { id: id },
        include: {
            author: true,
        },
    });

    if (!moment) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
            <article className="max-w-2xl space-y-4 font-(family-name:--font-geist-sans)">
                <img
                    src={moment.imageUrl}
                    alt={moment.caption || 'Moment'}
                    className="w-full rounded-lg shadow-lg mb-6"
                />
                <h1 className="text-4xl font-bold mb-8 text-[#333333]">{moment.caption || 'Untitled Moment'}</h1>
                <p className="text-gray-600">by {moment.author.name}</p>
                {moment.location && (
                    <p className="text-gray-500">📍 {moment.location}</p>
                )}
                <p className="text-gray-400 text-sm">
                    {new Date(moment.createdAt).toLocaleDateString()}
                </p>
            </article>
        </div>
    );
}