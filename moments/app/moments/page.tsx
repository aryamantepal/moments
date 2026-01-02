import prisma from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export default async function Moments() {
    const moments = await prisma.moment.findMany({
        include: {
            author: true,
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <h1 className="text-4xl font-bold mb-8 text-center text-[#333333]">
                Moments
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                {moments.map((moment) => (
                    <Link
                        key={moment.id}
                        href={`/moments/${moment.id}`}
                        className="group"
                    >
                        <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-200">
                            <Image
                                src={moment.imageUrl}
                                alt={moment.caption || 'Moment'}
                                width={400}
                                height={400}
                                className="w-full h-full object-cover"
                                loading="lazy" // Only load when scrolled into view
                                placeholder="blur"
                                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                            />

                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                                    <p className="font-semibold text-lg mb-1">{moment.caption}</p>
                                    <p className="text-sm">by {moment.author.name}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}