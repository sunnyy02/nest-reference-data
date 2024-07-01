import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ReferenceDataService } from './base-reference-data.service';
import { Country, Industry, ReferenceDataItem } from './reference-data';
import { ReferenceDataFactory } from './reference-data.factory';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, 
    private readonly referenceDataFactory: ReferenceDataFactory) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Get(':dataType')
  async getIndustries(@Param('dataType') dataType: string): Promise<ReferenceDataItem[]> {
    return await this.referenceDataFactory.getReferenceDataService(dataType);
  }
}
