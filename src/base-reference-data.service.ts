import { Injectable } from '@nestjs/common';
import { ReferenceDataItem } from './reference-data';

export interface ReferenceDataService<T extends ReferenceDataItem> {
  getReferenceData(): Promise<T[]>;
}

@Injectable()
export abstract class BaseReferenceDataService<T extends ReferenceDataItem> implements ReferenceDataService<T> {
  abstract getReferenceData(): Promise<T[]>;
}