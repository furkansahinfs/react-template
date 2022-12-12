import { createReducer } from "@reduxjs/toolkit";
import { authAddToken, authRemoveToken } from "./auth.action";
import { AuthState } from "./auth.types";

const initialState: AuthState = {
	access_token: "",
};

export const authReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(authAddToken, (state, action) => {
			state.access_token = action.payload.access_token;
		})
		.addCase(authRemoveToken, (state) => {
			state.access_token = "";
		});
});
