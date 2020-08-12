import React from 'react';
import styled from 'styled-components';

import { Timeline, TimelineCard } from '~components/common/Timeline';

const P = styled.p``;

const elements = [
  { title: 'Card 1 Title', content: 'Card 1 content', link: 'Card 1 link' },
  { title: 'Card 2 Title', content: 'Card 2 content', link: 'Card 2 link' },
  { title: 'Card 3 Title', content: 'Card 3 content', link: 'Card 3 link' },
  { title: 'Card 4 Title', content: 'Card 4 content', link: 'Card 4 link' },
  { title: 'Card 5 Title', content: 'Card 5 content', link: 'Card 5 link' },
  { title: 'Card 6 Title', content: 'Card 6 content', link: 'Card 6 link' },
  { title: 'Card 7 Title', content: 'Card 7 content', link: 'Card 7 link' },
  { title: 'Card 8 Title', content: 'Card 8 content', link: 'Card 8 link' },
];

const Homepage = () => (
  <div>
    <Timeline>
      {elements.map((card, index) => (
        <TimelineCard
          key={ card.title }
          title={ card.title }
          content={ card.content }
          link={ card.link }
        />
      ))}
    </Timeline>
    <P css="text-align: center;">
      Back to top button
    </P>
  </div>
);

export default Homepage;
