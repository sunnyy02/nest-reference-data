import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BaseReferenceDataService } from './base-reference-data.service';
import { ReferenceDataFactory } from './reference-data.factory';
import { CountryService } from './country.service';
import { IndustryService } from './industry.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ReferenceDataFactory, CountryService, IndustryService],
})
export class AppModule {}
