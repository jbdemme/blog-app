import { getReadingList } from "../services/readingList"
import { BlogList } from "./BlogList"

const ReadingList = async ({ user }: { user: { id: number } }) => {

    const blogs = await getReadingList(user.id)

    console.log(blogs)

    if (!blogs || blogs.length === 0) {
        return (
            <>
                <h2 className="text-2xl font-bold" data-testid="reading-list-section">Reading List</h2>
                <div className="text-foreground/50" data-testid="empty-reading-list">
                    No blogs in your reading list. Add your first blog to your reading list by clicking on "Add to reading list".
                </div>
            </>
        )
    }

    const readBlogs = blogs.filter(b => b.read)
    const unreadBlogs = blogs.filter(b => !b.read)

    return (
        <>
            <h2 className="text-2xl font-bold" data-testid="reading-list-section">Reading List</h2>
            <div data-testid="unread-section" className="space-y-2">
                <div>Unread ({unreadBlogs.length})</div>
                {unreadBlogs.length > 0 ?
                    <BlogList blogs={unreadBlogs} />
                    : <div data-testid="no-unread-blogs" className="text-foreground/50">
                        No unread blogs.
                    </div>}
            </div>
            <div data-testid="read-section" className="space-y-2">
                <div>Read ({readBlogs.length})</div>
                <BlogList blogs={readBlogs} data-testid="read-section" />
            </div>
        </>
    )
}

export default ReadingList