import {makeStyles} from 'tss-react/mui'


const useStyles = makeStyles()(theme=>({
    box: {
        flexGrow: 1,
    },
    root: {
        borderBottomColor: theme.palette.secondary.main,
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
    },
    paper: {
        backgroundColor: theme.palette.background.default,
    },
    text: {
        cursor:'pointer',
    }
}))

export default useStyles;