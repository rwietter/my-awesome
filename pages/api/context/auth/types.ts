export type IAuth = {
	isLoggedIn: false;
	token: string;
	userId: string;
};

export enum ActionType {
  LOGGED_IN = 'LOGGED_IN',
  LOGOUT = 'LOGOUT',
}
