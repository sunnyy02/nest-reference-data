import { Injectable } from '@nestjs/common';
import { ReferenceDataItem } from './reference-data';

export interface ReferenceDataService<T extends ReferenceDataItem> {
  getReferenceData(): Promise<T[]>;
}