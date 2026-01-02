import Form from "next/form";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { put } from '@vercel/blob';

export default function NewMoment() {
    async function createMoment(formData: FormData) {
        "use server";

        const caption = formData.get("caption") as string;
        const location = formData.get("location") as string;
        const image = formData.get("image") as File;

        const blob = await put(image.name, image, {
            access: 'public',
        });

        await prisma.moment.create({
            data: {
                imageUrl: blob.url,
                caption,
                location,
                authorId: 1,
            },
        });

        revalidatePath("/moments");
        redirect("/moments");
    }

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Create New Post</h1>
            <Form action={createMoment} className="space-y-6">
                <div>
                    <label htmlFor="image" className="block text-lg mb-2">
                        Image
                    </label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        required
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>
                <div>
                    <label htmlFor="caption" className="block text-lg mb-2">
                        Caption
                    </label>
                    <textarea
                        id="caption"
                        name="caption"
                        placeholder="What's this moment about?"
                        rows={3}
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>
                <div>
                    <label htmlFor="location" className="block text-lg mb-2">
                        Location
                    </label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        placeholder="Where was this taken?"
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
                >
                    Upload Moment
                </button>
            </Form>
        </div>
    );
}