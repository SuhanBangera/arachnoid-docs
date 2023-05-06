import type { FC } from 'react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TypewriterEffect from 'lib/components/typewriter-effect';
import CodePanel from 'lib/components/code-panel';
import LandingPageIntroductionInstallationChip from './landing-page-introduction-installation-chip-container';
import useLandingPageStore from 'app/landing-page/landing-page-store';
import { getCommand } from './landing-page-introduction-installation-lib';


const LandingPageIntroductionInstallation: FC = () => {
    const { getState, dispatch } = useLandingPageStore();

    const { packageManager } = getState();

    return (
        <Stack
            padding={4}
        >
            <TypewriterEffect
                variant={'h4'}
                padding={1}
                text='How to Install Arachnoid?'
            />

            <Typography
                variant={'body1'}
                padding={1}
            >
                Have a React project setup and the you can install Arachnoid using your favourite javascript package manager.
            </Typography>
            <Stack
                position={'relative'}
            >
                <LandingPageIntroductionInstallationChip />
                <CodePanel
                    code={getCommand(packageManager)}
                    position={'relative'}
                    language={'bash'}
                    margin={2}
                    minWidth={'50%'}
                    maxWidth={'270px'}
                />
            </Stack>
        </Stack>
    )
}

export default LandingPageIntroductionInstallation;