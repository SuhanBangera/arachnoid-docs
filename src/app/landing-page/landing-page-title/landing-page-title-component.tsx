import type { FC } from 'react';
import { useRef } from 'react';

import Stack from '@mui/material/Stack';

import TypewriterEffect from 'lib/components/typewriter-effect'
import Flicker from 'lib/components/flicker';

import GloablTranslations from 'app/app-messages';
import LandingPageNavigationButtons from './landing-page-navigation-buttons';
import useStyles from './landing-page-styles';

const LandingPageTitleComponent: FC = () => {
    const { classes } = useStyles();
    const ref = useRef(null);

    return (
        <section id='title' ref={ref}>
            <Stack
                height={'100vh'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Flicker
                    className={classes.title}
                    text={GloablTranslations.arachnoid}
                />
                <TypewriterEffect text={"A State Management Library for going Easy!"} variant={'h5'} />
                <LandingPageNavigationButtons />
            </Stack>
        </section>
    );
};

export default LandingPageTitleComponent;