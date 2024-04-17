import styled from 'styled-components';
import ProjectList from '../components/ProjectList';
import { data } from '../data';

const Projects = () => {
  const { projects } = data;
  return (
    <ProjectsContainer>
      <ProjectList projects={projects} />
    </ProjectsContainer>
  );
};

export default Projects;

const ProjectsContainer = styled.div``;
