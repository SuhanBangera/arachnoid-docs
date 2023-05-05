import type { FC } from 'react';

import Stack from '@mui/material/Stack';
import LandingPageIntroduction from './landing-page-introduction';
import LandingPageTitle from './landing-page-title';

const LandingPage: FC = () => {

    return (
        <Stack>
            <LandingPageTitle/>
           <LandingPageIntroduction/>
        </Stack>
    );
}

export default LandingPage;