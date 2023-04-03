import { AppContext } from '@/hooks';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import AdventureSVG from '../../assets/undraw_adventure_4hum 1.svg';
import { AnswerButton } from '../AnswerButton';

const Container = styled.div`
  position: relative;
  max-width: 20rem;
  min-width: 300px;
  padding: 2rem 2rem 1.5rem;
  border-radius: 1rem;
  background: #fff;
`;

const Flag = styled.img`
  width: 4rem;
  height: 2.5rem;
  border-radius: 0.25rem;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.25));
`;

const Statement = styled.p`
  padding-top: 1.5rem;
  line-height: 1.5;
  font-size: 1rem;
  font-weight: 700;
  color: #1d355d;
`;

const Answers = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0 1rem;
  gap: 1.25rem;
`;

const ContinueButton = styled.button`
  float: right;
  width: min-content;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.75rem;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  color: #fff;
  background: #f9a826;
  transition: background 200ms ease-in-out;

  &:hover {
    background: #fab13c;
  }
`;

const Asset = styled.img`
  position: absolute;
  top: -3rem;
  right: 0;
  width: 7rem;
  height: 5rem;
`;

const Question = () => {
  const { quiz, score, gameOver } = useContext(AppContext);
  const [showAnwer, setShowAnswer] = useState<boolean>(false);
  const [resumeQuiz, setResumeQuiz] = useState<boolean>(true);

  return (
    <Container>
      {quiz?.question.flag ? (
        <Flag src={quiz.question.flag.src} alt={quiz.question.flag.alt} />
      ) : undefined}
      <Statement>{quiz?.question.title}</Statement>
      <Answers>
        {quiz?.answers.map((answer) => (
          <AnswerButton
            key={answer.id}
            setResumeQuiz={setResumeQuiz}
            showAnswer={{ value: showAnwer, dispatch: setShowAnswer }}
            correctValue={quiz.question.answerId}
            value={answer.id}
            title={answer.title}
          />
        ))}
      </Answers>
      {showAnwer && (
        <ContinueButton
          onClick={() => {
            resumeQuiz
              ? score.dispatch((prevScore) => prevScore + 1)
              : gameOver.dispatch((value) => !value);
            setShowAnswer((value) => !value);
          }}>
          Continuar
        </ContinueButton>
      )}
      <Asset src={AdventureSVG} />
    </Container>
  );
};

export default Question;
