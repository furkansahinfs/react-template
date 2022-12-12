/* eslint-disable no-param-reassign */
import { createReducer } from "@reduxjs/toolkit";
import { alertClose, alertShow } from "./alert.action";
import { AlertState } from "./alert.types";

const initialState: AlertState = {
	message: "",
	isShown: false,
	severity: "info",
};

export const alertReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(alertShow, (state, action) => {
			state.message = action.payload.message;
			state.isShown = true;
			state.severity = action.payload.severity;
		})
		.addCase(alertClose, (state) => {
			state.message = "";
			state.isShown = false;
		})
		.addDefaultCase((state, action) => {
			state = action.payload;
		});
});
