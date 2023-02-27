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
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { useRef } from 'react';

const endpoint = 'https://api.hashnode.com/';
const ARTICLE_QUERY = `
  {
    user(username: "coderdinesh") {
      publication {
        posts(page: 0) {
          title
          brief
          slug
          dateAdded
          _id
          coverImage
        }
      }
    }
  }

`;

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
    }).then((response) => response.data.data);
  });
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
    gsap.fromTo(
      wrapperRef.current,
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    );
  }, []);

  if (isLoading)
    return (
      <FullHeightContainer>
        <Spinner />
      </FullHeightContainer>
    );

  if (error) return <p>{error.message}</p>;

  return (
    <Container>
      <Section ref={wrapperRef}>
        <SectionTitle>Blogs</SectionTitle>
        <BlogsWrapper>
          {blogsData.user.publication.posts.map((blog) => (
            <div ref={addToRefs} key={blog._id}>
              <BlogCard blog={blog} key={blog._id} />
            </div>
          ))}
        </BlogsWrapper>
        {blogsData?.user.publication.posts.length === 3 && pathname === '/' && (
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
