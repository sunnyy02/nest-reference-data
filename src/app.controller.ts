import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ReferenceDataService } from './reference-data.factory';
import { Country, Industry } from './reference-data';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, 
    private readonly referenceDataFactory: ReferenceDataService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('country')
  async getCountries(): Promise<Country[]> {
    return await this.referenceDataFactory.getReferenceData('country');
  }

  @Get('industry')
  async getIndustries(): Promise<Industry[]> {
     return await this.referenceDataFactory.getReferenceData('industry');
  }
}
