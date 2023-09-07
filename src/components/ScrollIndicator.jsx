import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

const ScrollIndicator = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const scrollProgressChecker = () => {
      let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      let scrolled = (winScroll / height) * 100;
      setWidth(scrolled);
    };

    window.addEventListener('scroll', scrollProgressChecker);

    return () => window.removeEventListener('scroll', scrollProgressChecker);
  }, []);

  return (
    <ProgressContainer>
      <ProgressBar style={{ width: `${width}%` }} />
    </ProgressContainer>
  );
};

const ProgressContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 8px;
  background: rgba(204, 204, 204, 0);
`;

const ProgressBar = styled.div`
  height: 4px;
  background: var(--accent-blue);
  border-radius: 2px;
`;

export default ScrollIndicator;
