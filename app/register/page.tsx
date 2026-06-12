"use client"

import { useActionState } from "react"
import { registerState, registerUser } from "../actions/users"

const RegisterPage = () => {
    const [state, formAction] = useActionState(registerUser, {} as registerState)

    return (
        <div>
            <h2>Register</h2>
            <form action={formAction}>
                <div>
                    <label>
                        Username
                        <input type="text" name="username" required />
                    </label>
                    {state.errors?.username && <p style={{ color: "red" }}>{state.errors.username}</p>}
                </div>
                <div>
                    <label>
                        Name
                        <input type="text" name="name" required />
                    </label>
                </div>
                <div>
                    <label>
                        Password
                        <input type="password" name="password" required />
                    </label>
                    {state.errors?.password && <p style={{ color: "red" }}>{state.errors.password}</p>}
                </div>
                <div>
                    <label>
                        Password (repeated)
                        <input type="password" name="password-confirm" required />
                    </label>
                    {state.errors?.passwordConfirm && <p style={{ color: "red" }}>{state.errors.passwordConfirm}</p>}
                </div>
                <button type="submit">Register</button>
                {state.errors?.general && <p style={{ color: "red" }}>{state.errors.general}</p>}
            </form>
        </div>
    )
}

export default RegisterPage