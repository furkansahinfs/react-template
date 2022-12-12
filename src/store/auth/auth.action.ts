import { createAction } from "@reduxjs/toolkit";
import { AUTH_ADD_TOKEN, AUTH_REMOVE_TOKEN } from "./auth.types";

export const authAddToken = createAction(
	AUTH_ADD_TOKEN,
	function prepare(access_token: string) {
		return {
			payload: { access_token },
		};
	},
);

export const authRemoveToken = createAction(
	AUTH_REMOVE_TOKEN,
	function prepare() {
		return {
			payload: { access_token: "" },
		};
	},
);
