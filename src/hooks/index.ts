import { useEffect, useState } from 'react';
import { throttle } from 'lodash';
import { ISection } from '../shared/interfaces/section.interface';

export function useVisibleSection(sections: Array<ISection>) {
  const [visibleSection, setVisibleSection] = useState<string | undefined>()

  const isSectionVisible = (elementId: string) => {
    const section = document.getElementById(elementId);

    if (section) {
      const sectionPosition = section.getBoundingClientRect();

      const viewPort = {
        height:
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight,
        width:
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth,
      };

      return (
        sectionPosition.top >= 0 &&
        sectionPosition.left >= 0 &&
        sectionPosition.bottom <= viewPort.height &&
        sectionPosition.right <= viewPort.width
      );
    }

    return false;
  };

  const checkVisibility = () => {
    // const currentVisibleAnchors = [];  

    sections.forEach(({ id }) => {
      if (isSectionVisible(id)) {
        setVisibleSection(id); 
      }
    });
  };

  useEffect(() => {
    if (sections) {
      window.addEventListener('scroll', throttle(checkVisibility, 300));
    }

    checkVisibility();

    return () =>
      window.addEventListener('scroll', throttle(checkVisibility, 300));
  }, []);

  return visibleSection;
}
