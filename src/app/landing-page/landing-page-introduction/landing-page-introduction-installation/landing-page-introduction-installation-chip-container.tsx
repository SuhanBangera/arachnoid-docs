import type { FC } from 'react';

import Typography from '@mui/material/Typography'
import useLandingPageStore from 'app/landing-page/landing-page-store';

const LandingPageIntroductionInstallationChip: FC = () => {
    const { getState, dispatch } = useLandingPageStore();
    const { packageManager } = getState();
    const handleClick = () => dispatch('togglePackageManager', { packageManager: packageManager === 'npm' ? 'yarn' : 'npm' })

    return (
        <Typography
            variant={'caption'}
            onClick={handleClick}
            position={'absolute'}
            right={40}
            top={0}
            minWidth={'50%'}
            maxWidth={'270px'}
            color={'darkgray'}
            sx={{cursor:'pointer'}}
        >
            {packageManager === 'npm' ? 'Try yarn' : 'Try npm'}
        </Typography>
    )
}

export default LandingPageIntroductionInstallationChip;

