import { UserProps } from "../../interfaces/interfaces";

export const USER_ADD_USER = "user/addUser";
export const USER_REMOVE_USER = "user/removeUser";

export type UserState = {
	user: UserProps | null;
};

export interface UserAddUserAction {
	type: typeof USER_ADD_USER;
	payload: {
		user: UserProps;
	};
}
export interface UserRemoveUserAction {
	type: typeof USER_REMOVE_USER;
}

export type AuthAction = UserAddUserAction | UserRemoveUserAction;
