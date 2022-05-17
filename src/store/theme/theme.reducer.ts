import { ThemeAction, ThemeState, DARK, LIGHT } from "./theme.types";

const initialState: ThemeState = { theme: "LIGHT" };

export default function themeReducer(
	action: ThemeAction,
	state = initialState,
): ThemeState {
	switch (action?.type) {
		case DARK:
			return { ...state, ...action.payload };
		case LIGHT:
			return { ...state, ...action.payload };
		default:
			return state;
	}
}
