Mock
> Functions that simulates external dependencies. Its possible to know which methods were called and which arguments are used.

Stub
> Fake object that will be used in the test

Spy (spyOn)
> Fake function that will be spied to see the behavior

Fakes
> A service or fake data that will reproduce the behavior on a large data

Dummies
> A list of a fake arguments

Test Pyramid

> Manual tests    
> E2E tests  
> Integration Tests  
> Unit tests  

Regular test using jest
```
const addPayload = { id: 1, title: 'Test', done: false }

describe('reducer pure function', () => {
    test('Adding', () => {
        const result = reducer([], { type: 'added', payload: addPayload })

        expect(result).toEqual([addPayload])
    })
})
```

testing-library/react (TLR) / jest
```
describe('FormView', () => {
    test('check title element', () => {
        const { getByText } = render(<FormView />);

        const titleElement = getByText("form.todoApp");

        expect(titleElement).toBeInTheDocument();
    })
})
```

Mocking
```
jest.mock('react-i18next', () => ({
    useTranslation: () => {
        return {
            t: (str: string) => str
        }
    }
}))
```

```
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom')),
  Link: jest.fn()
}))
``` 

E2E test using Cypress
```
describe("Booking", () => {
    it("should create a booking", () => {
        const propertyId = 118729
        const bookingId = 123842

        cy.visit('http://localhost:5173')
        cy.get('#searchPlace').click().type('Maceió')
        cy.get('#searchPlace-option-0').click()
        cy.get('[data-cy="submit"]').should('be.disabled')
        cy.get('#form-start-date').type('02/20/2025')
        cy.get('#form-end-date').type('02/23/2025')
        cy.get('[data-cy="submit"]').should('not.be.disabled')
        cy.get('[data-cy="submit"]').click()

        cy.wait(3000)

        cy.get(`[data-cy="reserve-${propertyId}"]`).should("exist")
        cy.get(`[data-cy="reserve-${propertyId}"]`).click()

        cy.wait(5000)

        cy.get(`[data-cy="update-booking-${bookingId}"]`).should("exist")
        cy.get(`[data-cy="delete-booking-${bookingId}"]`).should("exist")
    })
})
```