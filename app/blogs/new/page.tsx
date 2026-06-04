import { createBlog } from "@/app/actions/notes"

const NewBlog = () => {
    return (
        <div>
            <h2>Add a new blog</h2>
            <form action={createBlog}>
                <div>
                    <label>
                        Title
                        <input type="text" name="title" />
                    </label>
                </div>
                <div>
                    <label>
                        Author
                        <input type="text" name="author" />
                    </label>
                </div>
                <div>
                    <label>
                        URL
                        <input type="text" name="url" />
                    </label>
                </div>
                <button type="submit">Add Blog</button>
            </form>
        </div>
    )
}

export default NewBlog