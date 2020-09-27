import React from 'react';
import Spinner from 'react-spinkit';
import styled from 'styled-components';

import { Text } from '~components/common/Text';

const PlaceholderWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #b84747;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const InlineSpinner = styled(Spinner)`
  display: inline-block;
  margin-left: 20px;
`;

const HomepagePlaceholder = () => (
  <PlaceholderWrapper>
    <TextWrapper>
      <Text preset="title" align="center">
        Loading
      </Text>
      <InlineSpinner name="ball-grid-pulse" fadeIn="none" color="#b84747" />
    </TextWrapper>
  </PlaceholderWrapper>
);

export default HomepagePlaceholder;
