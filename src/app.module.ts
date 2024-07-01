import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BaseReferenceDataService } from './base-reference-data.service';
import { CountryService } from './country.service';
import { IndustryService } from './industry.service';
import { ReferenceDataService } from './reference-data.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ReferenceDataService, CountryService, IndustryService],
})
export class AppModule {}
