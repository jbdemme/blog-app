import { getBlogs } from "../services/notes"

const Blogs = () => {
    const blogs = getBlogs()
    return (
        <div>
            <h2>Blogs</h2>
            <ul>
                {blogs.map(blog => (
                    <li key={blog.id}>
                        <h4>{blog.title}</h4>
                        {blog.author} ({blog.url}) LIKES: {blog.likes}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Blogs