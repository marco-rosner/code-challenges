export const reducer = (state, { type, payload }) => {
    console.log(type)
    console.log(payload)

    switch (type) {
        case 'added':
            return [...state, payload]
        case 'changed':
            return state.map(task => {
                if(task.id === payload.id){
                    return payload
                } else {
                    return task
                }
            })
        case 'deleted':
            return state.filter((task) => task.id !== payload.id)
        default:
            return [...state]
    }
}