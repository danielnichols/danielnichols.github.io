import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
`;

const Link = styled.a`
  color: white;
`;

const Header = styled.header`
  background-color: #b84747;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: white;
`;

const ComingSoon = () => (
  <Wrapper>
    <Header>
      <h1>
        Coming Soon
      </h1>
      <p>
        See progress on
        {' '}
        <Link href="https://github.com/danielnichols/danielnichols.github.io">Github</Link>
      </p>
    </Header>
  </Wrapper>
);

export default ComingSoon;
