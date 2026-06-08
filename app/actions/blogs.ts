"use server"

import { redirect } from "next/navigation"
import { addBlog, increaseLike } from "../services/blogs"
import { revalidatePath } from "next/cache"
import { auth } from "@/auth"

export const createBlog = async (formData: FormData) => {
    const session = await auth()
    if (!session) {
        redirect("/login")
    }

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