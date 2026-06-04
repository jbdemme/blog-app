import { getBlogById } from "@/app/services/notes"
import { notFound } from "next/navigation"

const Blog = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params
    const blog = getBlogById(Number(id))

    if (!blog) {
        notFound()
    }

    return (
        <div>
            <h2>{blog.title}</h2>
            <p>
                Author: {blog.author}
                {" | "}
                Likes: {blog.likes}
            </p>
            <p>{blog.url}</p>
        </div>
    )
}

export default Blog