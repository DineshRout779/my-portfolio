import styled from 'styled-components';

const BlogCard = ({ blog }) => {
  console.log(blog);
  return (
    <BlogItem href={blog.url} target='_blank'>
      <img src={blog?.coverImage?.url} alt={blog.title} loading='lazy' />
      <BlogInfo>
        <small>{new Date(blog.publishedAt).toDateString()}</small>
        <BlogTitle>{blog.title}</BlogTitle>
        <p>{blog.brief.slice(0, 120) + '...'}</p>
      </BlogInfo>
    </BlogItem>
  );
};
export default BlogCard;

const BlogItem = styled.a`
  margin: 2em 0;
  text-decoration: none;
  border-radius: 4px;

  display: flex;

  img {
    margin-right: 1em;
    display: block;
    width: 100%;
    height: auto;
    max-width: 240px;
    border-radius: 6px;
    flex: 0.2;
  }

  small {
    opacity: 0.75;
  }

  p {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    display: block;

    img {
      max-width: 360px;
    }

    small {
      margin: 1em 0 0;
    }
  }
`;

const BlogInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.8;
  a {
    margin-top: auto;
  }

  @media (max-width: 768px) {
    flex: 1;
  }
`;

const BlogTitle = styled.h1`
  font-weight: 600;
  font-size: 1.2em;
  font-family: 'Poppins', sans-serif;
`;
