export interface DetailData {
  id: number;
  buildingName: string;
  elevatorCode: string;
  statusCode: string;
  statusDescription: string;
  lastUpdated: string;
}

export interface StatsData {
  elevatorCode: string;
  id: number;
  stats: any;
}

export interface StatsObj {
  name: string;
  value: string;
}
