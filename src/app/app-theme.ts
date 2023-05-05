import createTheme from '@mui/material/styles/createTheme';

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                outlined: {
                    borderRadius: '4px',
                }, 
            }, 
        },
    }, 
    palette: {
        mode: 'dark', 
        background: {
            default: '#000',
        }, 
        secondary: {
            main: '#3c3c3c',
        }, 
        primary: {
            main: '#333',
        },
    },
})

export default theme;