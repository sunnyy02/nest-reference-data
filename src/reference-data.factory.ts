import { Injectable, OnModuleInit } from '@nestjs/common';
import { ModuleRef, Reflector } from '@nestjs/core';
import { ReferenceDataService } from './base-reference-data.service';
import { ReferenceDataItem } from './reference-data';

@Injectable()
export class ReferenceDataFactory {
    constructor(private readonly moduleRef: ModuleRef) { }

    async getReferenceDataService(type: string) {
        const service = await this.moduleRef.resolve(type) as ReferenceDataService<ReferenceDataItem>;
        return await service.getReferenceData();
    }
}