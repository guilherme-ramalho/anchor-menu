import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { Navigation, SectionItem, List } from './styles';

import SectionData from '../../data/sections.json';

interface ISideMenuProps {
  visibleSection: string | undefined;
}

const SideMenu: React.FC<ISideMenuProps> = ({ visibleSection }) => (
  <Navigation>
    <List>
      {SectionData.map(({ id, title }) => (
        <SectionItem key={id} active={visibleSection === id}>
          <AnchorLink href={`#${id}`}>{title}</AnchorLink>
        </SectionItem>
      ))}
    </List>
  </Navigation>
);

export default SideMenu;