import React from 'react';
import { animated, useSpring } from 'react-spring';
import { useMeasure, useWindowScroll } from 'react-use';
import styled from 'styled-components';

const Background = styled(animated.div)`
  background: url(${({ backgroundURL }) => backgroundURL});
  background-color: ${({ theme }) => theme.colors.reds[1]};
  background-blend-mode: luminosity;
  position: fixed;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height + 600}px;
  background-position-x: ${({ center }) => (center ? 'center' : '')};
`;

const ContentContainer = styled.div`
transform: translateZ(1px);
`;

interface ParallaxBackgroundProps {
  backgroundURL: string;
  backgroundOffsetX?: number;
  /** Aligns the background to the center of the component. Often used with x offset to center background content as well */
  centerBackground?: boolean;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = props => {
  const [ref, { height: contentHeight, width: contentWidth }] = useMeasure();
  const { y: scrollY } = useWindowScroll();
  const [{ scrollTop }, setSpring] = useSpring(() => ({
    scrollTop: -600,
    config: { mass: 20, tension: 4000, friction: 500 },
  }));

  React.useEffect(() => {
    setSpring({ scrollTop: scrollY / -2 - 600 });
  }, [scrollY, setSpring]);

  return (
    <>
      <Background
        backgroundURL={ props.backgroundURL }
        height={ contentHeight }
        width={ contentWidth + (props.backgroundOffsetX ?? 0) }
        center={ props.centerBackground }
        style={ { transform: scrollTop.interpolate(y => `translateY(${y}px)`) } }
      />
      <ContentContainer ref={ ref }>
        {props.children}
      </ContentContainer>
    </>
  );
};

export default ParallaxBackground;
