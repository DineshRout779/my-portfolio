import styled from 'styled-components';
import { Container, SectionTitle } from '../styles/globalStyles';
import { motion } from 'framer-motion';

const data = [
  {
    id: 1,
    company: 'Cryptonaukri',
    role: 'Software Developer Intern',
    fromDate: new Date('2022-04-04'),
    toDate: new Date('2022-07-04'),
    tasks: [
      'Built an QnA forum application',
      'Updated interfaces, fixed bugs',
      'Implemented new features',
      'Collaborated with backend devs to integrate the frontend with APIs',
    ],
  },
  {
    id: 2,
    company: 'IIT Delhi',
    role: 'Full-stack Developer',
    fromDate: new Date('2022-08-24'),
    toDate: new Date('2022-10-24'),
    tasks: [
      'Worked on an annotation tool',
      'Implemented features in both frontend and backend',
      'Fixed bugs in the frontend application',
    ],
  },
  {
    id: 3,
    company: 'CollegeToppr',
    role: 'Software Developer Intern',
    fromDate: new Date('2022-11-07'),
    toDate: new Date('2023-05-07'),
    tasks: [
      'Built more than 50+ client projects from landing pages to full-stack web applications',
      'Worked on both the frontend and backend technologies',
    ],
  },
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const Experience = () => {
  const monthDiff = (dateFrom, dateTo) => {
    return (
      dateTo.getMonth() -
      dateFrom.getMonth() +
      12 * (dateTo.getFullYear() - dateFrom.getFullYear())
    );
  };

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <SectionTitle>Work Experience</SectionTitle>

        <TimeLine>
          {data
            .sort((a, b) => b.fromDate.getTime() - a.fromDate.getTime())
            .map((ex) => (
              <TimeLineItem key={ex.id}>
                <ExperieceHeader>
                  <h3>
                    {ex.role}, {ex.company}
                  </h3>

                  <small>
                    {months[ex.fromDate.getMonth()] +
                      ' ' +
                      ex.fromDate.getFullYear()}{' '}
                    -{' '}
                    {months[ex.toDate.getMonth()] +
                      ' ' +
                      ex.toDate.getFullYear()}{' '}
                    ({monthDiff(ex.fromDate, ex.toDate)}{' '}
                    {monthDiff(ex.fromDate, ex.toDate) > 1 ? 'Months' : 'Month'}
                    )
                  </small>
                </ExperieceHeader>

                <TaskList>
                  {ex.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </TaskList>
              </TimeLineItem>
            ))}
        </TimeLine>
      </motion.div>
    </Container>
  );
};

export default Experience;

const TimeLine = styled.ul`
  list-style-type: none;
  margin: 1em 0;
  padding: 1em;
`;

const TimeLineItem = styled.li`
  padding: 0 0 2em 2em;
  border-left: 1px solid var(--accent-blue);
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: -4px;
    left: -6px;
    padding: 4px;
    border-radius: 50%;
    background-color: var(--accent-blue);
    border: 2px solid var(--accent-blue);
  }

  p {
    opacity: 0.7;
  }

  ul {
    padding: 0 1em;
  }
`;

const ExperieceHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  top: -10px;

  h3 {
    font-weight: 400;
  }

  small {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const TaskList = styled.ul`
  list-style-type: circle;

  li {
    color: var(--para-gray-color);
  }
`;
