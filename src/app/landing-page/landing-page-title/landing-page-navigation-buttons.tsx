import type { FC } from "react";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';

import { goToUrl, goToSection } from "lib/utils";
import LandingPageTranslations from "../landing-page-translations";
import useStyles from "./landing-page-styles";

const LandingPageNavigationButtons: FC = () => {
    const { classes } = useStyles();

    return (
        <Stack
            justifyContent={'space-between'}
            flexDirection={'row'}
            maxWidth={'50%'}
        >
            <Button
                variant={'outlined'}
                className={classes.navigationButtons}
                startIcon={<GitHubIcon />}
                onClick={() => goToUrl('https://github.com/SuhanBangera/Arachnoid')}
            >
                {LandingPageTranslations.github}
            </Button>
            <Button
                variant={'outlined'}
                className={classes.navigationButtons}
                startIcon={<ArticleIcon />}
                onClick={() => goToSection('get-started')}
            >
                {LandingPageTranslations.getttingStarted}
            </Button>
        </Stack>
    )
}

export default LandingPageNavigationButtons;