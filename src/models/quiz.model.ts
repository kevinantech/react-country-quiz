export interface Question {
  title: string;
  flag?: {
    src: string;
    alt: string;
  };
  answerId: number;
}

export interface Answer {
  id: number;
  title: string;
}

export interface QuizModel {
  question: Question;
  answers: Answer[];
}
