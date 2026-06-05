import { getUserByUsername } from "@/app/services/users"
import { notFound } from "next/navigation"

const UserProfile = async ({ params }: { params: Promise<{ username: string }> }) => {
    const { username } = await params
    const user = await getUserByUsername(username)

    if (!user) {
        notFound()
    }

    return (
        <div>
            <h2>{user.name}</h2>
        </div>
    )
}

export default UserProfile