import React from 'react';
import styled from 'styled-components';

const CardBodyWrapper = styled.div`
  height: 150px;
  width: 953px;
  overflow: hidden;
  text-align: center;
  background-color: white;
  border: 1px solid #ffaeae;
  border-radius: ${props => props.theme.radii.large};
`;

const CardBodyCutout = styled.div`
  height: 150px;
  width: 953px;
  background-color: #ffaeae;
  border: 1px solid #ffaeae;
  border-radius: ${props => props.theme.radii.large};
`;

const CardBody = props => (
  <CardBodyWrapper>
    {props.children}
  </CardBodyWrapper>
);

export default CardBody;
export { CardBodyCutout };
