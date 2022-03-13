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
    components: {
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: '32px 24px',
                    '&:last-child': {
                        paddingBottom: '32px'
                    }
                }
            }
        },
        MuiCardHeader: {
            defaultProps: {
                titleTypographyProps: {
                    variant: 'h6'
                },
                subheaderTypographyProps: {
                    variant: 'body2'
                }
            },
            styleOverrides: {
                root: {
                    padding: '32px 24px'
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    borderColor: '#E6E8F0'
                }
            }
        },
    },
    palette: themePalette(themeOption),
    shape: {
        borderRadius: 5
    },
    shadows: [
        'none',
        '0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)',
        '0px 1px 2px rgba(100, 116, 139, 0.12)',
        '0px 1px 4px rgba(100, 116, 139, 0.12)',
        '0px 1px 5px rgba(100, 116, 139, 0.12)',
        '0px 1px 6px rgba(100, 116, 139, 0.12)',
        '0px 2px 6px rgba(100, 116, 139, 0.12)',
        '0px 3px 6px rgba(100, 116, 139, 0.12)',
        '0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)',
        '0px 5px 12px rgba(100, 116, 139, 0.12)',
        '0px 5px 14px rgba(100, 116, 139, 0.12)',
        '0px 5px 15px rgba(100, 116, 139, 0.12)',
        '0px 6px 15px rgba(100, 116, 139, 0.12)',
        '0px 7px 15px rgba(100, 116, 139, 0.12)',
        '0px 8px 15px rgba(100, 116, 139, 0.12)',
        '0px 9px 15px rgba(100, 116, 139, 0.12)',
        '0px 10px 15px rgba(100, 116, 139, 0.12)',
        '0px 12px 22px -8px rgba(100, 116, 139, 0.25)',
        '0px 13px 22px -8px rgba(100, 116, 139, 0.25)',
        '0px 14px 24px -8px rgba(100, 116, 139, 0.25)',
        '0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)',
        '0px 25px 50px rgba(100, 116, 139, 0.25)',
        '0px 25px 50px rgba(100, 116, 139, 0.25)',
        '0px 25px 50px rgba(100, 116, 139, 0.25)',
        '0px 25px 50px rgba(100, 116, 139, 0.25)'
    ],
    typography: {
        fontFamily: "'Heebo', sans-serif"
    }
});