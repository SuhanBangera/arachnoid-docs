import type { FC } from "react";

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

import { goToSection } from "lib/utils";
import GloablTranslations from "app/app-messages";

import useStyles from "./app-header-styles";

const AppHeader: FC = () => {
    const { classes } = useStyles();

    return (
        <Box className={classes.box}>
            <AppBar className={classes.root}>
                <Toolbar className={classes.paper}>
                    <Typography
                        variant={'h4'}
                        onClick={()=>goToSection('title')}
                        className={classes.text}
                    >
                        {GloablTranslations.arachnoid}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
};


export default AppHeader;