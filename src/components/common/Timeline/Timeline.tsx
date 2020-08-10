import React from 'react';
import { useMeasure } from 'react-use';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid black; */
  /* margin-bottom: 200px; */
  /* margin-top: 200px; */

  &:before {
    content: '';
    background: black;
    width: 2px;
    height: ${props => props.lineHeight}px;
    position: absolute;
    /* left: 50%; */
    /* transform: translateX(-50%); */
    z-index: -1;
  }
`;

const Line = styled.div`
  background: black;
  width: 2px;
  height: 80%;
  position: absolute;
`;
const Cap = styled.span`
  border: 1px solid black;
  width: 10px;
`;
const CapStart = styled.div``;
const CapEnd = styled.div``;

const ContentContainer = styled.div`
  width: 300px;
  height: 80px;
  text-align: center;
  border: 1px solid lightgrey;
  border-radius: 8px;
  margin-bottom: 50px;
  background-color: white;

  &:first-of-type {
    margin-top: 20px;
  }
  &:last-of-type {
    margin-bottom: 20px;
  }
`;

const Timeline = () => {
  const [ref, { height: containerHeight }] = useMeasure();
  return (
    <React.Fragment>
      <Container ref={ ref } lineHeight={ containerHeight }>
        {/* <Line /> */}
        <Cap />
        {/* TODO: Receive content sections from props */}
        <ContentContainer>Content box 1</ContentContainer>
        <ContentContainer>Content box 2</ContentContainer>
        <ContentContainer>Content box 3</ContentContainer>
        <ContentContainer>Content box 4</ContentContainer>
        <ContentContainer>Content box 5</ContentContainer>
        <ContentContainer>Content box 6</ContentContainer>
        <ContentContainer>Content box 7</ContentContainer>
        <ContentContainer>Content box 8</ContentContainer>
        <Cap />
      </Container>
    </React.Fragment>
  );
};

export default Timeline;
