import { CountryCapitalGame } from "./Board";

const countries = {
    "Germany": "Berlin",
    "Brazil": "Brasilia",
    "Argentina": "Buenos Aires",
    "Chile": "Santiago"
}

export const App = () => <CountryCapitalGame data={countries} />