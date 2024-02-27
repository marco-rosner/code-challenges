// Dependency Inversion Principle
// Uses interface, not concrete object

export const RegularComponent = () => {
    const onSubmit = () => {
        // fixed logic
    }

    return (
        <SaveButton onClick={onSubmit} />
    )
}

// The implementation for onClick could have different behaviors
export const DIPComponent = ({ onClick }) => {
    return (
        <SaveButton onClick={onClick} />
    )
}

export const SaveAPIButton = () => {
    const onClick = () => {
        // Save request for an API
    }

    return (<DIPComponent onClick={onClick} />)
}

export const SaveDBButton = () => {
    const onClick = () => {
        // Insert operation in the DB
    }

    return (<DIPComponent onClick={onClick} />)
}