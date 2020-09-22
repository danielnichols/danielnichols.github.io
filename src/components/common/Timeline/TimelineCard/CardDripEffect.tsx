import React from 'react';
import styled from 'styled-components';

const CardDripEffect = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  z-index: -1;
  filter: url(#timelineCardLinkDripFilter);
  overflow: hidden;
`;

const CardDripFilter = () => (
  <svg style={ { position: 'absolute', width: 0, height: 0 } }>
    <filter id="timelineCardLinkDripFilter">
      <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
      <feColorMatrix
        in="blur"
        values="1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 30 -15"
      />
    </filter>
  </svg>
);

export { CardDripFilter, CardDripEffect };
