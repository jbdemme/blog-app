const blogs = [
    {
        id: 1,
        title: "How to solve murders?",
        author: "James Dean",
        url: "https://www.example.com/how-to-solve-murder"
    },
    {
        id: 2,
        title: "Amazing ideas for a dog",
        author: "My Dog",
        url: "https://www.example.com/dog-ideas"
    }
]

const Blogs = () => {
    return (
        <div>
            <h2>Blogs</h2>
            <ul>
                {blogs.map(blog => (
                    <li key={blog.id}>
                        <h4>{blog.title}</h4>
                        {blog.author} ({blog.url})
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Blogs