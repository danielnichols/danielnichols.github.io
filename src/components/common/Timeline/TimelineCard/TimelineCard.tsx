import { link } from 'fs';
import { url } from 'inspector';

import React from 'react';
import {
  animated, useChain, useSpring,
} from 'react-spring';
import { useMeasure } from 'react-use';
import styled from 'styled-components';

import CardContent from './CardContent';
import CardImage from './CardImage';
import CardNavLink from './CardNavLink';
import CardTitle from './CardTitle';

/*
  TODO:
  - Card needs to render plain when just given children
  - When given an image it needs to show it on the right side by default
    - Needs to have options as to where the image is displayed, including left, right and maybe above
    - Image should always show above on mobile width
  - If given, navigation link needs to animate in, default on the right, but possibly on left instead
    - Animation should be a "cutting" animation using a thin dotted line, and then physically separated from the rest of the card
  - May need special handling of navigation link due to transition animation
  - Text section needs a view more option for overflow text, instead of a scrollbar
  - Needs an option for a title, possibly overlapping the image
  - May want to split into multiple components in subfolder

  - Card Container
    - Card Body
      - Title
      - Content (LHD/vert Image)
      - Image (LHD/vert Content)
    - Nav Link
*/

// TODO: Proper card sizing

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  filter: url(#timelineCardLinkDripAnimation);
`;

const CardBody = styled(animated.div)`
  height: 150px;
  width: 953px;
  overflow: hidden;
  text-align: center;
  border: 1px solid #ffaeae;
  border-radius: 8px;
  background-color: white;
`;

const CardLinkBody = styled(animated.div)`
  height: 50px;
  width: 50px;
  position: relative;
  z-index: -1;
  border: 1px solid #ffaeae;
  border-radius: 50px;
  background-color: white;
`;

/**
 * Creates a card to be shown on the timeline view. Has multiple options including an image, navigation and vertical sections
 * @param props
 */
const TimelineCard = props => {
  const filterRef = React.useRef();
  const [titleRef, { height: titleHeight }] = useMeasure();
  // HACK: react-spring typings don't seem to like this, even though it's in the docs... Remove as soon as the typings are fixed
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const linkSpring = useSpring({
    // delay: 6000,
    delay: 4000,
    // config: { mass: 1, tension: 170, friction: 26 }, // default
    // config: { mass: 1, tension: 280, friction: 60 }, // slow
    config: { mass: 1, tension: 280, friction: 120 }, // molasses
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
      <CardContainer filterRef={ filterRef }>
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
        {/* <div style={ { clear: 'both' } } /> */}
        <div />
      </CardContainer>
    </>
  );
};

export default TimelineCard;
