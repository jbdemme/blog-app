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
                    {state.errors?.username &&
                        <p
                            className="text-red-500"
                            data-testid="username-error"
                        >
                            {state.errors.username}
                        </p>
                    }
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
                    {state.errors?.password &&
                        <p
                            className="test-red-500"
                            data-testid="password-error"
                        >
                            {state.errors.password}
                        </p>
                    }
                </div>
                <div>
                    <label>
                        Confirm Password
                        <input type="password" name="password-confirm" required />
                    </label>
                    {state.errors?.passwordConfirm &&
                        <p
                            className="test-red-500"
                            data-testid="passwordConfirm-error"
                        >
                            {state.errors.passwordConfirm}
                        </p>
                    }
                </div>
                <button type="submit" data-testid="register-button">Register</button>
                {state.errors?.general &&
                    <p
                        className="text-red-500"
                        data-testid="register-error"
                    >
                        {state.errors.general}
                    </p>
                }
            </form>
        </div>
    )
}

export default RegisterPage