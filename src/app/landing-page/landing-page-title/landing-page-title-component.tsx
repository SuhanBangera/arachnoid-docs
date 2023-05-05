import type { FC } from 'react';

import Stack from '@mui/material/Stack';

import TypewriterEffect from 'lib/components/typewriter-effect';

import LandingPageTitle from './landing-page-title';
import LandingPageNavigationButtons from './landing-page-navigation-buttons';

const LandingPageTitleComponent: FC = () => {

    return (
        <Stack minHeight={'100vh'} justifyContent={'center'} alignItems={'center'}>
            <LandingPageTitle />
            <TypewriterEffect text={"A State Management Library for going Easy!"} variant={'h5'} />
            <LandingPageNavigationButtons />
        </Stack>
    );
}; 

export default LandingPageTitleComponent;