import { createAction } from "@reduxjs/toolkit";
import { ALERT_CLOSE, ALERT_SHOW } from "./alert.types";

export const alertShow = createAction(
	ALERT_SHOW,
	function prepare(
		message: string,
		severity: "error" | "warning" | "success" | "info",
	) {
		return {
			payload: { message, severity, isShown: true },
		};
	},
);

export const alertClose = createAction(ALERT_CLOSE, function prepare() {
	return {
		payload: { message: "", isShown: false },
	};
});
