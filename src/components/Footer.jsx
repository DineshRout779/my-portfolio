import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../styles/globalStyles';
import { AiFillHeart } from 'react-icons/ai';

const Footer = () => {
  return (
    <Container>
      <FooterWrapper>
        <Row>
          <Col>
            <ColTitle>Socials</ColTitle>

            <SiteLink href='https://github.com/DineshRout779' target='_blank'>
              Github
            </SiteLink>
            <SiteLink
              href='https://www.linkedin.com/in/dineshrout7/'
              target='_blank'
            >
              LinkedIn
            </SiteLink>
            <SiteLink href='https://twitter.com/DineshRout779' target='_blank'>
              Twitter
            </SiteLink>
            <SiteLink href='https://coderdinesh.hashnode.dev/' target='_blank'>
              Hashnode
            </SiteLink>
          </Col>
          {/* col 2 */}
          <Col>
            <ColTitle>Quick Links</ColTitle>
            <SiteRouterLink to='/'>About</SiteRouterLink>
            <SiteRouterLink to='/projects'>Projects</SiteRouterLink>
            <SiteRouterLink to='/blogs'>Blogs</SiteRouterLink>
            <SiteRouterLink to='/contact'>Contact</SiteRouterLink>
          </Col>
          {/* col 3 */}
          <Col>
            <ColTitle>Other</ColTitle>
            <SiteRouterLink to='/resources'>Resources</SiteRouterLink>
            <SiteRouterLink to='/feedback'>Feedback</SiteRouterLink>
          </Col>
        </Row>
      </FooterWrapper>
      <Attribution>
        Made with <AiFillHeart color='yellow' /> by{' '}
        <a
          href='https://github.com/DineshRout779'
          rel='noreferrer'
          target='_blank'
        >
          Dinesh Rout
        </a>
      </Attribution>
    </Container>
  );
};
export default Footer;

const FooterWrapper = styled.footer`
  border-top: 1px solid var(--line);
  padding: 2em 0;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;

const Col = styled.div`
  width: 100%;
`;

const ColTitle = styled.p`
  font-size: 1.2em;
  margin-bottom: 0.5em;
`;

const SiteLink = styled.a`
  display: block;
  width: fit-content;
  text-decoration: none;
  margin: 0.5em 0;
  :hover {
    opacity: 0.8;
  }
`;

const SiteRouterLink = styled(Link)`
  display: block;
  width: fit-content;
  text-decoration: none;
  margin: 0.5em 0;
  :hover {
    opacity: 0.8;
  }
`;

const Attribution = styled.div`
  margin: 2em 0;
  margin-top: 0;
  display: flex;
  align-items: center;
  gap: 6px;
`;
