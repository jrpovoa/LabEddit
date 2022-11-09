import { createTheme } from '@mui/material/styles';
import { primaryColor, neutralColor, secondaryColor } from './colors'

const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
        },
        text: {
            main: neutralColor
        },
        secondary:{
            main:secondaryColor
        }
    }
});

export default theme