import Link from "next/link"
import React from "react"

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    return (
        <Link href={href} className="hover:text-gray-300">{children}</Link>
    )
}

export default NavLink