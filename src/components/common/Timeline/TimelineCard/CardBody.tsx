import React from 'react';
import styled from 'styled-components';

const CardBodyWrapper = styled.div`
  overflow: hidden;
  text-align: center;
  background-color: white;
  border: 1px solid #ffaeae;
  border-radius: ${props => props.theme.radii.large};

  @media(min-width: ${props => props.theme.breakpoints[0]}) {
    width: 80vw;
    height: fit-content;
  }
  @media(min-width: ${props => props.theme.breakpoints[1]}) {
    height: 150px;
    width: 75vw;
    max-width: 950px;
  }
  @media(min-width: ${props => props.theme.breakpoints[2]}) {
    width: 950px;
  }
`;

const CardBodyCutout = styled.div`
  background-color: #ffaeae;
  border: 1px solid #ffaeae;
  border-radius: ${props => props.theme.radii.large};
  @media(min-width: ${props => props.theme.breakpoints[0]}) {
    width: 80vw;
    height: fit-content;
  }
  @media(min-width: ${props => props.theme.breakpoints[1]}) {
    height: 150px;
    width: 75vw;
    max-width: 950px;
  }
  @media(min-width: ${props => props.theme.breakpoints[2]}) {
    width: 950px;
  }
`;

const CardBody = props => (
  <CardBodyWrapper>
    {props.children}
  </CardBodyWrapper>
);

export default CardBody;
export { CardBodyCutout };
