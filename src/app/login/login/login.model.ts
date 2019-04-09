export interface LoginData {
  userName: string;
  accessToken: string;
  expiryInSeconds: number;
  result: string;
  refreshToken: string;
}

export interface LoginRequest {
  userName: string;
  password: string;
}
