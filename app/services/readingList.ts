import { db } from "@/db"
import { blogs, readingList } from "@/db/schema"
import { and, eq, getTableColumns } from "drizzle-orm"
import { getBlogById } from "./blogs"

export const getReadingList = async (userId: number) => {
    return await db
        .select({
            ...getTableColumns(blogs),
            read: readingList.read
        })
        .from(blogs)
        .innerJoin(readingList, eq(readingList.blogId, blogs.id))
        .where(eq(readingList.userId, userId))
}

export const addReadingList = async (blogId: number, userId: number) => {
    await db
        .insert(readingList)
        .values({ blogId, userId })
}

export const markBlogRead = async (blogId: number, userId: number) => {
    await db
        .update(readingList)
        .set({ read: true })
        .where(and(eq(readingList.blogId, blogId), eq(readingList.userId, userId)))
}