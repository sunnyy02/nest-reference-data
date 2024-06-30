import { Injectable } from '@nestjs/common';
import { Country } from './reference-data';
import { BaseReferenceDataService } from './base-reference-data.service';

@Injectable()
export class CountryService extends BaseReferenceDataService<Country> {
  async getReferenceData(): Promise<Country[]> {
    return [
      { id: 'US', name: 'United States', continent: 'North America' },
      { id: 'CA', name: 'Canada', continent: 'North America' },
    ];
  }
}