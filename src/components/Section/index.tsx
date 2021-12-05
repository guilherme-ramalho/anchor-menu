import React from 'react';
import { ISection } from '../../shared/interfaces/section.interface';

import { Container, Title } from './styles';

interface ISectionProps {
  data: ISection;
}

const Section: React.FC<ISectionProps> = ({ data }) => {
  const { id, title, color } = data;
  
  return (
    <Container id={id} color={color}>
      <Title>
        {title}
      </Title>
    </Container>
  );
}

export default Section;
