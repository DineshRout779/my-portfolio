import styled from 'styled-components';
import { Container, SectionTitle } from '../styles/globalStyles';
import { SiGmail } from 'react-icons/si';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaTwitter, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <Container>
      <Section>
        <SectionTitle>Contact</SectionTitle>
        <p>Want to discuss about any project? or just say Hi👋</p>

        <ContactsList>
          <a href='mailto:rddinesh779@example.com'>
            <SiGmail />
            Gmail
          </a>
          <a
            href='https://www.linkedin.com/in/dineshrout7/'
            target='_blank'
            rel='noreferrer'
          >
            <AiFillLinkedin /> Linkedin
          </a>
          <a href='https://twitter.com/DineshRout779' rel='noreferrer'>
            <FaTwitter /> Twitter
          </a>
          <a href='https://github.com/DineshRout779' rel='noreferrer'>
            <FaGithub /> Github
          </a>
        </ContactsList>
      </Section>
    </Container>
  );
};
export default Contact;

const Section = styled.section`
  min-height: 90vh;

  p {
    color: var(--para-gray-color);
  }
`;

const ContactsList = styled.div`
  margin: 1em 0;
  a {
    margin: 0.5em 0;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0.5em 1em;
    border: 1px solid var(--para-gray-color);
    border-radius: 4px;
    text-decoration: none;

    svg {
      font-size: 1.2em;
    }
  }
`;
