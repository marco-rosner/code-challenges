import { colors } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: colors.blue.A400
        },
        secondary: {
            main: colors.teal[800]
        },
        error: {
            main: colors.red.A400
        }
    }
})