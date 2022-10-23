import ProjectList from '../components/ProjectList';
import { data } from '../data';
import { Container } from '../styles/globalStyles';

const Projects = () => {
  const { projects } = data;
  return (
    <Container>
      <ProjectList projects={projects} />
    </Container>
  );
};
export default Projects;
