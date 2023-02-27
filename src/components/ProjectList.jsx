import { useRef } from 'react';
import styled from 'styled-components';
import {
  Container,
  SectionTitle,
  TransparentButton,
} from '../styles/globalStyles';
import ProjectCard from './ProjectCard';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';

const ProjectList = ({ projects }) => {
  const { pathname } = useLocation();
  const wrapperRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      wrapperRef.current,
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    );
  }, []);

  return (
    <Container>
      <section ref={wrapperRef}>
        <SectionTitle>Projects</SectionTitle>
        <ProjectsWrapper>
          {projects.map((project) => (
            <div key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </ProjectsWrapper>
        {projects.length === 3 && pathname === '/' && (
          <TransparentButton to='/projects'>
            See more <BsChevronDown />
          </TransparentButton>
        )}
      </section>
    </Container>
  );
};

export default ProjectList;

const ProjectsWrapper = styled.div`
  margin: 2em 0;
  display: grid;
  grid-gap: 1.5em;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
