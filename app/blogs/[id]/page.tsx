import { likeBlog } from "@/app/actions/blogs"
import { getBlogById } from "@/app/services/blogs"
import { notFound } from "next/navigation"

const Blog = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params
    const blog = await getBlogById(Number(id))

    if (!blog) {
        notFound()
    }

    return (
        <div className="p-4 space-y-4">
            <h2 className="text-6xl tracking-tighter text-balance mb-4">{blog.title}</h2>
            <p className="text-foreground/50 mb-4">
                Author: <em>{blog.author}</em>
            </p>
            <p>{blog.url}</p>
            <div className="flex items-center gap-12">
                {blog.likes} Likes
                <form action={likeBlog}>
                    <input type="hidden" name="id" value={blog.id} />
                    <button type="submit" className="bg-cyan-600 rounded px-2 py-1 font-bold">LIKE</button>
                </form>
            </div>
        </div>
    )
}

export default Blog