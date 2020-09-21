import React from 'react';
import styled from 'styled-components';

import { ParallaxBackground } from '~components/common/Parallax';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Background from '~assets/backgrounds/diagonal_striped_brick.png?size=2000';

const ContentContainer = styled.div`
  padding: ${({ theme }) => theme.space[3]};
  min-height: calc(100vh - ${({ theme }) => theme.space[3]} * 2);
`;

const AppFrame = props => (
  <ParallaxBackground
    backgroundURL={ Background.src }
    centerBackground
    backgroundOffsetX={ 302 }
  >
    <ContentContainer>
      {props.children}
    </ContentContainer>
  </ParallaxBackground>
);

export { AppFrame };
