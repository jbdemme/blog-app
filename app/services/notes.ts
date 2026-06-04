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

let nextId = 3

export const getBlogs = () => {
    return blogs
}

export const addBlog = (title: string, author: string, url: string) => {
    blogs.push({ id: nextId++, title, author, url })
}