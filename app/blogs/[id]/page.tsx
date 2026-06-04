import { likeBlog } from "@/app/actions/blogs"
import { getBlogById } from "@/app/services/blogs"
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
            <form action={likeBlog}>
                <input type="hidden" name="id" value={blog.id} />
                <button type="submit">Like {"<3"}</button>
            </form>
        </div>
    )
}

export default Blog