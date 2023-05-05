import { makeStyles } from 'tss-react/mui';


const useStyles = makeStyles()(theme => ({
    root: {

    },
    title: {
        fontSize: '12rem',
        margin: 0,
    },
    navigationButtons: {
        padding: '10px 35px',
        margin: '25px',
        // borderColor: theme.palette.text.primary,
        color: theme.palette.text.primary,
        '&:hover': {
            background: theme.palette.text.primary, 
            color: theme.palette.background.default,
        },

    }, 
}))

export default useStyles;