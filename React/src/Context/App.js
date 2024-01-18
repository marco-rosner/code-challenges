import { Button, Grid, Typography } from "@mui/material"
import { createContext, useContext, useState } from "react"

const countries = ["Brazil", "USA"]
const CountryContext = createContext({
    countries,
    country: countries[0],
    setCountry: () => { }
})

const FlagSection = () => {
    const { countries, country, setCountry } = useContext(CountryContext)
    const index = countries.indexOf(country)

    const changeCountry = () => {
        if (index === countries.length - 1) {
            setCountry(countries[0])
        } else {
            setCountry(countries[index + 1])
        }
    }

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: '100vh' }}
        >
            <Typography variant="h6">Flag: {country}</Typography>
            <Button onClick={changeCountry}>Change flag</Button>
        </Grid>
    )
}

export const App = () => {
    const [country, setCountry] = useState(countries[0])

    return (
        <CountryContext.Provider value={{ countries, country, setCountry }}>
            <FlagSection />
        </CountryContext.Provider>
    )
}