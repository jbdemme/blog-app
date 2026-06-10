import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { getUserByUsername } from "../services/users"
import { useNotification } from "../component/NotificationContext"
import TokenButton from "../component/TokenButton"

const ProfilePage = async () => {
    const session = await auth()

    if (!session || !session.user || !session.user.email) {
        redirect("/login")
    }

    const user = await getUserByUsername(session.user.email)

    if (!user) {
        redirect("/login")
    }

    return (
        <div className="bg-mist-800 max-w-2xl mx-auto m-12 p-6 space-y-6">
            <h2 className="font-bold text-2xl">My Profile</h2>
            <p><strong>Name:</strong> {user?.name}</p>
            <p><strong>Username:</strong> {user?.username}</p>
            <hr />
            <h2 className="font-bold text-2xl">API Token</h2>
            {user.token ?
                <div className="bg-mist-700 p-4 space-y-2">
                    <p className="text-foreground/80">Current token:</p>
                    <div className="bg-mist-600 p-2">
                        {user.token}
                    </div>
                </div>
                :
                <div className="text-amber-400">
                    No API Token found. Please generate one.
                </div>
            }
            <TokenButton />
        </div>
    )
}

export default ProfilePage