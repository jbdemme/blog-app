"use client"

import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import NavLink from "./NavLink"

export default function NavBar() {
    const { data: session } = useSession()

    return (
        <nav className="sticky top-0 bg-background/80 backdrop-blur-md flex items-baseline gap-8 p-6">
            <div className="tracking-tight text-2xl font-serif mr-12">
                <span className="font-bold text-amber-400">Blog</span> {" "}
                <span className="font-light">App</span>
            </div>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/blogs">Blogs</NavLink>
            <NavLink href="/users">Users</NavLink>
            <div className="ml-auto flex items-center gap-4">
                {session ? (
                    <>
                        <NavLink href="/blogs/new">Create New</NavLink>
                        <em className="text-gray-300">{session.user?.name} logged in</em>
                        <NavLink href="/me">me</NavLink>
                        <button
                            onClick={() => signOut()}
                            className="bg-gray-600 rounded px-3 py-1 text-sm hover:bg-gray-500"
                        >
                            logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link href="/login" className="bg-gray-600 rounded px-3 py-1 hover:bg-gray-500">login</Link>
                        <Link href="/register" className="bg-cyan-500 rounded px-3 py-1 hover:bg-cyan-600">register</Link>
                    </>
                )}
            </div>
        </nav>
    )
}