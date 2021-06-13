import React from 'react';

import { Container, Title } from './styles';

interface BlockComponentProps {
  title: string;
  color: string;
}

const BlockComponent: React.FC<BlockComponentProps> = ({ title, color }) => (
  <Container color={color}>
    <Title>
      {title}
    </Title>
  </Container>
)

export default BlockComponent;