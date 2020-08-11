import React from 'react';
import styled from 'styled-components';

import Timeline from '~components/common/Timeline';

const P = styled.p``;

const elements = [
  'Content box 1',
  'Content box 2',
  'Content box 3',
  'Content box 4',
  'Content box 5',
  'Content box 6',
  'Content box 7',
  'Content box 8',
];

const Homepage = () => (
  <div>
    <Timeline>{elements}</Timeline>
    <P css="text-align: center;">
      Back to top button
    </P>
  </div>
);

export default Homepage;
