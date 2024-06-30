import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ReferenceDataService } from './base-reference-data.service';
import { Country, Industry } from './reference-data';
import { ReferenceDataFactory } from './reference-data.factory';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, 
    private readonly referenceDataFactory: ReferenceDataFactory) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('country')
  async getCountries(): Promise<Country[]> {
    const countryService = this.referenceDataFactory.getReferenceDataService('country') as ReferenceDataService<Country>;
    return await countryService.getReferenceData();
  }

  @Get('industry')
  async getIndustries(): Promise<Industry[]> {
    const industryService = this.referenceDataFactory.getReferenceDataService('industry') as ReferenceDataService<Industry>;
    return await industryService.getReferenceData();
  }
}
