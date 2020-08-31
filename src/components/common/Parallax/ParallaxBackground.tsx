import React from 'react';
import { animated, useSpring } from 'react-spring';
import { useMeasure, useWindowScroll } from 'react-use';
import styled from 'styled-components';

const Background = styled(animated.div)`
  background: url(${({ backgroundURL }) => backgroundURL});
  position: fixed;
  width: 100vw;
  height: ${({ height }) => height + 600}px;
`;

interface ParallaxBackgroundProps {
  backgroundURL: string;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = props => {
  const [ref, { height: contentHeight }] = useMeasure();
  const { y: scrollY } = useWindowScroll();
  const [{ scrollTop }, setSpring] = useSpring(() => ({
    scrollTop: -600,
    config: { mass: 20, tension: 4000, friction: 500 },
  }));

  React.useEffect(() => {
    setSpring({ scrollTop: scrollY / -2 - 600 });
  }, [scrollY, setSpring]);

  return (
    <div>
      <Background
        backgroundURL={ props.backgroundURL }
        height={ contentHeight }
        style={ { transform: scrollTop.interpolate(y => `translateY(${y}px)`) } }
      />
      <div ref={ ref }>
        {props.children}
      </div>
    </div>
  );
};

export default ParallaxBackground;
