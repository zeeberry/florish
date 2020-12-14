import React from 'react';
import styled from 'styled-components';
import theme from './Theme';
import Feature from './Feature';
import { BaseSection } from './Shared';
import featureImage1 from './images/feature1.png';
import featureImage2 from './images/feature2.png';
import featureImage3 from './images/feature3.png';

const Section = styled(BaseSection)`
  display: flex;
  justify-content: space-between;
  margin: 7rem 0 9rem;
  @media only screen and (max-width: ${theme.tablet.minWidth}) {
    flex-direction: column;
    align-items: center;
    margin: 5rem 15px;
  }
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
