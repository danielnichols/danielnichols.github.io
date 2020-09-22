import React from 'react';
// import Truncate from 'react-truncate';
import styled from 'styled-components';

import { Text } from '~components/common/Text';

const ContentContainer = styled.div`
  text-align: left;
  padding-left: 6px;
  display: flex;
`;

// FIXME: Truncate causes issues on window resize (both w and h)

const CardContent = props => (
  <ContentContainer>
    <Text preset="paragraph">
      {/* <Truncate
        lines={ 4 }
        ellipsis={ (
          <span>
            <br />
            Keep Reading...
          </span>
      ) }
      > */}
      {props.children}
      {/* </Truncate> */}
    </Text>
  </ContentContainer>
);

export default CardContent;
