import Link from "next/link"
import { getBlogs } from "../services/blogs"

const Blogs = async ({ searchParams }: { searchParams: Promise<{ q?: string }> }) => {
    const { q } = await searchParams

    const allBlogs = await getBlogs()
    const blogs = q
        ? allBlogs.filter((blog) => blog.title.toLowerCase().includes(q.toLowerCase()))
        : allBlogs

    blogs.sort((a, b) => b.likes - a.likes)
    return (
        <div className="max-w-3xl mx-auto p-6">
            <h2 className="text-4xl font-bold mb-6">Blogs</h2>
            <form className="grow flex gap-4 mb-12">
                <input type="text" name="q" className="grow border border-white rounded-lg bg-gray-950 px-2" />
                <button type="submit" className="bg-cyan-600 p-2 rounded-lg focus:shadow-outline hover:bg-cyan-800">Search</button>
            </form>
            <ul className="space-y-2">
                {blogs.map(blog => (
                    <li key={blog.id} className="p-3 full-w hover:bg-mist-900">
                        <p className="mb-3">
                            <Link href={`/blogs/${blog.id}`} className="text-3xl tracking-tighter">{blog.title}</Link>
                        </p>
                        <span className="text-foreground/50">{blog.author} ({blog.url}) LIKES: {blog.likes}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Blogs