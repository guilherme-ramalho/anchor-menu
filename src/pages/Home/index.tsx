import React from 'react';

import { Grid, BlockContainer } from './styles';

import SideMenu from '../../components/SideMenu';
import BlockComponent from '../../components/BlockComponent';

import SectionData from '../../data/sections.json';

const Home: React.FC = () => (
  <Grid>
    <SideMenu />
    <BlockContainer>
      {SectionData.map(({ title, color }) => (
        <BlockComponent key={title} title={title} color={color} />
      ))}
    </BlockContainer>
  </Grid>
);

export default Home;
