import { Answer, CountryModel, QuizModel, Question } from '@/models';
import { IArray } from '@/utils';

export class QuizAdapter {
  private readonly countries: CountryModel[];

  constructor(countries: CountryModel[]) {
    this.countries = countries;
  }

  request(): QuizModel {
    const answers: Answer[] = this.countries.map((country, index) => ({
      id: index,
      title: country.name
    }));

    const correctAnswerId = IArray.random(answers, 1).pop()?.id as number;

    const question: Question = !!Math.round(Math.random())
      ? {
          title: `${this.countries[correctAnswerId].capital} es la capital de `,
          answerId: correctAnswerId
        }
      : {
          title: `¿A que país le pertenece esta bandera?`,
          flag: this.countries[correctAnswerId].flag,
          answerId: correctAnswerId
        };

    return { question, answers };
  }
}
