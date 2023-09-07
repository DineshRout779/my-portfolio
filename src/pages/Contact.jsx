import { motion } from 'framer-motion';

import styled from 'styled-components';
import { Container } from '../styles/globalStyles';

const contactIcons = [
  {
    url: './icons/gmail.svg',
    linkTo: 'mailto:rddinesh779@example.co',
    altText: 'gmail',
  },
  {
    url: './icons/linkedin.svg',
    linkTo: 'https://www.linkedin.com/in/dineshrout7/',
    altText: 'linkedin',
  },
  {
    url: './icons/twitter.svg',
    linkTo: 'https://twitter.com/DineshRout779',
    altText: 'twitter',
  },
];

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

const Contact = () => {
  return (
    <Container>
      <Wrapper
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <TextWrapper>
          <Heading>Contact</Heading>

          <Text>
            I'm currently looking for frontend internships at startups. Have an
            opening? Please reach out to me.
          </Text>

          <IconsWrapper variants={container} initial='hidden' animate='visible'>
            {contactIcons.map((icon, i) => (
              <IconLink href={icon.linkTo} key={i} variants={item}>
                <img src={icon.url} alt={icon.altText} />
              </IconLink>
            ))}
          </IconsWrapper>
        </TextWrapper>
        <ImageWrapper>
          <Image src='./imgs/contact.svg' alt='' />
        </ImageWrapper>
      </Wrapper>
    </Container>
  );
};
export default Contact;

const Wrapper = styled(motion.div)`
  min-height: 70vh;
  display: flex;
  justify-content: space-between;
  gap: 4em;
  padding: 2em 0;

  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }
`;

const TextWrapper = styled.div`
  padding: 2em 0;
  flex: 0.5;
  img {
    display: block;
    width: 48px;
    height: 48px;
  }
`;

const IconsWrapper = styled(motion.div)`
  display: flex;
  gap: 1em;
  margin: 1em 0;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
  }
`;

const IconLink = styled(motion.a)`
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.3);
  }
`;

const Heading = styled.h1`
  font-size: 2em;
  line-height: 1.4;
  margin-bottom: 0.6em;
`;

const Text = styled.p`
  @media (max-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
`;

const ImageWrapper = styled.div`
  flex: 0.5;
`;

const Image = styled.img`
  width: 100%;
  display: block;
  max-width: 480px;
  margin: 0 auto;
`;
