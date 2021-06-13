import React from 'react';

import { Grid, BlockContainer } from './styles';

import SideMenu from '../../components/SideMenu';
import BlockComponent from '../../components/BlockComponent';

import SectionData from '../../data/sections.json';
import { useVisibleSection } from '../../hooks';

const Home: React.FC = () => {
  const visibleSection = useVisibleSection(SectionData);

  return (
    <Grid>
      <SideMenu visibleSection={visibleSection} />
      <BlockContainer>
        {SectionData.map((data) => (
          <BlockComponent key={data.id} data={data} />
        ))}
      </BlockContainer>
    </Grid>
  );
}

export default Home;
