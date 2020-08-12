import React from 'react';

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
/**
 * Creates a card to be shown on the timeline view. Has multiple options including an image, navigation and vertical sections
 * @param props
 */
const TimelineCard = props => (
  <div>
    <div>
      <CardTitle>{props.title}</CardTitle>
      <CardContent>{props.content}</CardContent>
    </div>
    <CardNavLink>{props.link}</CardNavLink>
  </div>
);

export default TimelineCard;
