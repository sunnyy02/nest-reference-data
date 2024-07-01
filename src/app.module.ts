import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReferenceDataFactory } from './reference-data.factory';
import { CountryService } from './country.service';
import { IndustryService } from './industry.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    ReferenceDataFactory,
    {
      provide: 'country',
      useClass: CountryService
    },
    {
      provide: 'industry',
      useClass: IndustryService
    }]
})
export class AppModule { }
