import { NavigateFunction } from "react-router-dom";
import api, { LoginRequest } from "../../../../../api";
import { setUserCredentials } from "../../../../../helpers";
import { store } from "../../../../../store";
import { alertShow } from "../../../../../store/alert";

export const sendRequest = async (
	email: string,
	password: string,
	navigate: NavigateFunction,
) => {
	const result = await LoginRequest(email, password);

	if (result.success) {
		// Save to the local storage and load to the redux
		setUserCredentials(result.data.refreshToken);
		api.setToken(result.data.accessToken);
		navigate("/");
	} else {
		store.dispatch(alertShow(result?.error ? result?.error : "Error", "error"));
	}
};
