import React from 'react';
import {
  animated, useSpring,
} from 'react-spring';
import { useMeasure, useMedia } from 'react-use';
import styled, { ThemeContext } from 'styled-components';

import CardBody, { CardBodyCutout } from './CardBody';
import CardContent from './CardContent';
import { CardDripEffect } from './CardDripEffect';
import CardImage from './CardImage';
import CardNavLink, { CardLinkCutout } from './CardNavLink';
import CardTitle from './CardTitle';

// TODO: Proper card sizing
// TODO: Responsive font sizing (not just cards tho)

const CardContainer = styled.div`
  align-items: center;
  @media(min-width: ${props => props.theme.breakpoints[1]}) {
    display: flex;
  }
`;

// FUTURE: In react-spring 9.0 replace animated.div with these
// const AnimatedCardBody = animated(CardBody);
// const AnimatedCardNavLink = animated(CardNavLink);
const AnimatedCardBodyCutout = animated(CardBodyCutout);
const AnimatedCardLinkCutout = animated(CardLinkCutout);

/**
 * Creates a card to be shown on the timeline view. Has multiple options including an image, navigation and vertical sections
 * @param props
 */
const TimelineCard = props => {
  const [titleRef, { height: titleHeight }] = useMeasure();
  const theme = React.useContext(ThemeContext) as any;
  const isMobile = useMedia(`(max-width: ${theme.breakpoints[1]})`);

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
      <CardDripEffect>
        <AnimatedCardBodyCutout
          style={ isMobile ? {} : {
            marginLeft: linkSpring.margin.interpolate(val => val.valueOf() as number + 52),
          } }
        />
        <AnimatedCardLinkCutout
          style={ { marginLeft: linkSpring.margin } }
        />
      </CardDripEffect>

      <CardContainer>
        <animated.div
          style={ isMobile ? {} : {
            marginLeft: linkSpring.margin.interpolate(val => val.valueOf() as number + 52),
          } }
        >
          <CardBody>
            <CardTitle
              innerRef={ titleRef }
            >
              {props.title}
            </CardTitle>
            {props.image && <CardImage image={ props.image } />}
            {!isMobile && <div style={ { height: `${titleHeight}px` } } />}
            <CardContent>
              {props.content}
            </CardContent>
          </CardBody>
        </animated.div>

        <animated.div
          style={ { marginLeft: linkSpring.margin } }
        >
          <CardNavLink>
            {props.link}
          </CardNavLink>
        </animated.div>
        <div />
      </CardContainer>
    </>
  );
};

export default TimelineCard;
