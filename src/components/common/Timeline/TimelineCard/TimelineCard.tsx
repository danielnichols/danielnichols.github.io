// TODO: Refactor and probably extract components
import React from 'react';
import {
  animated, useSpring,
} from 'react-spring';
import { useMeasure } from 'react-use';
import styled from 'styled-components';

import CardContent from './CardContent';
import CardImage from './CardImage';
import CardNavLink from './CardNavLink';
import CardTitle from './CardTitle';

// TODO: Proper card sizing

const CardContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CardBody = styled(animated.div)`
  height: 150px;
  width: 953px;
  overflow: hidden;
  text-align: center;
  border: 1px solid #ffaeae;
  border-radius: ${props => props.theme.radii.large};
  background-color: white;
`;

const CardLinkBody = styled(animated.div)`
  height: 50px;
  width: 50px;
  position: relative;
  z-index: -1;
  border: 1px solid #ffaeae;
  border-radius: ${props => props.theme.radii.infinite};
  background-color: white;
`;

const CardLinkEffect = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  z-index: -1;
  filter: url(#timelineCardLinkDripAnimation);
  overflow: hidden;
`;
const CardLinkEffectBody = styled(animated.div)`
  height: 150px;
  width: 953px;
  border: 1px solid #ffaeae;
  border-radius: ${props => props.theme.radii.large};
  background-color: #ffaeae;
`;
const CardLinkEffectLinkBody = styled(animated.div)`
  height: 50px;
  width: 50px;
  border: 1px solid #ffaeae;
  border-radius: ${props => props.theme.radii.infinite};
  background-color: #ffaeae;
`;

/**
 * Creates a card to be shown on the timeline view. Has multiple options including an image, navigation and vertical sections
 * @param props
 */
const TimelineCard = props => {
  const [titleRef, { height: titleHeight }] = useMeasure();

  const linkSpring = useSpring({
    delay: 4000,
    config: { mass: 1, tension: 140, friction: 120 },
    margin: -52,
    to: {
      margin: 20,
    },
    from: {
      margin: -52,
    },
  });

  return (
    <>
      {/* TODO: Move filter def someplace better */}
      <svg style={ { position: 'absolute', width: 0, height: 0 } }>
        <filter id="timelineCardLinkDripAnimation">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 30 -15"
            result="aab"
          />
          <feBlend in="SourceGraphic" in2="aab" />
        </filter>
      </svg>
      <CardLinkEffect>
        <CardLinkEffectBody
          style={ { marginLeft: linkSpring.margin.interpolate(val => val.valueOf() as number + 52) } }
        />
        <CardLinkEffectLinkBody style={ { marginLeft: linkSpring.margin } } />
      </CardLinkEffect>
      <CardContainer>
        <CardBody
          style={ { marginLeft: linkSpring.margin.interpolate(val => val.valueOf() as number + 52) } }
        >
          <CardTitle
            innerRef={ titleRef }
          >
            {props.title}
          </CardTitle>
          {props.image && <CardImage image={ props.image } />}
          <div style={ { height: `${titleHeight}px` } } />
          <CardContent>
            {props.content}

          </CardContent>
        </CardBody>
        <CardLinkBody
          style={ { marginLeft: linkSpring.margin } }
        >
          <CardNavLink>
            {props.link}

          </CardNavLink>
        </CardLinkBody>
        <div />
      </CardContainer>
    </>
  );
};

export default TimelineCard;
