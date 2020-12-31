import React from 'react';
import styled from 'styled-components';
import theme from './Theme';
import Feature from './Feature';
import {BaseSection } from './Shared';
import featureImage1 from './images/feature1.png';
import featureImage2 from './images/feature2.png';
import featureImage3 from './images/feature3.png';

const Section = styled(BaseSection)`
  display: flex;
  justify-content: space-around;
  margin: 7rem 0 9rem;
  box-sizing: border-box;
  @media only screen and (max-width: ${theme.tablet.width}) {
    flex-direction: column;
    align-items: center;
    margin: 3rem 15px 5rem;
  }
`;

function FeatureList() {
  const content = [
    {
      image: featureImage1,
      title: 'Personalized guidance',
      description: 'Understand what to expect in the interview process—and how to ask the right questions.'
    },
    {
      image: featureImage2,
      title: 'One-on-one mentorship',
      description: 'Learn how to approach your interviews with confidence.'
    },
    {
      image: featureImage3,
      title: 'Structured reflection',
      description: 'Decide if the company, role, or offer is right for you.'
    }
  ];

  const featureList = content.map((item)=> 
    <Feature 
        key={item.title}
        image={item.image} 
        alt={item.alt}
        title={item.title}
        description={item.description} />
  );

  return (
    <Section>{featureList}</Section>
  );
}

export default FeatureList;
