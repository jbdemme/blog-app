import { db } from "@/db"
import { users } from "@/db/schema"
import { NextResponse } from "next/server"

export const POST = async () => {

    if (process.env.NODE_ENV === 'production') {
        return NextResponse.json(
            { error: "This endpoint is not available in production" },
            { status: 403 }
        )
    }

    const testUser = {
        "username": "testuser",
        "name": "Test User",
        "password": "testpass123"
    }

    await db.insert(users).values(testUser)
}