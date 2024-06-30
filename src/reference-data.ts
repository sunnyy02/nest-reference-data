export interface ReferenceDataItem {
    id: string;
    name: string;
  }
  
  export interface Country extends ReferenceDataItem {
    continent: string;
  }
  
  export interface Industry extends ReferenceDataItem {
    sector: string;
  }