import { Injectable } from '@nestjs/common';
import { CountryService } from './country.service';
import { IndustryService } from './industry.service';
import { ReferenceDataService } from './base-reference-data.service';

@Injectable()
export class ReferenceDataFactory {
  constructor(private readonly countryService: CountryService, private readonly industryService: IndustryService) {}

  getReferenceDataService(type: string): ReferenceDataService<any> {
    switch (type) {
      case 'country':
        return this.countryService;
      case 'industry':
        return this.industryService;
      default:
        throw new Error(`Unsupported reference data type: ${type}`);
    }
  }
}