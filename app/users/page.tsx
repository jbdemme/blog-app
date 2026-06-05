const users = [
    {
        id: 1,
        username: "jsmith",
        name: "Jonathan Smith"
    },
    {
        id: 2,
        username: "gegerion",
        name: "George Tucker"
    }
]

const Users = () => {
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