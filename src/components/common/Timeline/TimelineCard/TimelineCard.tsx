import { link } from 'fs';

import React from 'react';
import {
  animated, useChain, useSpring,
} from 'react-spring';
import styled from 'styled-components';

import CardContent from './CardContent';
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

const CardContainer = styled.div``;
const CardBody = styled.div`
  height: 150px;
  width: 953px;
  float: left;
  text-align: center;
  border: 1px solid lightgrey;
  border-right: 1px solid transparent;
  border-radius: 8px 0px 0px 8px;
  background-color: white;
`;
const CardLinkBody = styled.div`
  height: 150px;
  width: 45px;
  float: left;
  border: 1px solid lightgrey;
  border-left: 1px solid transparent;
  border-radius: 0px 8px 8px 0px;
  transform: translateX(-1px);
`;

const Perforation = styled(animated.div)`
  height: 150px;
  float: left;
  border-left: 1px dashed lightgrey;
  &:nth-child(odd) {
    transform: translateX(-1px);
  }
`;

/**
 * Creates a card to be shown on the timeline view. Has multiple options including an image, navigation and vertical sections
 * @param props
 */
const TimelineCard = props => {
  // HACK: react-spring typings don't seem to like this, even though it's in the docs... Remove as soon as the typings are fixed
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const linkSpring = useSpring({
    delay: 6000,
    marginLeft: '0px',
    maxHeight: '0px',
    to: [
      {
        marginLeft: '0px',
        maxHeight: '300px',
      }, {
        marginLeft: '20px',
        maxHeight: '300px',
      },
    ],
    from: {
      marginLeft: '0px',
      maxHeight: '0px',
    },
  });

  return (
    <CardContainer>
      <CardBody>
        <CardTitle>{props.title}</CardTitle>
        <CardContent>{props.content}</CardContent>
        Image
      </CardBody>
      <Perforation
        style={ { maxHeight: linkSpring.maxHeight } }
      />
      <Perforation
        style={ {
          marginLeft: linkSpring.marginLeft,
          maxHeight: linkSpring.maxHeight,
        } }
      />
      <CardLinkBody>
        <CardNavLink>{props.link}</CardNavLink>
      </CardLinkBody>
      <div style={ { clear: 'both' } } />
      <div />
    </CardContainer>
  );
};

export default TimelineCard;
