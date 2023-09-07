import styled from 'styled-components';
import { Container, SectionTitle } from '../styles/globalStyles';
import { HiExternalLink } from 'react-icons/hi';

const Resources = () => {
  return (
    <Container>
      <SectionTitle>Resources</SectionTitle>
      <p>A collection of resources that I used to learn web dev</p>

      <ListWrapper>
        <ListTitle>CSS</ListTitle>
        <List>
          <li>
            <a
              href='https://courses.kevinpowell.co/conquering-responsive-layouts'
              target={'_blank'}
              rel='noreferrer'
            >
              Mastering Responsive Layouts by <span>Kevin Powell</span>{' '}
              <HiExternalLink />
            </a>
          </li>
          <li>
            <a href='https://cssgrid.io/' target={'_blank'} rel='noreferrer'>
              CSS Grid by <span>Wes Bos</span> <HiExternalLink />
            </a>
          </li>
        </List>
      </ListWrapper>

      <ListWrapper>
        <ListTitle>JavaScript</ListTitle>
        <List>
          <li>
            <a
              href='https://developer.mozilla.org/en-US/'
              target={'_blank'}
              rel='noreferrer'
            >
              MDN Web Docs
              <HiExternalLink />
            </a>
          </li>
          <li>
            <a
              href='https://youtu.be/pN6jk0uUrD8?si=v4HhxvxOz_dnDP-s'
              target={'_blank'}
              rel='noreferrer'
            >
              Namaste JavaScript by <span>Akshay Saini</span> <HiExternalLink />
            </a>
          </li>
        </List>
      </ListWrapper>
    </Container>
  );
};

export default Resources;

const ListWrapper = styled.div`
  margin: 1em 0;
`;

const ListTitle = styled.p`
  font-size: 1.5em;
`;

const List = styled.ul`
  list-style-type: disc !important;
  padding-left: 2em;

  li a {
    display: flex;
    gap: 4px;
    align-items: center;
    text-decoration: none;
    color: #ccc;

    span {
      font-weight: bold;
      color: var(--accent-blue);
    }
  }
`;
