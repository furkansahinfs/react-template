export const AUTH_ADD_TOKEN = "auth/addToken";
export const AUTH_CLEAR = "auth/clear";
export const AUTH_REMOVE_TOKEN = "auth/removeToken";

export type AuthState = {
	access_token: string;
};

export interface AuthAddTokenAction {
	type: typeof AUTH_ADD_TOKEN;
	payload: {
		access_token: string;
	};
}
export interface AuthRemoveTokenAction {
	type: typeof AUTH_REMOVE_TOKEN;
}

export type AuthAction = AuthAddTokenAction | AuthRemoveTokenAction;
