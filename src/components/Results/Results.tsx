import { AppContext } from '@/hooks';
import { useContext } from 'react';
import styled from 'styled-components';
import WinnerSVG from '../../assets/undraw_winners_ao2o 2.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 25rem;
  padding: 3rem 3rem 1.5rem;
  border-radius: 1rem;
  background: #fff;
`;

const Asset = styled.img`
  width: 14rem;
  height: 6rem;
`;

const H2 = styled.h2`
  margin: 0;
  font-size: 1.75rem;
  font-weight: 700;
  text-align: center;
  line-height: 1.5;
  color: #1d355d;
`;

const P = styled.h2`
  margin: 0;
  font-size: 0.875rem;
  font-weight: 400;
  text-align: center;
  color: #1d355d;

  span {
    font-size: 1.625rem;
    font-weight: 700;
    color: #6fcf97;
  }
`;

const TryAgainButton = styled.button`
  width: max-content;
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
  border: 2px solid #1d355d;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #1d355d;
  cursor: pointer;
  background: none;
`;

const Results = () => {
  const { score, gameOver } = useContext(AppContext);

  return (
    <Container>
      <Asset src={WinnerSVG} />
      <div>
        <H2>Resultados</H2>
        <P>
          Obtuviste <span>{score.value}</span>{' '}
          {score.value > 1 ? 'respuestas correctas' : 'respuesta correcta'}
        </P>
      </div>
      <TryAgainButton
        onClick={() => {
          gameOver.dispatch((value) => !value);
          score.dispatch(0);
        }}>
        Volver a intentar
      </TryAgainButton>
    </Container>
  );
};

export default Results;
