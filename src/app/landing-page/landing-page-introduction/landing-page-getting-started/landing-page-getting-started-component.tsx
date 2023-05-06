import type { FC } from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography"
import { goToUrl } from "lib/utils";
import TypewriterEffect from "lib/components/typewriter-effect";

import LandingPageTranslations from "app/landing-page/landing-page-translations";

const LandingPageGettingStarted: FC = () => {
    return (
        <Stack justifyContent={'center'} height={'100%'} width={'100%'} padding={4}>
            <TypewriterEffect
                variant={'h4'}
                padding={1}
                text={LandingPageTranslations.whatIsArachnoid}
            />
            <Typography
                variant={'body1'}
                padding={1}
            >
                Arachnoid is a small, fast and scalable solution for react based state-management library, using a simplified, easy to understand flux-like principles.
            </Typography>

            <Typography
                variant={'body1'}
                padding={1}
            >
                It helps you write applications that are fast and scalable throughout the project, where you can create decentralized and well-modularized states that guarantees consistent behavior throughout the scope of its usage, all the while maintaining its elegant simplicity. To learn more about Arachnoid checkout the <u onClick={()=>goToUrl('https://www.npmjs.com/package/arachnoid')} style={{cursor:'pointer'}}>documentation</u>.
            </Typography>
        </Stack>
    )
}

export default LandingPageGettingStarted;