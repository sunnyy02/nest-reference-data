import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ReferenceDataService } from './reference-data.service';
import { Country, Industry } from './reference-data';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, 
    private readonly referenceDataFactory: ReferenceDataService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':dataType')
  async getReferenceData(@Param('dataType') dataType: string): Promise<Country[]> {
    return await this.referenceDataFactory.getReferenceData(dataType);
  }
}
