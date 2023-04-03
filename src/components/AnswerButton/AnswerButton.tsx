import { CSSProperties, SetStateAction, useState } from 'react';
import styled from 'styled-components';

const Button = styled.button<AnswerButtonProps>`
  padding: 0.5rem;
  border: 1px solid rgba(96 102 208 / 0.7);
  border-radius: 0.75rem;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  color: rgba(96 102 208 / 0.8);
  background: transparent;
  transition: background 150ms ease-in-out;

  &:hover {
    background: rgba(96 102 208 / 0.125);
  }
  // Print the correct answer when any button is clicked
  ${({ showAnswer, correctValue, value }) =>
    showAnswer.value && correctValue === value
      ? `
					border-color: transparent;
					color: #fff;
					background: #60bf88;	
					transition: none;

					&:hover {
						background: #60bf88;	
					}
				`
      : undefined}
`;

const WrongAnswerStyle: CSSProperties = {
  borderColor: 'transparent',
  color: '#fff',
  background: '#ea8282'
};

interface AnswerButtonProps {
  setResumeQuiz: React.Dispatch<SetStateAction<boolean>>;
  showAnswer: {
    value: boolean;
    dispatch: React.Dispatch<SetStateAction<boolean>>;
  };
  correctValue: number | string;
  value: number | string;
  title: string;
}

const AnswerButton: React.FC<AnswerButtonProps> = ({
  setResumeQuiz,
  showAnswer,
  correctValue,
  value,
  title
}) => {
  const [wrongStyles, setWrongStyles] = useState<CSSProperties>();

  return (
    <Button
      style={wrongStyles}
      {...{ setResumeQuiz, showAnswer, correctValue, value, title }}
      onClick={() => {
        showAnswer.dispatch((value) => !value);
        if (correctValue != value) {
          setResumeQuiz((value) => !value);
          setWrongStyles(WrongAnswerStyle);
        }
      }}
      disabled={showAnswer.value}>
      {title}
    </Button>
  );
};

export default AnswerButton;
