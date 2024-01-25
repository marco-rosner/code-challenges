import { reducer } from "./reducer"

const addPayload = { id: 1, title: 'Test', done: false }
const changedPayload = { ...addPayload, title: 'changed' }

describe('reducer pure function', () => {
    test('Adding', () => {
        const result = reducer([], { type: 'added', payload: addPayload })

        expect(result).toEqual([addPayload])
    })

    test('Changing', () => {
        const result = reducer([addPayload], { type: 'changed', payload: changedPayload })

        expect(result).toEqual([changedPayload])
    })

    test('Deleting', () => {
        const result = reducer([addPayload], { type: 'deleted', payload: { id: 1 } })

        expect(result).toEqual([])
    })
})