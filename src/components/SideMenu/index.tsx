import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { ISection } from '../../shared/interfaces/section.interface';

import { Navigation, SectionItem, List } from './styles';

interface ISideMenuProps {
  visibleSection: string | undefined;
  menuItems: Array<ISection>
}

const SideMenu: React.FC<ISideMenuProps> = ({ visibleSection, menuItems }) => (
  <Navigation>
    <List>
      {menuItems.map(({ id, title }) => (
        <SectionItem key={id} active={visibleSection === id}>
          <AnchorLink href={`#${id}`}>{title}</AnchorLink>
        </SectionItem>
      ))}
    </List>
  </Navigation>
);

export default SideMenu;