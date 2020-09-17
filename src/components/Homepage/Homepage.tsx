import React from 'react';
import styled from 'styled-components';

import { Timeline, TimelineCard } from '~components/common/Timeline';
import pages from '~src/pages';

const P = styled.p``;

const elements = Object.values(pages);

const Homepage = () => (
  <div>
    <Timeline>
      {elements.map((card, index) => (
        <TimelineCard
          key={ card.title }
          title={ card.title }
          content={ card.summary.description }
          image={ card.summary.image }
          link={ card.path }
        />
      ))}
    </Timeline>
    <P css="text-align: center;">
      Back to top button
    </P>
  </div>
);

export default Homepage;
