// Liskov Substitution Principle (LSP)
// Objects of a superclass should be replaceable with objects of its subclasses

export const ButtonComponent = ({ label, onClick, ...othersProps }) => {
    return (
        <button onclick={onClick} {...othersProps}>{label}</button>
    )
}

export const SaveButton = ({ onClick }) => (
    <ButtonComponent label="Save" onClick={onClick} />
)

// LSPSaveButton could replace ButtonComponent ("superclass")
export const LSPSaveButton = ({ onClick, ...props }) => (
    <ButtonComponent label="Save" onClick={onClick} {...props} />
)