import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
`;

const Image = styled.img`
  height: 200px;
  margin-bottom: 20px;
`;

const Title = styled.p`
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 14px;
  text-align: center;
`;

const Description = styled.p`
  margin-top: 0;
  line-height: 24px;
  text-align: center;
`;

function Feature({ image, alt,  title, description }) {
  return (
    <Card>
      <figure>
        <Image src={image} alt={alt}/>
      </figure>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
}

export default Feature;
