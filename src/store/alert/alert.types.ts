export const ALERT_SHOW = "alert/show";
export const ALERT_CLOSE = "alert/close";

export type AlertState = {
	message: string;
	isShown: boolean;
	severity: "error" | "warning" | "success" | "info";
};

export interface AlertShowAction {
	type: typeof ALERT_SHOW;
	payload: {
		message: string;
		severity: "error" | "warning" | "success" | "info";
		isShown: boolean;
	};
}

export interface AlertCloseAction {
	type: typeof ALERT_CLOSE;
	payload: { message: string; isShown: boolean };
}

export type AlertAction = AlertShowAction | AlertCloseAction;
