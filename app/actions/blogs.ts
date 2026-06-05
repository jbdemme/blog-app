"use server"

import { redirect } from "next/navigation"
import { addBlog, increaseLike } from "../services/blogs"
import { revalidatePath } from "next/cache"

export const createBlog = async (formData: FormData) => {
    const title = formData.get("title") as string
    const author = formData.get("author") as string
    const url = formData.get("url") as string
    const likes = Number(formData.get("likes"))
    await addBlog(title, author, url, likes)
    revalidatePath("/blogs")
    redirect("/blogs")
}

export const likeBlog = async (formData: FormData) => {
    const id = Number(formData.get("id"))
    await increaseLike(id)

    revalidatePath(`/blogs/${id}`)
    revalidatePath("/blogs")
}