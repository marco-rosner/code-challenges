// Interface Segregation Principle
// A object should only have access to methods/props that it use. 

export const RegularComponent = ({ item }) => (
    <>
        <p>{item.name}</p>
        <p>{item.birth}</p>
    </>
)

export const ISPComponent = ({ name, birth }) => (
    <>
        <p>{name}</p>
        <p>{birth}</p>
    </>
)