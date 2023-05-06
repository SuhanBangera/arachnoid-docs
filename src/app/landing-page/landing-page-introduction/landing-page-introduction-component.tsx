import type { FC } from "react";
import {useRef} from 'react';

import Grid from "@mui/material/Grid/Grid";

import LandingPageGettingStarted from "./landing-page-getting-started";
import LandingPageIntroductionInstallation from "./landing-page-introduction-installation";

const LandingPageIntroduction: FC = () => {
    const ref = useRef(null);

    return (
        <div ref={ref} id='get-started'>
            <Grid
                container
                height={'100vh'}
                paddingTop={8}
                direction={'row'}
            >
                <Grid item sm={6}>
                    <LandingPageGettingStarted />
                </Grid>
                <Grid
                    item
                    sm={6}
                >
                </Grid>
                <Grid item xs={0} sm={6}></Grid>
                <Grid item xs={0} sm={6}>
                    <LandingPageIntroductionInstallation />
                </Grid>
            </Grid>
        </div>
    )
}

export default LandingPageIntroduction;
