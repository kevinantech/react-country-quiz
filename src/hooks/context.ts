import { createContext } from 'react';
import { CountryModel, QuizModel } from '@/models';

type ContextType = {
  score: {
    value: number;
    dispatch: React.Dispatch<React.SetStateAction<number>>;
  };
  gameOver: {
    value: boolean;
    dispatch: React.Dispatch<React.SetStateAction<boolean>>;
  };
  quiz: QuizModel | undefined;
};

export const AppContext = createContext<ContextType>({} as ContextType);
