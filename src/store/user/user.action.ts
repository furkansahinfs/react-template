import { createAction } from "@reduxjs/toolkit";
import { UserProps } from "../../interfaces/interfaces";
import { USER_ADD_USER, USER_REMOVE_USER } from "./user.types";

export const userAddUser = createAction(
	USER_ADD_USER,
	function prepare(user: UserProps) {
		return {
			payload: { user },
		};
	},
);

export const userRemoveUser = createAction(
	USER_REMOVE_USER,
	function prepare() {
		return {
			payload: { user: null },
		};
	},
);
