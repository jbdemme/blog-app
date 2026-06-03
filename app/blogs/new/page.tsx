const NewBlog = () => {
    return (
        <div>
            <h2>Add a new blog</h2>
            <form>
                <TextInput title="title" />
                <TextInput title="author" />
                <TextInput title="url" />
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