import React from 'react';
import styled from 'styled-components';
import theme from './Theme';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  @media only screen and (max-width: ${theme.desktop.minWidth}) {
    width: 100%;
    margin-right: 1em;
  }

  @media only screen and (max-width: ${theme.tablet.width}) {
    margin: 0 0 4em;
  }
`;

const Figure = styled.figure`
  margin: 0;
`;

const Image = styled.img`
  max-height: 200px;
  margin-bottom: 20px;
`;

const Title = styled.h4`
  font-weight: 500;
  font-size: ${theme.h4};
  margin-bottom: 14px;
  text-align: center;
`;

const Description = styled.p`
  margin-top: 0;
  font-size: ${theme.p};
  line-height: 1.5em;
  text-align: center;
`;

function Feature({ image, alt,  title, description }) {
  return (
    <Card>
      <Figure>
        <Image src={image} alt={alt}/>
      </Figure>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
}

export default Feature;
