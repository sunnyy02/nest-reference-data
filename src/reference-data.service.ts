import { Injectable } from '@nestjs/common';
import { CountryService } from './country.service';
import { IndustryService } from './industry.service';

@Injectable()
export class ReferenceDataService {
    constructor(
        private readonly countryService: CountryService,
        private readonly industryService: IndustryService
    ) { }

    async getReferenceData(type: string): Promise<any[]> {
        switch (type) {
            case 'country':
                return await this.countryService.getReferenceData();
            case 'industry':
                return await this.industryService.getReferenceData();
            default:
                throw new Error(`Unsupported reference data type: ${type}`);
        }
    }
}