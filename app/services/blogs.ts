const blogs = [
    {
        id: 1,
        title: "How to solve murders?",
        author: "James Dean",
        url: "https://www.example.com/how-to-solve-murder",
        likes: 2
    },
    {
        id: 2,
        title: "Amazing ideas for a dog",
        author: "My Dog",
        url: "https://www.example.com/dog-ideas",
        likes: 4
    }
]

let nextId = 3

export const getBlogs = () => {
    return blogs
}

export const getBlogById = (id: number) => {
    return blogs.find((blog) => blog.id === id)
}

export const addBlog = (title: string, author: string, url: string, likes: number) => {
    blogs.push({ id: nextId++, title, author, url, likes })
}

export const increaseLike = (id: number) => {
    const blog = getBlogById(id)
    if (blog) {
        blog.likes++
    }
}