import { createTheme } from '@mui/material/styles';

// assets
import theme1 from '/styles/scss/_theme6.module.scss';

// project imports
import themePalette from './palette';

const color = theme1;

const themeOption = {
    colors: color,
    heading: '',
    paper: '',
    backgroundDefault: '',
    background: '',
    darkTextPrimary: '',
    darkTextSecondary: '',
    textDark: '',
    menuSelected: '',
    menuSelectedBack: '',
    divider: '',
};

themeOption.paper = color.darkLevel2;
themeOption.backgroundDefault = color.darkPaper;
themeOption.background = color.darkBackground;
themeOption.darkTextPrimary = color.darkTextPrimary;
themeOption.darkTextSecondary = color.darkTextSecondary;
themeOption.textDark = color.darkTextPrimary;
themeOption.menuSelected = color.darkSecondaryMain;
themeOption.menuSelectedBack = color.darkSecondaryMain + 15;
themeOption.divider = color.darkTextPrimary;
themeOption.heading = color.darkTextTitle;

export const theme = createTheme({
    palette: themePalette(themeOption),
    shape: {
        borderRadius: 5
    },

    typography: {
        //  fontFamily: "'Heebo', sans-serif" ;
        fontFamily: "'Space Grotesk', sans-serif"
    }
});