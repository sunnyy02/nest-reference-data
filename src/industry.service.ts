import { Injectable } from '@nestjs/common';
import { Industry } from './reference-data';
import { BaseReferenceDataService } from './base-reference-data.service';

@Injectable()
export class IndustryService extends BaseReferenceDataService<Industry> {
  async getReferenceData(): Promise<Industry[]> {
    return [
      { id: 'TECH', name: 'Technology', sector: 'IT' },
      { id: 'FIN', name: 'Finance', sector: 'Services' },
    ];
  }
}