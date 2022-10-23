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
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);

const ProjectList = ({ projects }) => {
  const { pathname } = useLocation();
  const wrapperRef = useRef();
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
        },
        {
          duration: 1,
          stagger: 0.3,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: 'top center+=100',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);
  return (
    <Container>
      <section ref={wrapperRef}>
        <SectionTitle>Projects</SectionTitle>
        <ProjectsWrapper>
          {projects.map((project) => (
            <div ref={addToRefs} key={project.id}>
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
  grid-gap: 1em;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
