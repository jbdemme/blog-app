import { redirect } from "next/navigation"
import TokenButton from "../component/TokenButton"
import ReadingList from "./ReadingList"
import { getCurrentUser } from "../services/session"

const ProfilePage = async () => {
    const user = await getCurrentUser()

    if (!user) redirect("/login")



    return (
        <div className="bg-mist-800 max-w-2xl mx-auto m-12 p-6 space-y-6">
            <h2 className="font-bold text-2xl">My Profile</h2>
            <p data-testid="user-name">
                <strong>Name:</strong> {user?.name}
            </p>
            <p data-testid="user-username">
                <strong>Username:</strong> {user?.username}
            </p>
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
            <hr />
            <ReadingList />
        </div>
    )
}

export default ProfilePage