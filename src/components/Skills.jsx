import { Container, SectionTitle } from '../styles/globalStyles';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import SkillCard from './SkillCard';

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

const Skills = ({ skills }) => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle>Skills</SectionTitle>
      </motion.div>
      <motion.section variants={container} initial='hidden' animate='visible'>
        <SkillsWrapper>
          {skills.map((skill) => (
            <motion.div key={skill.title} variants={item}>
              <SkillCard title={skill.title} icon={skill.icon} />
            </motion.div>
          ))}
        </SkillsWrapper>
      </motion.section>
    </Container>
  );
};
export default Skills;

const SkillsWrapper = styled.div`
  margin: 2em auto;
  width: 90%;
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(6, 1fr);
  justify-content: center;

  @media (max-width: 1024) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
