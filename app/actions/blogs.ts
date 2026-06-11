"use server"

import { redirect } from "next/navigation"
import { addBlog, increaseLike } from "../services/blogs"
import { revalidatePath } from "next/cache"
import { auth } from "@/auth"
import { getCurrentUser } from "../services/session"
import { addReadingList, markBlogRead } from "../services/readingList"

export type createState = {
    errors?: {
        title?: string,
        author?: string,
        url?: string
    },
    values?: {
        title?: string,
        author?: string
        url?: string
    },
    success: boolean
}

export const createBlog = async (prevState: createState, formData: FormData) => {
    const session = await auth()
    if (!session) {
        redirect("/login")
    }

    const title = formData.get("title") as string
    const author = formData.get("author") as string
    const url = formData.get("url") as string
    const likes = Number(formData.get("likes"))

    const errors: createState["errors"] = {}

    if (!title || title.length < 5) {
        errors.title = "Title must be at least 5 characters"
    }
    if (!author || author.length < 5) {
        errors.author = "Author must be at least 5 characters"
    }
    if (!url || url.length < 5) {
        errors.url = "URL must be at least 5 characters"
    }

    if (Object.keys(errors).length > 0) {
        return {
            errors,
            values: {
                title,
                author,
                url,
            },
            success: false
        }
    }

    await addBlog(title, author, url, likes)

    revalidatePath("/blogs")
    return { success: true }
}

export const likeBlog = async (formData: FormData) => {
    const id = Number(formData.get("id"))
    await increaseLike(id)

    revalidatePath(`/blogs/${id}`)
    revalidatePath("/blogs")
}

export const addToReadingList = async (formData: FormData) => {
    const blogId = Number(formData.get("id"))
    const user = await getCurrentUser()
    if (!user) redirect("/login")
    await addReadingList(blogId, user.id)
    revalidatePath("/me")
}

export const markRead = async (formData: FormData) => {
    const blogId = Number(formData.get("id"))
    const user = await getCurrentUser()
    if (!user) redirect("/login")
    await markBlogRead(blogId, user.id)
    revalidatePath("/me")
}