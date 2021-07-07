// for heading

import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  max-width: 70rem;
  margin: 2rem auto;
  text-align: center;
`;

const H1 = styled.h1`
  margin-bottom: 0.5em;
  color: black;
  text-shadow: 3px 3px 3px gray;
`;
const P = styled.p`
color: gray;
`
const Span = styled.span`
color: green;
`


export const Heading = () => {

    return (
        <Header>
            <H1>Wall-<Span>Gallary</Span> </H1>
            <P>Source of freely usable images.</P>


        </Header>
    )
}