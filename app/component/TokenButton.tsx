"use client"

import { generateToken } from "../actions/users"

const TokenButton = () => {
    return (
        <form action={generateToken}>
            <button
                className="bg-cyan-500 rounded py-2 px-4 hover:bg-cyan-600 cursor-pointer"
                type="submit"
            >
                Generate new Token
            </button>
        </form>
    )
}

export default TokenButton