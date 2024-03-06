import { useEffect } from "react"

export const withLogger = (WrappedComponent) => {
    const WithLogger = (props) => {
        useEffect(() => {
            console.log(`${WrappedComponent.name} mounted.`)

            return () => console.log(`${WrappedComponent.name} unmounted.`)
        }, [])

        useEffect(() => console.log(`${WrappedComponent.name} updated.`))

        return <WrappedComponent {...props} />
    }

    WithLogger.displayName = `withLogger(${WrappedComponent.displayName || WrappedComponent.name})`

    return WithLogger
}