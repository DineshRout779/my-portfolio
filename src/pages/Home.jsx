import BlogList from '../components/BlogList';
import Experience from '../components/Experience';
import Intro from '../components/Intro';
import ProjectList from '../components/ProjectList';
import SpotifyStatus from '../components/SpotifyStatus';
import { data } from '../data';

const Home = () => {
  const { projects } = data;

  return (
    <div>
      <Intro />
      <Experience />
      <ProjectList projects={projects.slice(0, 3)} />
      <BlogList />
      <SpotifyStatus />
    </div>
  );
};
export default Home;
