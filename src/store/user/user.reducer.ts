import { createReducer } from "@reduxjs/toolkit";
import { userAddUser, userRemoveUser } from "./user.action";
import { UserState } from "./user.types";

const initialState: UserState = {
	user: null,
};

export const userReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(userAddUser, (state, action) => {
			state.user = action.payload.user;
		})
		.addCase(userRemoveUser, (state) => {
			state.user = null;
		})
		.addDefaultCase((state, action) => {
			state = action.payload;
		});
});
