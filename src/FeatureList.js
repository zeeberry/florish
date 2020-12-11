import React from 'react';
import styled from 'styled-components';
import Feature from './Feature';
import featureImage1 from './images/feature1.png';
import featureImage2 from './images/feature2.png';
import featureImage3 from './images/feature3.png';

const Section = styled.section`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

function FeatureList() {
  const content = [
    {
      image: featureImage1,
      title: 'Personalized guidance',
      description: 'Understand what to expect   in the interview pr  ocess—and how to ask the right questions.'
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
