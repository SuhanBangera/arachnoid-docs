import type { FC } from "react";
import { useSpring, animated } from "@react-spring/web";

import Box from '@mui/material/Box';

import GloablTranslations from "app/app-messages";
import useStyles from "./landing-page-styles";


const LandingPageTitle: FC = () => {

    const { classes } = useStyles();
    const { x, opacity } = useSpring({
        from: { x: 0, opacity: 1 },
        to: async next => {
            while (true) {
                await next({ x: 1, opacity: 0.80 });
                await next({ x: -1, opacity: 0.60 });
                await next({ x: 0, opacity: 0.40 });
            }
        },
        config: { duration: 35 },
    });




    return (
        <Box>
            <animated.p
                className={classes.title}
                style={{ transform: x.interpolate(x => `translate3d(${x}px,${0.75*x}px,0)`), opacity }}
            >
                {GloablTranslations.arachnoid}
            </animated.p>
        </Box>
    );
}

export default LandingPageTitle;