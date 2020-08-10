import React from 'react';
import styled from 'styled-components';

import Timeline from '~components/common/Timeline';

const P = styled.p``;

const Homepage = () => (
  <div>
    <Timeline />
    <P css="text-align: center;">
      Back to top button
    </P>
  </div>
);

export default Homepage;
