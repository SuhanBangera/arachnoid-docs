import type { FC } from "react";
import { useSpring, animated } from "@react-spring/web";

import Box from '@mui/material/Box';
import { FlickerProps } from "./flicker-types";



const Flicker: FC<FlickerProps> = ({className, text, step, coordinates, duration}) => {

    const { x, opacity } = useSpring({
        from: { x: 0, opacity: 1 },
        to: async next => {
            while (true) {
                await next({ x: 1, opacity: 1-step! });
                await next({ x: -1, opacity: 1-2*step! });
                await next({ x: 0, opacity: 1-3*step! });
            }
        },
        config: { duration: duration },
    });




    return (
        <Box>
            <animated.p
                className={className}
                style={{ transform: x.interpolate(x => `translate3d(${x*coordinates!.x}px,${coordinates!.y*x}px,${coordinates!.z*x})`), opacity }}
            >
                {text}
            </animated.p>
        </Box>
    );
}

export default Flicker;

Flicker.defaultProps = {
    step: 0.2,
    coordinates: {
        x: 1,
        y: 0.75,
        z: 0,
    },
    duration: 35,
}