import { getUserWithBlogs } from "@/app/services/users"
import { db } from "@/db"
import { users } from "@/db/schema"
import { eq } from "drizzle-orm"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: NextRequest) => {
    const authHeader = req.headers.get("authorization")

    if (!authHeader?.startsWith("Bearer ")) {
        return NextResponse.json({ error: "Missing or invalid token" }, { status: 401 })
    }

    const token = authHeader.slice(7)

    const user = await db.query.users.findFirst({
        where: eq(users.token, token)
    })

    if (!user) return NextResponse.json({ error: "Invalid token" }, { status: 401 })

    const userContent = await getUserWithBlogs(user.username)

    return NextResponse.json(userContent, { status: 200 })
}