import { CountryModel } from '@/models';

export class CountryAdapter {
  private readonly country: any;

  constructor(country: any) {
    this.country = country;
  }

  request(): CountryModel {
    return {
      name: this.country.translations.spa.common,
      capital: this.country.capital[0],
      flag: {
        src: this.country.flags.png,
        alt: this.country.flags.alt
      }
    };
  }
}
