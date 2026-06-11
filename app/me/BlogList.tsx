import Link from "next/link"
import { markRead } from "../actions/blogs"

export const BlogList = ({ blogs }: { blogs: { id: number, title: string, read: boolean }[] }) => {
    return (
        <ul className="space-y-4">
            {blogs.map((blog) =>
                <li
                    key={blog.id}
                    className="p-4 bg-mist-700 flex justify-between"
                >
                    <Link
                        href={`/blogs/${blog.id}`}
                        className="hover:text-amber-400"
                    >
                        {blog.title}
                    </Link>
                    {!blog.read && <form action={markRead}>
                        <input type="hidden" name="id" value={blog.id} />
                        <button className="px-2 rounded bg-amber-400 hover:bg-amber-500 text-black cursor-pointer">
                            mark as read
                        </button>
                    </form>}
                </li>
            )}
        </ul>
    )
}