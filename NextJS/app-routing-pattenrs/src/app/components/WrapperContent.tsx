import React from "react"

export const WrapperContent = ({ children }: { children: React.ReactElement }) => {
    return (
        <div className="flex flex-col items-center justify-center vertical min-h-screen">
            {children}
        </div>
    )
}