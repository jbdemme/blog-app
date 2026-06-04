import Link from "next/link"
import { getBlogs } from "../services/blogs"

const Blogs = () => {
    const blogs = getBlogs()

    blogs.sort((a, b) => b.likes - a.likes)
    return (
        <div>
            <h2>Blogs</h2>
            <form>
                <input type="text" name="search" />
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