import React from "react"

export const withErrorBoundary = (Component) => {
    return class WithErrorBoundary extends React.Component {
        constructor(props) {
            super(props)
            this.state = { hasError: false }
        }

        static getDerivedStateFromError(error) {
            // Update state to appear fallback UI in the next render
            return { hasError: true }
        }

        componentDidCatch(error, errorInfo) {
            console.log(`
                component=${Component.displayName || Component.name}
                error=${errorInfo.componentStack}
            `)
        }

        render() {
            if (this.state.hasError) {
                return (
                    <h2>Something went wrong</h2>
                )
            }

            return <Component {...this.props} />
        }
    }
}