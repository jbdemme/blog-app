import { createBlog } from "@/app/actions/notes"

const NewBlog = () => {
    return (
        <div>
            <h2>Add a new blog</h2>
            <form action={createBlog}>
                <TextInput title="title" />
                <TextInput title="author" />
                <TextInput title="url" />
                <button type="submit">Add Blog</button>
            </form>
        </div>
    )
}

const TextInput = ({ title }: { title: string }) => {
    return (
        <div>
            <label>
                {title}
                <input type="text" name={title} />
            </label>
        </div>
    )
}

export default NewBlog