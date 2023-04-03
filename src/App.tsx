import { CountryAdapter, QuizAdapter } from '@/adapters';
import { Loading, Question, Results } from '@/components';
import { AppContext } from '@/hooks';
import { CountriesLocalStorage, CountryModel, QuizModel } from '@/models';
import { IArray, getLocalStorage, setLocalStorage } from '@/utils';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Background from './assets/background.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: url(${Background}) center;
  background-size: cover;
`;

const QuizBox = styled.div`
  flex: 1;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  margin-bottom: 0.5rem;
  font-size: 1.125rem;
  font-weight: 700;
  color: #f2f2f2;
`;

const Footer = styled.footer`
  margin-bottom: 1rem;
  text-align: center;
  color: #f2f2f2;
  p {
    margin: 0;
    font-size: 0.75rem;
    a {
      font-weight: 500;
      text-decoration: underline;
      &:link,
      &:visited {
        color: inherit;
      }
    }
  }
`;

function App() {
  const [quiz, setQuiz] = useState<QuizModel>();
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [countries, setCountries] = useState<CountryModel[]>(
    getLocalStorage(CountriesLocalStorage.key)
      ? JSON.parse(getLocalStorage(CountriesLocalStorage.key))
      : undefined
  );
  const [loading, setLoading] = useState<boolean>(countries ? false : true);

  // Calling API once
  useEffect(() => {
    if (!countries) getCountriesFromAPI();
  }, []);

  // Generates the questions
  useEffect(() => {
    if (!gameOver && countries) createQuiz(countries);
  }, [score, gameOver, countries]);

  const getCountriesFromAPI = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    if (response.ok) {
      const result: Array<any> = await response.json();
      const countriesWithCapital = result.filter((country) => country.capital);
      const countries = countriesWithCapital.map((country) =>
        new CountryAdapter(country).request()
      );
      setCountries(countries);
      setLocalStorage(CountriesLocalStorage.key, countries);
    }
    setLoading(false);
  };

  const createQuiz = (countries: CountryModel[]) => {
    const countriesForAnswer = IArray.random(countries, 4, false);
    const createdQuiz = new QuizAdapter(countriesForAnswer).request();
    setQuiz(createdQuiz);
  };

  return (
    <AppContext.Provider
      value={{
        score: { value: score, dispatch: setScore },
        gameOver: { value: gameOver, dispatch: setGameOver },
        quiz
      }}>
      <Container>
        <QuizBox>
          <Title>COUNTRY QUIZ</Title>
          {gameOver ? <Results /> : <Question />}
        </QuizBox>
        <Footer>
          <p>
            created by{' '}
            <a href="https://github.com/kevinantech" target="_blank">
              kevinantech
            </a>
          </p>
        </Footer>
      </Container>
      <Loading open={loading} />
    </AppContext.Provider>
  );
}

export default App;
