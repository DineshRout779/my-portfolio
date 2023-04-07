import styled from 'styled-components';
import { Container, HighlightedLink } from '../styles/globalStyles';
import { gsap } from 'gsap';
import { useRef } from 'react';
import { useEffect } from 'react';
import me from '../assets/me.jpg';
import resume from '../assets/dinesh_resume.pdf';
import { FiDownload } from 'react-icons/fi';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

const Intro = () => {
  const wrapperRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      wrapperRef.current,
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    );
  }, []);

  return (
    <Container>
      <Wrapper ref={wrapperRef}>
        <MyImg src={me} alt='Dinesh Rout' loading='lazy' />
        <Description>
          <Heading>Dinesh Rout</Heading>
          <Title>Full-stack Developer</Title>
          <Bio>Passionate about Technoloy and Startups | Life long learner</Bio>
          <HighlightedLink href={resume} download='Dinesh_resume'>
            Download Resume <FiDownload />
          </HighlightedLink>
          <IconsWrapper>
            <Icon href='https://github.com/DineshRout779' target='_blank'>
              <BsGithub />
            </Icon>
            <Icon
              href='https://www.linkedin.com/in/dineshrout7/'
              target='_blank'
            >
              <BsLinkedin />
            </Icon>
            <Icon href='https://twitter.com/DineshRout779' target='_blank'>
              <BsTwitter />
            </Icon>
          </IconsWrapper>
        </Description>
      </Wrapper>
    </Container>
  );
};

export default Intro;

const Wrapper = styled.div`
  padding: 2em 0;
  margin: 2em 0;
  min-height: 50vh;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
    gap: 12em;
  }
`;

const Description = styled.div`
  flex-grow: 1;
`;

const Heading = styled.h1`
  font-size: 3em;
  line-height: 1.2;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`;

const Title = styled.p`
  font-size: 1.2em;
  font-weight: 400;
`;

const Bio = styled.p`
  color: var(--other-para-color);
  font-size: 0.9em;
  margin-bottom: 1em;
`;

const MyImg = styled.img`
  display: block;
  width: 50%;
  max-width: 160px;
  border-radius: 50%;

  @media (max-width: 768px) {
    margin-bottom: 1.5em;
    max-width: 80px;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 1em;
`;

const Icon = styled.a`
  color: var(--para-color);
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4em;

  :hover {
    color: var(--accent-blue);
  }
`;
