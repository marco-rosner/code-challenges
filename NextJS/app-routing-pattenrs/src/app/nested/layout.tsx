"use client"

import { usePathname } from "next/navigation"
import React from "react"
import { Tab } from "./tabs"

const Layout = ({ children }: { children: React.ReactElement }) => {
    const pathname = usePathname()

    return (
        <>
            <h1 className="flex justify-center m-10">Nested</h1>
            <Tab path={pathname} tab="/nested">
                {children}
            </Tab>
            <Tab path={pathname} tab="/nested/password">
                {children}
            </Tab>
        </>
    )
}

export default Layout