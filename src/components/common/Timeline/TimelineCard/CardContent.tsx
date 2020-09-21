import React from 'react';
import Truncate from 'react-truncate';
import styled from 'styled-components';

const ContentContainer = styled.div`
  text-align: left;
  padding-left: 6px;
  display: flex;
`;

const CardContent = props => (
  <ContentContainer>
    <Truncate
      lines={ 4 }
      ellipsis={ (
        <span>
          <br />
          Keep Reading...
        </span>
      ) }
    >
      {props.children}
    </Truncate>
  </ContentContainer>
);

export default CardContent;
