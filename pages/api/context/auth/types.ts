export type IAuth = {
  isLoggedIn: false,
  token: string,
  user_id: string
};

export enum ActionType {
  LOGGED_IN = 'LOGGED_IN',
  LOGOUT = 'LOGOUT',
}
