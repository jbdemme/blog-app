import Link from "next/link"
import { getBlogs } from "../services/notes"

const Blogs = () => {
    const blogs = getBlogs()
    return (
        <div>
            <h2>Blogs</h2>
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