import { getUsers } from "../services/users"

const Users = async () => {
    const users = await getUsers()
    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map((user) =>
                    <li key={user.id}>
                        {user.name}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Users