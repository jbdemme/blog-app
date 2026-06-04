import Link from "next/link"
import { getBlogs } from "../services/blogs"

const Blogs = async ({ searchParams }: { searchParams: Promise<{ q?: string }> }) => {
    const { q } = await searchParams

    const allBlogs = getBlogs()
    const blogs = q
        ? allBlogs.filter((blog) => blog.title.toLowerCase().includes(q.toLowerCase()))
        : allBlogs

    blogs.sort((a, b) => b.likes - a.likes)
    return (
        <div>
            <h2>Blogs</h2>
            <form>
                <input type="text" name="q" />
                <button type="submit">Search</button>
            </form>
            <ul>
                {blogs.map(blog => (
                    <li key={blog.id}>
                        <p>
                            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                        </p>
                        {blog.author} ({blog.url}) LIKES: {blog.likes}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Blogs