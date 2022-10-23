import styled from 'styled-components';
import { Container, SectionTitle } from '../styles/globalStyles';

const Contact = () => {
  return (
    <Container>
      <Section>
        <SectionTitle>Contact</SectionTitle>
      </Section>
    </Container>
  );
};
export default Contact;

const Section = styled.section`
  min-height: 90vh;
`;
