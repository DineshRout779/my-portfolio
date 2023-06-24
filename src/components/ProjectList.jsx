import { motion } from 'framer-motion';
import styled from 'styled-components';
import {
  Container,
  SectionTitle,
  TransparentButton,
} from '../styles/globalStyles';
import ProjectCard from './ProjectCard';
import { BsChevronDown } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';

const container = {
  hidden: { opacity: 0, y: 300 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
  transition: 0.5,
};

const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const ProjectList = ({ projects }) => {
  const { pathname } = useLocation();

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle>Projects</SectionTitle>
      </motion.div>
      <motion.section variants={container} initial='hidden' animate='visible'>
        <ProjectsWrapper>
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </ProjectsWrapper>

        {projects.length === 3 && pathname === '/' && (
          <TransparentButton to='/projects'>
            See more <BsChevronDown />
          </TransparentButton>
        )}
      </motion.section>
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
