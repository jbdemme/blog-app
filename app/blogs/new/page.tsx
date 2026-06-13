"use client"

import { createBlog, createState } from "@/app/actions/blogs"
import FormInput from "@/app/component/FormInput"
import { useNotification } from "@/app/component/NotificationContext"
import { useRouter } from "next/navigation"
import React, { useActionState, useEffect } from "react"

const NewBlog = () => {
    const [state, formAction] = useActionState(createBlog, {} as createState)

    const router = useRouter()
    const { showNotification } = useNotification()

    useEffect(() => {
        if (state.success) {
            showNotification("Created new blog", "success")
            router.push("/blogs")
        }
    }, [state])

    return (
        <div className="flex items-center flex-col">
            <h2 className="text-6xl mb-6">Add a new blog</h2>
            <form action={formAction} className="flex flex-col gap-4 w-md">
                <div>
                    <label className="flex justify-between">
                        Title
                        <FormInput name="title" defaultValue={state.values?.title} />
                    </label>
                    {state.errors?.title && <p style={{ color: "red" }}>{state.errors.title}</p>}
                </div>
                <div>
                    <label className="flex justify-between">
                        Author
                        <FormInput name="author" defaultValue={state.values?.url} />
                    </label>
                    {state.errors?.author && <p style={{ color: "red" }}>{state.errors.author}</p>}
                </div>
                <div>
                    <label className="flex justify-between">
                        URL
                        <FormInput name="url" defaultValue={state.values?.url} />
                    </label>
                    {state.errors?.url && <p style={{ color: "red" }}>{state.errors.url}</p>}
                </div>
                <button type="submit" data-testid="create-blog-button" className="rounded bg-cyan-800 max-w-32">
                    Add Blog
                </button>
            </form>
        </div>
    )
}

export default NewBlog