export interface ListData {
  count: number;
  elevators: ElevatorObj[];
  rbody?: ListRequest;
}

export interface ElevatorObj {
  id: number;
  buildingName: string;
  elevatorCode: string;
  statusCode: string;
  statusDescription: string;
  lastUpdated: string;
}

export interface ListRequest {
  pageSize: number;
  pageNumber: number;
}
