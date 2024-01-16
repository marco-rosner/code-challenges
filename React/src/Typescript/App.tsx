import React, { ReactNode, useState } from "react";

export const App = (): ReactNode => {
    const [toggle, setToggle] = useState<boolean>(false)

    const onClick = (): void => {
        setToggle(!toggle)
    }

    return (
        <button onClick={onClick}>
            {toggle ? "ON" : 'OFF'}
        </button>
    )
}