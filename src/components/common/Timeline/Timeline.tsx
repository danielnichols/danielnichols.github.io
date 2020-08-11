import React from 'react';
import {
  animated, useTrail, interpolate,
} from 'react-spring';
import { useMeasure } from 'react-use';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:before {
    content: '';
    background: black;
    width: 2px;
    height: ${props => props.lineHeight}px;
    position: absolute;
    z-index: -1;
  }
`;

const Cap = styled.span`
  border: 1px solid black;
  width: 10px;
`;

const ContentContainer = styled(animated.div)`
  width: 1000px;
  height: 150px;
  text-align: center;
  border: 1px solid lightgrey;
  border-radius: 8px;
  margin-bottom: 50px;
  background-color: white;

  &:first-of-type {
    margin-top: 20px;
  }
  &:last-of-type {
    margin-bottom: 20px;
  }
`;

const Timeline = props => {
  const [ref, { height: containerHeight }] = useMeasure();
  const [toggle, set] = React.useState(true);

  const containerTrail = useTrail(props.children.length, {
    config: {
      mass: 5,
      tension: 2000,
      friction: 200,
    },
    opacity: toggle ? 1 : 0, // In percent decimal
    offsetY: toggle ? 0 : 100, // In percent
    from: {
      opacity: 0,
      offsetY: 100,
    },
  });

  return (
    <React.Fragment>
      <Container ref={ ref } lineHeight={ containerHeight }>
        <Cap />
        {containerTrail.map(({ offsetY, opacity }, index) => (
          <div
            key={ props.children[index] }
            // css="overflow: hidden;"
          >
            <ContentContainer style={ { opacity, transform: interpolate([offsetY], y => `translateY(${y}%)`) } }>
              <p>
                {props.children[index]}
              </p>
            </ContentContainer>
          </div>
        ))}
        <Cap />
      </Container>
    </React.Fragment>
  );
};

export default Timeline;
