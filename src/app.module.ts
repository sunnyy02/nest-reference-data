import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReferenceDataFactory } from './reference-data.factory';
import { CountryService } from './country.service';
import { IndustryService } from './industry.service';

const COUNTRY_DATA_TOKEN = 'country';
const INDUSTRY_DATA_TOKEN = 'industry';
@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    ReferenceDataFactory,
    {
      provide: COUNTRY_DATA_TOKEN,
      useClass: CountryService
    },
    {
      provide: INDUSTRY_DATA_TOKEN,
      useClass: IndustryService
    }]
})
export class AppModule { }
