import { redirect } from "next/navigation"
import { getReadingList } from "../services/readingList"
import { getCurrentUser } from "../services/session"
import { BlogList } from "./BlogList"

const ReadingList = async () => {
    const user = await getCurrentUser()
    if (!user) redirect("/login")

    const blogs = await getReadingList(user.id)

    const readBlogs = blogs.filter(b => b.read)
    const unreadBlogs = blogs.filter(b => !b.read)

    return (
        <>
            <h2 className="text-2xl font-bold">Reading List</h2>
            Unread ({unreadBlogs.length})
            <BlogList blogs={unreadBlogs} />
            Read ({readBlogs.length})
            <BlogList blogs={readBlogs} />
        </>
    )
}

export default ReadingList