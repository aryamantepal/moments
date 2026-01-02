import prisma from "@/lib/prisma";
import Link from "next/link";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export default async function Moments() {
    const moments = await prisma.moment.findMany({
        include: {
            author: true,
        },
    });

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16 text-[#333333]">
            <h1 className="text-4xl font-bold mb-8 font-(family-name:--font-geist-sans)">
                Moments
            </h1>
            <ul className="`font-(family-name:--font-geist-sans)` max-w-2xl space-y-4">
                {moments.map((moment) => (
                    <li key={moment.id}>
                        <Link href={`/moments/${moment.id}`} className="hover:underline">
                            <span className="font-semibold">{moment.caption}</span>
                            <span className="text-sm text-gray-600 ml-2">
                                by {moment.author.name}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}