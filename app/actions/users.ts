"use server"

import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import bcrypt from "bcryptjs"
import { db } from "../../db"
import { users } from "../../db/schema"
import { auth } from "@/auth"
import { eq } from "drizzle-orm"

export type registerState = {
    errors?: {
        username?: string,
        password?: string,
        passwordConfirm?: string,
        general?: string
    }
}

export const registerUser = async (prevState: registerState, formData: FormData) => {
    const username = (formData.get("username") as string)?.trim()
    const name = (formData.get("name") as string)?.trim()
    const password = formData.get("password") as string
    const passwordConfirm = formData.get("password-confirm") as string

    const errors: registerState["errors"] = {}

    if (!username || username.length < 4) errors.username = "Username must be at least 5 characters"
    if (!password || password.length < 4) errors.password = "Password must be at least 5 characters"
    if (password !== passwordConfirm) errors.passwordConfirm = "Passwords need to be the same"

    if (Object.entries(errors).length > 0) {
        return ({ errors })
    }

    const passwordHash = await bcrypt.hash(password, 10)

    try {
        await db.insert(users).values({ username, name, passwordHash })
    } catch (error: any) {
        if (error.cause.constraint === "users_username_unique") {
            return ({ errors: { general: "This username is already taken. Please try a different one." } })
        }

        return ({ errors: { general: "There was an unexpected error with the db" } })
    }

    redirect("/login")
}

export const generateToken = async () => {
    const session = await auth()

    const username = session?.user?.email

    if (!username) redirect("/login")

    const newToken = crypto.randomUUID()

    await db
        .update(users)
        .set({ token: newToken })
        .where(eq(users.username, username))

    revalidatePath("/me")
}