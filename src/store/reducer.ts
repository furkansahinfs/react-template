import { combineReducers } from "@reduxjs/toolkit";
import { alertReducer } from "./alert";
import { authReducer } from "./auth";
import { languageReducer } from "./language";
import { userReducer } from "./user";
import { themeReducer } from "./theme";

export const reducer = combineReducers({
	alert: alertReducer,
	language: languageReducer,
	theme: themeReducer,
	userCredentials: authReducer,
	userInfo: userReducer,
});
