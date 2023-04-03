export interface CountryModel {
  name: string;
  capital: string;
  flag: {
    src: string;
    alt: string;
  };
}
export enum CountriesLocalStorage {
  key = 'countries'
}
