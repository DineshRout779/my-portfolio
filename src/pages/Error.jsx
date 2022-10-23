import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Error = () => {
  return (
    <ErrorLayout>
      <h1>Error 404</h1>

      <p>Page not found! 😢</p>
      <LinkToHome to='/'>Go Home</LinkToHome>
    </ErrorLayout>
  );
};
export default Error;

const ErrorLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;

  h1 {
    font-size: 5em;
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 1em;
  }
`;

const LinkToHome = styled(Link)`
  background-color: #4c4ceb;
  text-decoration: none;
  padding: 0.4em 1.2em;
  border-radius: 4px;
  color: white;
`;
