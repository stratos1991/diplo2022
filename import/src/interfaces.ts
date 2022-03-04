export interface IColNames {
  'DateTime': string,
  ResolutionCode: string,
  AreaCode: string, // For Physical Flows, assume AreaCode to be InAreaCode
  AreaTypeCode: string, // For Physical Flows, assume AreaTypeCode to be InAreaTypeCode
  MapCode: string, // For Physical Flows, assume MapCode to be InMapCode
  OutResolutionCode?: string,
  OutAreaCode?: string,
  OutAreaTypeCode?: string,
  OutMapCode?: string,
  TotalLoadValue: number,
  UpdateTime: string,
  GenerationUnitEIC?: string,
  PowerSystemResourceName?: string,
  ProductionType?: string,
  ReserveType?: string,
  TypeOfProduct?: string,
  Direction?: string,
  Currency?: string,
}
