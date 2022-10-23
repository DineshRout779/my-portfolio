import ProjectList from '../components/ProjectList';
import { data } from '../data';

const Projects = () => {
  const { projects } = data;
  return <ProjectList projects={projects} />;
};
export default Projects;
