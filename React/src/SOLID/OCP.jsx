// OCP - Open-Close Principle
// Open for extension, Close for modification

export const RegularComponent = () => {
    const [isEditing, setIsEditing] = useState(false)

    const onSubmit = () => {
        // some logic
    }

    return (
        <form onSubmit={onSubmit}>
            <p>Name</p>
            {isEditing ? (
                <button onclick={() => setIsEditing(!isEditing)}>Save</button>
            ) : (
                <button onclick={() => setIsEditing(!isEditing)}>Edit</button>
            )}
        </form>
    )
}

// Using children prop to extract button components that could change
export const App = () => {
    const [isEditing, setIsEditing] = useState(false)

    const onSubmit = () => {
        // some logic
    }

    return (
        <OCPComponent onSubmit={onSubmit} >
            {isEditing ? (
                <SaveButton isEditing={isEditing} setIsEditing={setIsEditing} />
            ) : (
                <EditButton isEditing={isEditing} setIsEditing={setIsEditing} />
            )}
        </OCPComponent>
    )
}

// Following Single Responsible Principle (SRP) too.
export const OCPComponent = ({ onSubmit, children }) => {
    return (
        <form onSubmit={onSubmit}>
            <p>Name</p>
            {children}
        </form>
    )
}