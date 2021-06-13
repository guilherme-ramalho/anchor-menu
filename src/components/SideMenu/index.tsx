import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { Navigation, SectionItem, List } from './styles';

import SectionData from '../../data/sections.json';

const SideMenu: React.FC = () => (
  <Navigation>
    <List>
      {SectionData.map(({ title }) => (
        <SectionItem key={title}>
          <AnchorLink href={`#${title}`}>{title}</AnchorLink>
        </SectionItem>
      ))}
    </List>
  </Navigation>
);

export default SideMenu;