import  type {FC} from 'react';
import { useTrail, animated } from '@react-spring/web';

import { TypewriterEffectProps } from './typewriter-effect-types';
import Typography from '@mui/material/Typography';

const TypewriterEffect:FC<TypewriterEffectProps> = ({ text, delay, loop, ...rest }) => {
  const config = { mass: 5, tension: 2000, friction: 200, loop };
  const items = text.split('');

  const trail = useTrail(items.length, {
    config,
    from: { opacity: 0, x: 20 },
    to: { opacity: 1, x: 0 },
    delay: delay,
  });

  return (
    <Typography {...rest}>
      {trail.map(({ x, opacity }, index) => (
        <animated.span
          key={index}
          style={{
            transform: x.interpolate(x => `translate3d(${x}px,0,0)`),
            opacity,
          }}
        >
            {items[index]}
        </animated.span>
      ))}
    </Typography>
  );
};

export default TypewriterEffect;

TypewriterEffect.defaultProps = {
    delay: 100,
    loop: false,
}