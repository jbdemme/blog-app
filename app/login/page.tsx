"use client"

import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import FormInput from "../component/FormInput"
import { useNotification } from "../component/NotificationContext"

export default function LoginPage() {
    const router = useRouter()
    const [error, setError] = useState("")
    const { showNotification } = useNotification()

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)

        const username = formData.get("username")
        const password = formData.get("password")

        const result = await signIn("credentials", { username, password, redirect: false })

        if (result?.error) {
            setError("Invalid username or password")
        } else {
            showNotification(`Logged in as ${username}`, "success")
            router.push("/")
            router.refresh()
        }
    }

    return (
        <div className="mx-auto max-w-2xl flex flex-col items-center gap-8">
            <h2 className="text-2xl font-bold">Login</h2>
            {error &&
                <p className="test-red-500" data-testid="error-message">
                    {error}
                </p>
            }
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="">
                        Username
                        <FormInput name="username" required />
                    </label>
                </div>
                <div>
                    <label>
                        Password
                        <FormInput type="password" name="password" required />
                    </label>
                </div>
                <button
                    type="submit"
                    data-testid="login-button"
                    className="bg-amber-400 px-4 py-2 rounded text-background font-bold"
                >
                    Login
                </button>
            </form>
        </div>
    )
}