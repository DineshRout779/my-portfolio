import styled from 'styled-components';
import BlogList from '../components/BlogList';

const Blogs = () => {
  return (
    <Section>
      <BlogList />
    </Section>
  );
};
export default Blogs;

const Section = styled.section`
  min-height: 90vh;
`;
