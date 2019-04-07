export interface LoginData {
  userName: string;
  accessToken: string;
  expiryInSeconds: number;
  result: string;
}

export interface LoginRequest {
  userName: string;
  password: string;
}