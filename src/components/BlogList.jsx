import { motion } from 'framer-motion';
import {
  Container,
  SectionTitle,
  TransparentButton,
} from '../styles/globalStyles';
import axios from 'axios';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import BlogCard from './BlogCard';
import Spinner from './Spinner';
import { BsChevronDown } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';

// const endpoint = 'https://api.hashnode.com/';
const endpoint = 'https://gql.hashnode.com';

const ARTICLE_QUERY = `
  query Publication {
    publication(host: "coderdinesh.hashnode.dev") {
      posts(first: 20) {
        edges {
          node {
            id
            title
            brief
            slug
            url
            publishedAt
            coverImage {
              url
            } 
          }
        }
      }
    }
  }
`;

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

const BlogList = () => {
  const {
    data: blogsData,
    isLoading,
    error,
  } = useQuery([], async () => {
    return await axios({
      url: endpoint,
      method: 'POST',
      data: {
        query: ARTICLE_QUERY,
      },
    }).then((response) => {
      console.log(response.data.data.publication);
      return response.data.data.publication;
    });
  });
  const { pathname } = useLocation();

  if (isLoading)
    return (
      <FullHeightContainer>
        <Spinner />
      </FullHeightContainer>
    );

  if (error) return <p>{error.message}</p>;

  return (
    <Container>
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle>Blogs</SectionTitle>
        </motion.div>
        <motion.section variants={container} initial='hidden' animate='visible'>
          <BlogsWrapper>
            {pathname === '/'
              ? blogsData?.posts.edges.slice(0, 3).map(({ node }) => (
                  <motion.div key={node.id} variants={item}>
                    <BlogCard blog={node} key={node.id} />
                  </motion.div>
                ))
              : blogsData?.posts.edges.map(({ node }) => (
                  <motion.div key={node.id} variants={item}>
                    <BlogCard blog={node} key={node.id} />
                  </motion.div>
                ))}
          </BlogsWrapper>
        </motion.section>

        {blogsData?.posts?.edges.length > 3 && pathname === '/' && (
          <TransparentButton to='/blogs'>
            See more <BsChevronDown />
          </TransparentButton>
        )}
      </Section>
    </Container>
  );
};
export default BlogList;

const Section = styled.section`
  margin-bottom: 4em;
`;

const BlogsWrapper = styled.ul`
  list-style-type: none;
  margin: 2em 0;
`;

const FullHeightContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
